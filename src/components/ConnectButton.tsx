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



type Props = {
  handleOpenModal: any;
};

export default function ConnectButton({ handleOpenModal }: Props) {

    const { isOpen, onOpen, onClose } = useDisclosure();

    const { account, activateBrowserWallet } = useEthers()

    const etherBalance = useEtherBalance(account);

    const [activateError, setActivateError] = useState('')
    const { error } = useEthers()
    useEffect(() => {
        if (error) {
            setActivateError(error.message)
        }
    }, [error])

    const activate = async () => {
        setActivateError('')
        activateBrowserWallet()
    }

    async function onConnect() {
        try {
            const provider = new WalletConnectProvider({
                infuraId: '27e484dcd9e3efcfd25a83a78777cdf1',

            })
            await provider.enable()
        } catch (error) {
            console.error(error)
        }
    }


    function handleOpenMetamask() {
        activate()


    }
    function handleOpenWalletConnect() {
        onConnect()
    }

  return  account ? (

    <Box
      display="flex"
      alignItems="center"
      background="gray.700"
      py="0"
      borderRadius="5"

    >
      <Box px="3" >
        <Text color="white" fontSize="md">

          {etherBalance && parseFloat(formatEther(etherBalance)).toFixed(3)} ETH
        </Text>
      </Box>
      <Button
        onClick={handleOpenModal}
        bg="gray.800"
        _hover={{
          border: "1px",
          borderStyle: "solid",
          borderColor: "blue.400",
          backgroundColor: "gray.700",
        }}
        m="1px"
        px={3}
        height="38px"
      >
        <Text color="white" fontSize="md" fontWeight="medium" mr="2">
          {account &&
            `${account.slice(0, 6)}...${account.slice(
              account.length - 4,
              account.length
            )}`}
        </Text>
        <Identicon />
      </Button>
    </Box>

  ) : (
      <>



    <Button
      onClick={onOpen}
      bg="dark"
      color="white"
      fontSize="lg"
      fontWeight="medium"
      border= "1px" borderColor='white'
      _hover={{
        borderColor: "blue.700",
        color: "blue.400",
      }}
      _active={{
        backgroundColor: "blue.800",
        borderColor: "blue.700",
      }}
    >
      Connect wallet
    </Button>
          <Modal isOpen={isOpen} onClose={onClose} isCentered>
              <ModalOverlay />
              <ModalContent>
                  <ModalHeader>请选择登陆的钱包</ModalHeader>
                  <ModalCloseButton />
                  <ModalBody>
                      <FormControl>

                          <Grid
                              h='150px'
                              templateRows='repeat(2, 1fr)'
                              templateColumns='repeat(4, 1fr)'
                              gap={1}
                              textAlign='center'

                          >
                              <GridItem colSpan={2} bg='gray.100' padding='5px' onClick={handleOpenMetamask}>
                                  <Center>
                                      <Image boxSize = '80px' src='././metamask.svg' alt='metamask' >
                                      </Image></Center>
                                  <Text paddingTop = '5px' fontWeight='bold'>Metamask</Text>
                              </GridItem>
                              <GridItem colSpan={2} bg='gray.100' padding='5px' onClick={handleOpenWalletConnect}>
                                  <Center>
                                      <Image boxSize = '80px' src='././walletConnect.svg' alt='WalletConnect' >
                                      </Image>
                                  </Center>
                                  <Text paddingTop = '5px' fontWeight='bold'>WalletConnect</Text>
                              </GridItem>
                          </Grid>

                      </FormControl>
                  </ModalBody>
              </ModalContent>
          </Modal>


          </>



  );
}
