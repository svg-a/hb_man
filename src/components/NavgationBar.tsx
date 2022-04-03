import {
    Button,
    Box,
    Spacer,
    Wrap,
    useDisclosure,
    WrapItem,
    Avatar,
    Modal,
    ModalOverlay,
    ModalContent, ModalHeader, ModalCloseButton, ModalBody, FormControl, Input, ModalFooter
} from "@chakra-ui/react";
import ConnectButton from "./ConnectButton";
import AccountModal from "./AccountModal";
import Layout from "./Layout";
import React, {Component, useEffect, useState} from "react";
import tokenAbi from '../constants/redbase.json';
import redAbi from '../constants/red.json';
import Web3 from "web3";
import {ethers, providers, utils} from "ethers";
import {
    useEthers,
    useContractFunction,
    useSendTransaction,
    DAppProvider,
    useEtherBalance,
    useTokenAllowance,
    useCall, useTokenBalance
} from "@usedapp/core";
import { Contract, } from '@ethersproject/contracts'
import {formatUnits} from "ethers/lib/utils";
import {UseDisclosureProps} from "@chakra-ui/hooks/dist/types/use-disclosure";
import {on} from "cluster";
import SendRedBox from "./SendRedBox";
import SendButton from "./SendButton";


export default function NavgationBar()  {

    const { isOpen, onOpen, onClose } = useDisclosure();
    const { activateBrowserWallet, account,error } = useEthers();
    const [isNone,setIsNone] = useState('暂无');
    const [isOpenRed,setIsOpenRed] = useState(false);

    const etherBalance = useEtherBalance(account)


    // 合约地址
    // const contract_RedAddress = '0xFd735188a8c5B4E5b8cf647DC13DF07Ba686a53A';
    const contract_RedAddress = '0x8Ab2BE75efdb4704094b5B5c715A7608bB3B1B3F';

    // 带币合约
    // const contract_TokenAddress = '0xC37ceFb6017ac4ae620A534ACEcAEcAb2f10D548'
    const contract_TokenAddress = '0x88D37b9a55Cdb193866EBD991341E5FE9B7faaAc'

    const tokenInterface = new utils.Interface(tokenAbi);
    const redpkgInterface = new utils.Interface(redAbi);


    let provider = new ethers.providers.JsonRpcProvider('http://localhost:7545')
    // const wethContractAddress = '0x9076E390a123d0c90aA6316E75700e77796B0320';
    const contract_token = new Contract(contract_TokenAddress, tokenInterface)  as any
    const contract_pkg = new Contract(contract_RedAddress, redpkgInterface)  as any

    // const contract_redpkg = new Contract(contractAddress, wethInterface)  as any


    // const { state, send } = useContractFunction(contract, 'deposit', { transactionName: 'Wrap' })
    //
    // const depositEther = (etherAmount: string) => {
    //     send({ value: utils.parseEther(etherAmount) })
    // }

    // 处理钱包是否激活
    const [activateError, setActivateError] = useState('')
    useEffect(() => {
        if (error) {
            setActivateError(error.message)
            // SendRed()

        }
        // SendRed()
    }, [error])

    const activate = async () => {
        setActivateError('')
        activateBrowserWallet()
    }

    // const { account } = useEthers()
    const wethBalance  = useTokenBalance(contract_TokenAddress,account)
    const {chainId} = useEthers()

    // 调用合约授权
    // const { state, send } = useContractFunction(contract_token, 'approve',{transactionName:'approve'})

    // 调用合约发送红包
    // const { state, send } = useContractFunction(contract_pkg, 'create',{transactionName:'create'})

    // 打开红包
    // const { state, send } = useContractFunction(contract_pkg, 'open',{transactionName:'open'})

    const { state, send } = useContractFunction(contract_pkg, 'packageInfos',{transactionName:'packageInfos'})


    // const onDeposit = async () => {
    //     let etherAmount = "1000";
    //     console.log(send)
    //     send({spender:contract_TokenAddress, amount: utils.parseEther(etherAmount) })
    //
    // }
    //


    // export function ApproveButton({tokenAddress, spenderAddress, amount}) {
    //     const { state, send, events } = useTokenApproval(tokenAddress);
    //
    //     function handleApprove() {
    //         send(spenderAddress, amount);
    //         setModalVisible(true); // modal shows state.status
    //     }
    //     etc.
    // }


    async function SendRed(){

        // 这个是报错的

        // @ts-ignore
        // let allowanceOfCurrentAccount = await tokenInterface.methods.allowance(account,"0x88D37b9a55Cdb193866EBD991341E5FE9B7faaAc");
        //
        // if(allowanceOfCurrentAccount == 0){
        //     //执行授权语句
        //     console.log('需要授权')
        // }else{
        //     //执行转账语句
        //     console.log('已经授权')
        // }

        activateBrowserWallet()
        let etherAmount = "100000000";
        setIsOpenRed(isOpen)
        // console.log(contract_token)
        // let value = "";
        // console.log(contract_pkg)
        // console.log(wethBalance)
        // console.log(chainId)

        // const { value, error} = useCall( {
        //     contract: contract_pkg,
        //     method: 'counter',
        //     args: []
        // }) ?? {}
        // console.log(value)

        const token = new ethers.Contract(contract_RedAddress, redpkgInterface, provider)
        let owner = await token.owner()

        console.log('账号：'+account?.toUpperCase()+'\n'+'合约账号：'+owner?.toUpperCase())

        if (account?.toUpperCase() == owner?.toUpperCase()){
            console.log('主要账号')
            setIsNone('')
        }else {
            console.log('其他账号')
            setIsNone('none')
        }

        // 合约授权调用
        // send(contract_RedAddress, utils.parseEther(etherAmount))

        // 发红包
        // send(contract_TokenAddress, 10, 2, 0, 1, '88888');

        // 领取红包
        // send('1','123')

        // 红包数量获取
        // let contract = new ethers.Contract(contract_RedAddress, redAbi, provider);
        // contract.on("event_create", (id, createTime, openTime, exprTime, coinTokenAddr, amount, count, event) => {

        //     console.log(createTime.toString());
        //
        // });

        // console.log('222222')

    }



    function HandleRedModel(){
        onClose()
    }
    // async function onConnect(){
    //     const {activateBrowserWallet,account,error} = useEthers()
    //     useEffect(() => {
    //         if (error) {
    //             setActivateError(error.message)
    //
    //         }
    //     }, [error])
    //
    //
    // }




    return (


            <Box display="flex"
                 alignItems="center"
                 py="0" bg="gray.800" w="100%" p="2" color="red" >

                <Box p='1'>
                    <Wrap>
                        <WrapItem>
                            <Avatar name='Dan Abrahmov' src='https://bit.ly/dan-abramov' />
                        </WrapItem>
                        </Wrap>
                </Box>
                <Spacer />


                <Box display="flex">

                    <>
                        <ConnectButton handleOpenModal={onOpen}/>
                        <AccountModal isOpen={isOpen} onClose={onClose} />
                    </>

                    <>
                        <SendButton handleOpenReds={true}/>
                    </>




                </Box>


            </Box>

    )

}
