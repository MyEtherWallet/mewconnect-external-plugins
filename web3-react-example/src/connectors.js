import {InjectedConnector} from '@web3-react/injected-connector'
import {MewConnectConnector} from '@myetherwallet/mewconnect-connector';


const POLLING_INTERVAL = 12000
const RPC_URLS= {
  1: process.env.RPC_URL_1,
  4: process.env.RPC_URL_4,
  42: process.env.RPC_URL_42,
  80001: process.env.RPC_URL_80001
}


const injected = new InjectedConnector({supportedChainIds: [1, 3, 4, 5, 42]})
// MewConnectConnector.addSupportedChainIds(80001);
const mewConnect = new MewConnectConnector({  url: 'https://ropsten.infura.io/v3/c9b249497d074ab59c47a97bdfe6b401', chainId: 3 })

MewConnectConnector.addSupportedNetwork({
  name: 'matic',
  name_long: 'MaticNetwork',
  blockExplorerTX: 'https://explorer-mainnet.maticvigil.com/tx/[[txHash]]',
  blockExplorerAddr: 'https://explorer-mainnet.maticvigil.com/address/[[address]]',
  chainID: 80001,
  currencyName: 'MATIC',
  service: 'matic',
  url: 'https://rpc-mumbai.matic.today'
});

// const mewConnect = new MewConnectConnector({  url: 'https://rpc-mumbai.matic.today', chainId: 80001,})

// export const mewConnect = new MewConnectConnector({
//     url: 'https://rpc-mumbai.matic.today', chainId: 80001, supportedChainIds: [1, 3, 42, 80001], newChain: {
//         name: 'matic',
//         name_long: 'MaticNetwork',
//         blockExplorerTX: 'https://explorer-mainnet.maticvigil.com/tx/[[txHash]]',
//         blockExplorerAddr: 'https://explorer-mainnet.maticvigil.com/address/[[address]]',
//         chainID: 80001,
//         currencyName: 'MATIC',
//         service: 'matic',
//         url: 'https://rpc-mumbai.matic.today'
//     }
// })

export {
  injected,
  mewConnect
}
