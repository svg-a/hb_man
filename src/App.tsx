import {Box, ChakraProvider, Spacer, useDisclosure} from "@chakra-ui/react";
import theme from "./theme";
import Layout from "./components/Layout";
import ConnectButton from "./components/ConnectButton";
import AccountModal from "./components/AccountModal";
import "@fontsource/inter";
import NavgationBar from "./components/NavgationBar";
import ContentBar from "./components/Content";
import Award from "./components/Award";
import ContentTitle from "./components/ContentTitle";
import AddressList from "./components/AddressList";
import BannerImg from "./components/BannerImg";
import ReceiveRed from "./components/ReceiveRed";
import {useEthers} from "@usedapp/core";
import {useEffect} from "react";

function App() {
  return (

    <ChakraProvider  theme={theme}>

      <Layout>

          <NavgationBar />
          <BannerImg/>
          <ContentTitle/>
        <ReceiveRed/>
          <ContentBar/>
          
          <Award/>
          <AddressList/>

      </Layout>
    </ChakraProvider>
  );

}


export default App;
//https://v0.chakra-ui.com/iconbutton
// 0x9076E390a123d0c90aA6316E75700e77796B0320
// http://cw.hubwiz.com/card/c/web3.js-1.0/1/4/11/
// https://ithelp.ithome.com.tw/users/20092025/ironman/2109?page=2
