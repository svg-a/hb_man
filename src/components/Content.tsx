import {Grid, GridItem, Text, Flex, Spacer, Button, useDisclosure, Image} from "@chakra-ui/react";
import { useMediaQuery } from "@chakra-ui/react"
import {ethers, utils} from "ethers";
import redAbi from "../constants/red.json";
import {Contract} from "@ethersproject/contracts";
import {useContractFunction, useEtherBalance, useEthers, useTokenBalance} from "@usedapp/core";
import React, {useState,useEffect} from "react";
import axios from 'axios';
import * as timers from "timers";
import tokenAbi from "../constants/redbase.json";
import moment from 'moment'

export default function  ContentBar () {

    const [money,setMoney] = useState('暂无');
    const [redNub,setRednub] = useState('暂无');
    const [endtime,setEndtime] = useState('暂无');
    const [count,setCount] = useState('暂无');

    const [isMobile] = useMediaQuery("(min-width: 1000px)")

    const { isOpen, onOpen, onClose } = useDisclosure();
    const { activateBrowserWallet, account,error } = useEthers();

    const etherBalance = useEtherBalance(account)

    // 合约地址
    const contract_RedAddress = '0x8Ab2BE75efdb4704094b5B5c715A7608bB3B1B3F';
    const redpkgInterface = new utils.Interface(redAbi);
    let provider = new ethers.providers.JsonRpcProvider('http://localhost:7545')


    // 获得红包数据
    async function contentRed(){

        const token = new ethers.Contract(contract_RedAddress, redpkgInterface,provider )
        let number = await token.counter()
        let numberTen = JSON.stringify(parseInt(number._hex))
        let nubRed = await token.packageInfos(Number(numberTen) -1)


        let nubRed1 = Number(numberTen) -1
        let xxx = await token.recordAll(nubRed1)

        let x = JSON.stringify(nubRed)
        let jonsRed = JSON.parse(x)
        // console.log(jonsRed[2])
        setMoney(JSON.stringify(parseInt(jonsRed[2].hex)))
        // console.log(JSON.stringify(parseInt(jonsRed[2].hex)))

        setRednub(JSON.stringify(parseInt(jonsRed[1].hex)+xxx.length))
        // console.log(JSON.stringify(parseInt(jonsRed[2].hex)),xxx.length)
        // setEndtime(moment(JSON.stringify(parseInt(jonsRed[4].hex))).format("YYYY-MM-DD"))
        let times = JSON.stringify(parseInt(jonsRed[4].hex))
        // console.log(times)
        // console.log(moment(parseInt(times)).format("YYYY-MM-DD"))
        setEndtime(moment(parseInt(times)*1000).format("YYYY-MM-DD"))

        setCount(JSON.stringify(parseInt(jonsRed[1].hex)))




    }
    contentRed();


    return isMobile ? (

        <Grid
            h='120px'
            width = '100%'
            maxW = '1200px'
            marginTop='2'
            templateRows='repeat(1, 1fr)'
            templateColumns='repeat(4, 1fr)'
            gap={2}
            bg='gray.800'
            paddingLeft='10px'
            paddingRight='10px'
        >

            {/*<GridItem rowSpan={2} colSpan={1} bg='tomato' borderRadius="5"> </GridItem>*/}
            <GridItem colSpan={1} bg='dark'  borderRadius="15"    lineHeight='160px'>
                <Grid
                    h='120px'
                    templateRows='repeat(2, 1fr)'
                    templateColumns='repeat(3, 2fr)'
                    gap={1}  borderRadius="15" background={' linear-gradient(75deg, #ff0844 0%, #ffb199 100%);'}
                >
                    {/*<Button  rowSpan={2} onClick={contentRed} >123123</Button>*/}
                    <GridItem rowSpan={2} fontSize = '20px' fontWeight='bold' color='white' w='120px' h='120px' textAlign='center' lineHeight='120px'  colSpan={1} bg='' >
                        {money?money:'暂无'}
                    </GridItem>
                    <GridItem  colSpan={2} fontSize = '20px' fontWeight='bold' color='white' h='58px' textAlign='center' lineHeight='77px'  bg='' >
                        红包金额
                    </GridItem>

                    <GridItem colSpan={2} fontSize = '13px'  color='white' h='58px' textAlign='center' lineHeight='33px'   bg='' >
                        根据每日获得收益发放
                    </GridItem>
                </Grid>

            </GridItem>

            <GridItem colSpan={1} bg='dark'  borderRadius="15"    lineHeight='160px' >
                <Grid
                    h='120px'
                    templateRows='repeat(2, 1fr)'
                    templateColumns='repeat(3, 2fr)'
                    gap={1}  background={' linear-gradient(75deg, #c471f5 0%, #fa71cd 100%);'} borderRadius="15"
                >
                    <GridItem  rowSpan={2} fontSize = '20px' fontWeight='bold' color='white' w='120px' h='120px' textAlign='center' lineHeight='120px'  colSpan={1} bg='' >
                        {redNub?redNub:'暂无'}
                    </GridItem>
                    <GridItem colSpan={2} fontSize = '20px' fontWeight='bold' color='white' h='58px' textAlign='center' lineHeight='77px'  bg='' >
                        红包数量
                    </GridItem>
                    <GridItem colSpan={2} fontSize = '13px' color='white' h='58px' textAlign='center' lineHeight='33px'   bg='' >
                        每日参与人数取中间值
                    </GridItem>
                </Grid>

            </GridItem>
            <GridItem colSpan={1} bg='dark'  borderRadius="15"   lineHeight='160px'>
                <Grid
                    h='120px'
                    templateRows='repeat(2, 1fr)'
                    templateColumns='repeat(3, 2fr)'
                    gap={1} background={' linear-gradient(-45deg, #FFC796 0%, #FF6B95 100%);'}  borderRadius="15"
                >
                    <GridItem  rowSpan={2} fontSize = '20px' fontWeight='bold' color='white' w='120px' h='120px' textAlign='center' lineHeight='120px'  colSpan={1} bg='' >
                        {endtime?endtime:'暂无'}
                    </GridItem>
                    <GridItem colSpan={2} fontSize = '20px' fontWeight='bold' color='white' h='58px' textAlign='center' lineHeight='77px'  bg='' >
                        截止日期
                    </GridItem>
                    <GridItem colSpan={2} fontSize = '13px' color='white' h='58px' textAlign='center' lineHeight='33px'   bg='' >
                        每日21:00-22:00开始
                    </GridItem>
                </Grid>

            </GridItem>
            <GridItem colSpan={1} bg='dark'  borderRadius="15"  lineHeight='160px'>
                <Grid
                    h='120px'
                    templateRows='repeat(2, 1fr)'
                    templateColumns='repeat(3, 2fr)'
                    gap={1} background={'linear-gradient(-45deg, #209cff 0%, #68e0cf 100%);'}  borderRadius="15"
                >
                    <GridItem  rowSpan={2} fontSize = '20px' fontWeight='bold' color='white' w='120px' h='120px' textAlign='center' lineHeight='120px'  colSpan={1} bg='' >
                        {count}
                    </GridItem>
                    <GridItem colSpan={2} fontSize = '20px' fontWeight='bold' color='white' h='58px' textAlign='center' lineHeight='77px'  bg='' >
                        剩余数量
                    </GridItem>
                    <GridItem colSpan={2} fontSize = '13px'  color='white' h='58px' textAlign='center' lineHeight='33px'   bg='' >
                        根据领取数量自动减少
                    </GridItem>
                </Grid>

            </GridItem>

        </Grid>
    ):(
        <Grid

            h='510px'
            width = '100%'
            maxW = '1200px'
            marginTop='2'
            templateRows='repeat(4, 1fr)'
            templateColumns='repeat(1, 1fr)'
            gap={2}
            bg='gray.800'
            paddingLeft='10px'
            paddingRight='10px'
        >
            {/*<GridItem rowSpan={2} colSpan={1} bg='tomato' borderRadius="5"> </GridItem>*/}
            <GridItem colSpan={1} bg='dark'     lineHeight='160px'>
                <Grid
                    h='120px'
                    templateRows='repeat(2, 1fr)'
                    templateColumns='repeat(3, 2fr)'
                    gap={1} background={'linear-gradient(to bottom right, pink, red)'} borderRadius="15"
                >
                    <GridItem  rowSpan={2} fontSize = '20px' fontWeight='bold' color='white' h='120px' textAlign='center' lineHeight='120px'  colSpan={1} bg='' >
                        {money?money:'暂无'}
                    </GridItem>
                    <GridItem colSpan={2} fontSize = '20px' fontWeight='bold' color='white' h='58px' textAlign='center' lineHeight='77px'  bg='' >
                        红包金额
                    </GridItem>
                    <GridItem colSpan={2} fontSize = '13px'  color='white' h='58px' textAlign='center' lineHeight='33px'   bg='' >
                        根据每日获得收益发放
                    </GridItem>
                </Grid>

            </GridItem>

            <GridItem colSpan={1} bg='dark'  borderRadius="15"  lineHeight='160px' >
                <Grid
                    h='120px'
                    templateRows='repeat(2, 1fr)'
                    templateColumns='repeat(3, 2fr)'
                    gap={1}  background={' linear-gradient(to top, #c471f5 0%, #fa71cd 100%);'} borderRadius="15"
                >
                    <GridItem  rowSpan={2} fontSize = '20px' fontWeight='bold' color='white'   h='120px' textAlign='center' lineHeight='120px'  colSpan={1} bg='' >
                        {redNub?redNub:'暂无'}
                    </GridItem>
                    <GridItem colSpan={2} fontSize = '20px' fontWeight='bold' color='white' h='58px' textAlign='center' lineHeight='77px'  bg='' >
                        红包数量
                    </GridItem>
                    <GridItem colSpan={2} fontSize = '13px' color='white' h='58px' textAlign='center' lineHeight='33px'   bg='' >
                        每日参与人数取中间值
                    </GridItem>
                </Grid>

            </GridItem>
            <GridItem colSpan={1} bg='dark'  borderRadius="15"  lineHeight='160px'>
                <Grid
                    h='120px'
                    templateRows='repeat(2, 1fr)'
                    templateColumns='repeat(3, 2fr)'
                    gap={1} background={' linear-gradient(-45deg, #FFC796 0%, #FF6B95 100%);'}  borderRadius="15"
                >
                    <GridItem  rowSpan={2} fontSize = '20px' fontWeight='bold' color='white'   h='120px' textAlign='center' lineHeight='120px'  colSpan={1} bg='' >
                        {endtime?endtime:'暂无'}
                    </GridItem>
                    <GridItem colSpan={2} fontSize = '20px' fontWeight='bold' color='white' h='58px' textAlign='center' lineHeight='77px'  bg='' >
                        截止日期
                    </GridItem>
                    <GridItem colSpan={2} fontSize = '13px' color='white' h='58px' textAlign='center' lineHeight='33px'   bg='' >
                        每日21:00-22:00开始
                    </GridItem>
                </Grid>

            </GridItem>
            <GridItem colSpan={1} bg='dark'  borderRadius="15"   lineHeight='160px'>
                <Grid
                    h='120px'
                    templateRows='repeat(2, 1fr)'
                    templateColumns='repeat(3, 2fr)'
                    gap={1} background={'linear-gradient(to top, #209cff 0%, #68e0cf 100%);'}  borderRadius="15"
                >
                    <GridItem  rowSpan={2} fontSize = '20px' fontWeight='bold' color='white'   h='120px' textAlign='center' lineHeight='120px'  colSpan={1} bg='' >
                        {count}
                    </GridItem>
                    <GridItem colSpan={2} fontSize = '20px' fontWeight='bold' color='white' h='58px' textAlign='center' lineHeight='77px'  bg='' >
                        剩余数量
                    </GridItem>
                    <GridItem colSpan={2} fontSize = '13px'  color='white' h='58px' textAlign='center' lineHeight='33px'   bg='' >
                        根据领取数量自动减少
                    </GridItem>
                </Grid>

            </GridItem>

        </Grid>
    );

}
