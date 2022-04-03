import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import {ChainId, DAppProvider } from "@usedapp/core";
import {Container, TableContainer} from "@chakra-ui/react";


// const config = {
//     readOnlyChainId:ChainId.Mainnet,
//     readOnlyUrls: {
//         [ChainId.Mainnet]: 'https://bsc-dataseed1.binance.org/',
//     },
// };

const config = {
    readOnlyChainId: ChainId.Localhost,
    readOnlyUrls: {
        [ChainId.Localhost]: 'http://localhost:7545',
    },

}
ReactDOM.render(

        <React.StrictMode>

            <DAppProvider config={config}>

                    <App />

            </DAppProvider>
        </React.StrictMode>,


  document.getElementById("root")
);
