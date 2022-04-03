import {
    Button,
    Box,
    Text,
    useDisclosure,
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalCloseButton, ModalBody, FormControl, Grid, GridItem, Center, Image
} from "@chakra-ui/react";
import {useEthers, useEtherBalance, Config, ChainId, useTokenBalance,DAppProvider} from "@usedapp/core";
import {formatEther, formatUnits} from "@ethersproject/units";
import Identicon from "./Identicon";
import React, {useEffect, useState} from "react";
import WalletConnectProvider from '@walletconnect/web3-provider'
import ReactDOM from 'react-dom'
import {ethers, utils} from "ethers";
import tokenAbi from "../constants/redbase.json";
import redAbi from "../constants/red.json";
import {Contract} from "@ethersproject/contracts";
import SendRedBox from "./SendRedBox";



type Props = {
    handleOpenReds:any;
};

export default function SendButton({ handleOpenReds }: Props) {

    const { isOpen, onOpen, onClose } = useDisclosure();

    const { account, activateBrowserWallet } = useEthers()

    const etherBalance = useEtherBalance(account);

    const [activateError, setActivateError] = useState('')
    const { error } = useEthers()

    const [owner,setOwner] = useState('暂无');


    // 合约地址
    const contract_RedAddress = '0x8Ab2BE75efdb4704094b5B5c715A7608bB3B1B3F';
    const redpkgInterface = new utils.Interface(redAbi);


    let provider = new ethers.providers.JsonRpcProvider('http://localhost:7545')



    useEffect(() => {
        if (error) {
            setActivateError(error.message)
        }
        onConnect()
    }, [error])


    async function onConnect() {
        const token = new ethers.Contract(contract_RedAddress, redpkgInterface, provider)
        let owners = await token.owner()
        setOwner(owners)
        console.log(owners)

    }


    return account?.toUpperCase() == owner?.toUpperCase() ? (

        <Box
            display="flex"
            alignItems="center"
            bg="gray.800"
            py="0"
            borderRadius="5"

        >
            <Button colorScheme ='yellow' w = '100px' marginLeft='10px' borderRadius='5px' onClick={onOpen}  >
                发红包</Button>
            <SendRedBox isOpen={isOpen} onClose={onClose}/>
        </Box>

    ):(<div></div>);
}
