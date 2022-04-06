import {
    Grid,
    Box,
    Text,
    Spacer,
    Flex,
    Button,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalCloseButton, ModalBody, FormControl, Input, ModalFooter, Modal, useDisclosure
} from "@chakra-ui/react";
import React, {useState} from "react";
import {useContractFunction, useEthers} from "@usedapp/core";
import {ethers, utils} from "ethers";
import redAbi from "../constants/red.json";
import {Contract} from "@ethersproject/contracts";


export default function ContentTitle() {

    const { isOpen, onOpen, onClose } = useDisclosure();

    const [number,setNumber] = useState('0');

    const { account } = useEthers();

    const contract_RedAddress = '0x8Ab2BE75efdb4704094b5B5c715A7608bB3B1B3F';
    const redpkgInterface = new utils.Interface(redAbi);
    const contract_pkg = new Contract(contract_RedAddress, redpkgInterface)  as any
    let provider = new ethers.providers.JsonRpcProvider('http://localhost:7545')

    async function handleNumber(){

        try {
            const token = new ethers.Contract(contract_RedAddress, redpkgInterface,provider )
            let numbers = await token.counter()
            let numberTen = JSON.stringify(parseInt(numbers._hex))

            let numberone = await token.record(Number(numberTen) -1,account)
            // @ts-ignore
            setNumber(parseInt(numberone._hex))
            onOpen()
        }catch (error){
            console.log(error)
        }

    }

    return (

        <Grid
            h='40px'
            width = '100%'
            maxW = '1200px'
            marginTop='2'
            templateRows='repeat(1, 1fr)'
            lineHeight='40px'
            gap={3}
            py="0"
            bg="gray.800"
            borderRadius="5"
        >


         <Flex  bg = 'dark' borderRadius="5px" padding='5px'>
             <Text paddingLeft='10px' fontWeight='bold' fontSize='lg' color = 'white'> 今日红包剩余 </Text>
             <Spacer />
             <Button marginRight='10px' height='35px' fontWeight='bold' fontSize='lg' bg = 'whiteAlpha.800' onClick={handleNumber} > 领取记录 </Button>

             <Modal isCentered isOpen={isOpen} onClose={onClose}>
                 <ModalOverlay />
                 <ModalContent >
                     <ModalHeader>当前红包领取记录</ModalHeader>
                     <ModalCloseButton />
                     <ModalBody>
                         <FormControl>
                             <Flex  bg = 'dark' borderRadius="5px" padding='5px'>
                                 <Text paddingLeft='10px' fontWeight='bold' fontSize='lg' >  {account &&
                                     `${account.slice(0, 6)}...${account.slice(
                                         account.length - 4,
                                         account.length
                                     )}`} </Text>
                                 <Spacer />
                                 <Text paddingLeft='10px' fontWeight='bold' fontSize='lg' > {number} </Text>
                             </Flex>
                         </FormControl>

                     </ModalBody>
                     <ModalFooter>
                     </ModalFooter>
                 </ModalContent>
             </Modal>
         </Flex>


        </Grid>
    )

}
