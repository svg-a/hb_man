import {
    WrapItem,
    Avatar,
    Text,
    IconButton,
    ListItem,
    List,
    Flex,
    Spacer,
    ListIcon,
    Box,
    Button, Link, Wrap
} from "@chakra-ui/react";
import {MdCheckCircle,MdSettings} from "react-icons/all";
import React, {useEffect, useState} from "react";
import {ethers, utils} from "ethers";
import redAbi from "../constants/red.json";
import {type} from "os";
import {ExternalLinkIcon} from "@chakra-ui/icons";




export default function AddressList() {



    const [address,setAddress] = useState('');
    // 合约地址
    const contract_RedAddress = '0x8Ab2BE75efdb4704094b5B5c715A7608bB3B1B3F';
    const redpkgInterface = new utils.Interface(redAbi);
    let provider = new ethers.providers.JsonRpcProvider('http://localhost:7545')

    async function contract_address(){

        const token = new ethers.Contract(contract_RedAddress, redpkgInterface,provider )
        let number = await token.counter()
        let numberTen = JSON.stringify(parseInt(number._hex))
        let nubRed = Number(numberTen) -1
        let xxx = await token.recordAll(nubRed)
        setAddress(xxx)
    }

    useEffect(() => {
        // Update the document title using the browser API
        contract_address()
        return ()=>{

        }
    });

    return (

        <List   w='100%' maxW = '1200px'  bg='gray.800'  paddingRight='10px' paddingLeft='10px'>
            {
                // @ts-ignore
              address.length > 0 ?  address.map((address)=>
                  <ListItem  paddingTop='1px' bg='gray.800'  >
                    <Flex bg = 'whiteAlpha.100' borderRadius="5px" padding='5px'>
                        <Wrap>
                        <WrapItem>
                            <Avatar name= { address[0].slice(
                                address[0].length - 2,
                                address[0].length ) +' ' + address[0].slice(
                                address[0].length - 1,
                                address[0].length ) }   src='' />
                            {/*https://bit.ly/dan-abramov*/}
                        </WrapItem>
                        </Wrap>
                        <Spacer />
                        <Text display="flex"
                              alignItems="center" color="white" fontSize="md" fontWeight="medium"  >

                            {address[0] &&
                                `${address[0].slice(0, 6)}...${address[0].slice(
                                    address[0].length - 4,
                                    address[0].length
                                )}`}

                        </Text>
                        <Spacer />
                        <Text display="flex"
                              alignItems="center" color = 'white'>
                            {parseInt(address[1]['_hex'])}
                        </Text>
                        <Spacer />
                        {/*<IconButton aria-label='Search database' />*/}
                        <Link
                            fontSize="21px"
                            display="flex"
                            alignItems="center"
                            href={`https://ropsten.etherscan.io/address/${address[0]}`}
                            isExternal
                            color="gray.400"
                            ml={1}
                            _hover={{
                                color: "whiteAlpha.800",
                                textDecoration: "underline",
                            }}
                        >
                            <ExternalLinkIcon  />

                        </Link>
                    </Flex>
                </ListItem>):''
            }





        </List>
)

}
