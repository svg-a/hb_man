// @ts-ignore
import {Chain} from '@usedapp/core'

export const TutorialChain: Chain = {
    chainId: 1337,
    chainName: 'TutorialChain',
    isTestChain: false,
    isLocalChain: true,
    multicallAddress: '0x0000000000000000000000000000000000000000',
    getExplorerAddressLink: (address: string) => `https://tutorialchain.etherscan.io/address/${address}`,
    getExplorerTransactionLink: (transactionHash: string) => `https://tutorialchain.etherscan.io/tx/${transactionHash}`,
}
// IMPORTANT: Fill that object with your own data.
