import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import {ChainId, DAppProvider ,Config,Mainnet} from "@usedapp/core";
import {Container, TableContainer} from "@chakra-ui/react";
import {getDefaultProvider} from "ethers";



const config: Config = {
    readOnlyChainId: Mainnet.chainId,
    // @ts-ignore
    readOnlyUrls: {
        [Mainnet.chainId]: getDefaultProvider('mainnet'),
    },
    autoConnect:false
}

// const config = {
//     readOnlyChainId: ChainId.Localhost,
//     readOnlyUrls: {
//         [ChainId.Localhost]: 'http://localhost:7545',
//     },
//     autoConnect:false
//
// }
ReactDOM.render(

        <React.StrictMode>

            <DAppProvider config={config}>
                    <App />

            </DAppProvider>
        </React.StrictMode>,


  document.getElementById("root")
);
