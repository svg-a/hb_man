
import {
    Grid, Box, Button, Center, Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton, useDisclosure, Text, FormControl, FormLabel, Input
} from "@chakra-ui/react";
import React from "react";
import {useContractFunction} from "@usedapp/core";
import {Contract} from "@ethersproject/contracts";
import {ethers, utils} from "ethers";
import redAbi from "../constants/red.json";

export default function BannerImg() {


    const { isOpen, onOpen, onClose } = useDisclosure()

    const [openRed,setOpenRed,] = React.useState('');
    const handleOpenReds= (event: { target: { value: any; }; }) => setOpenRed(event.target.value);

    const contract_RedAddress = '0x8Ab2BE75efdb4704094b5B5c715A7608bB3B1B3F';
    const redpkgInterface = new utils.Interface(redAbi);
    const contract_pkg = new Contract(contract_RedAddress, redpkgInterface)  as any
    // 打开红包
    const { state, send } = useContractFunction(contract_pkg, 'open',{transactionName:'open'})
    let provider = new ethers.providers.JsonRpcProvider('http://localhost:7545')

    async function handleOpenRed(){


        const token = new ethers.Contract(contract_RedAddress, redpkgInterface,provider )
        let number = await token.counter()
        let numberTen = JSON.stringify(parseInt(number._hex))
        let nubRed = Number(numberTen) -1

        console.log(nubRed)
        send(nubRed,openRed);
        // onClose();
    }

    return (

        <Box
            h='200px'
             width = '100%'
             maxW = '1200px'

             textAlign='center'
             lineHeight='200px'
             marginTop='3px'
             paddingLeft='10px'
             paddingRight='10px'
              bg="gray.800" w="100%" color="orangered"

        >

            <Box h='200px'
                 width = '100%'
                 maxW = '1200px'

                 textAlign='center'
                 lineHeight='200px'
                 marginTop='5px'
                 paddingLeft='5px'
                 paddingRight='5px'
                 bg="orangered" w="100%" color="orangered" borderRadius='10px' >

                <Button colorScheme ='yellow' w = '100px' h='100px' fontSize='25px' borderRadius='50px'onClick={() => {

                    onOpen()
                }}>開</Button>

            </Box>




            <Modal  isCentered isOpen={isOpen} onClose={onClose}>
                <ModalOverlay />
                <ModalContent >
                    <ModalHeader>输入HASH领取红包</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody>
                        <FormControl>
                            <Input value={openRed} onChange={handleOpenReds}  placeholder='输入HASH' />

                        </FormControl>

                    </ModalBody>
                    <ModalFooter>
                        <Button onClick={handleOpenRed}>领取</Button>
                    </ModalFooter>
                </ModalContent>
            </Modal>

        </Box>
    )

}
