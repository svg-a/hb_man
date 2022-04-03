import {useContractFunction, useEthers} from "@usedapp/core";
import {
    Button,
    FormControl, Input,
    Modal,
    ModalBody,
    ModalCloseButton,
    ModalContent, ModalFooter,
    ModalHeader,
    ModalOverlay,
    Box
} from "@chakra-ui/react";
import React from "react";
import {ethers, utils} from "ethers";
import tokenAbi from "../constants/redbase.json";
import redAbi from "../constants/red.json";
import {Contract} from "@ethersproject/contracts";

type Props = {
    isOpen: any;
    onClose: any;

};

export default function SendRedBox({ isOpen, onClose }: Props)  {

    const [coinTokenAddr,setCoinTokenAddr,] = React.useState('');
    const [amount,setAmount,] = React.useState('');
    const [count,setCount,] = React.useState('');
    const [opentime,setOpentime,] = React.useState('');
    const [daysAfterEnd,setDaysAfterEnd,] = React.useState('');
    const [openhashStr,setOpenhashStr,] = React.useState('');

    const handleTokenAddr= (event: { target: { value: any; }; }) => setCoinTokenAddr(event.target.value);
    const handleAmount= (event: { target: { value: any; }; }) => setAmount(event.target.value);
    const handleCount= (event: { target: { value: any; }; }) => setCount(event.target.value);
    const handleOpentime= (event: { target: { value: any; }; }) => setOpentime(event.target.value);
    const handleDaysAfterEnd= (event: { target: { value: any; }; }) => setDaysAfterEnd(event.target.value);
    const handleOpenhashStr= (event: { target: { value: any; }; }) => setOpenhashStr(event.target.value);

    // 合约地址
    const contract_RedAddress = '0x8Ab2BE75efdb4704094b5B5c715A7608bB3B1B3F';

    const redpkgInterface = new utils.Interface(redAbi);
    const contract_pkg = new Contract(contract_RedAddress, redpkgInterface)  as any
    let { state, send } = useContractFunction(contract_pkg, 'create',{transactionName:'create'})

    function handleSendRed(){
        send(coinTokenAddr, amount, count, opentime, daysAfterEnd, openhashStr);
    }

    return (
        <Box >
            <Modal  isCentered isOpen={isOpen} onClose={onClose}>
                <ModalOverlay />
                <ModalContent>
                    <ModalHeader>发红包</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody>
                        <FormControl>
                            <Input value={coinTokenAddr} onChange={handleTokenAddr} placeholder='合约地址'/>
                            <Input value={amount} onChange={handleAmount} placeholder='红包金额'/>
                            <Input value={count} onChange={handleCount} placeholder='红包个数'/>
                            <Input value={opentime} onChange={handleOpentime} placeholder='打开时间'/>
                            <Input value={daysAfterEnd} onChange={handleDaysAfterEnd} placeholder='截止日期'/>
                            <Input value={openhashStr} onChange={handleOpenhashStr} placeholder='领取密码'/>
                        </FormControl>

                    </ModalBody>
                    <ModalFooter>
                        <Button onClick={handleSendRed} onChange={onClose}>发送</Button>
                    </ModalFooter>
                </ModalContent>
            </Modal>
        </Box>


    )
}
