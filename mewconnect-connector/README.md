# @myetherwallet/mewconnect-connector

## Constructor Arguments

    url: string;
    chainId?: string | number | undefined; (optional)
    infuraId?: string | undefined; (optional)
    windowClosedError?: boolean | undefined; (optional)
    subscriptionNotFoundNoThrow?: boolean | undefined; (optional)
    supportedChainIds?: number[]; (optional)

## The connector natively supports the primary ethereum chains 
(mainnet, Ropsten, Kovan, Goerli)
###There are two ways to use the connector with a different chain
####Supply basic details when creating the connnector 

####Supply a new chain object to the connector with the details provided above
- This method allows for linking to a block explorer to view transactions 


#### Adding multiple additional chains
There are two static methods that can be used to add a supported network id and/or to add additional supported chains.

Connector.addSupportedChainIds

Connector.addSupportedNetwork
- this static method will also add the chainID to the list of supported chainIDs

```javascript

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

// Supply the (normally) optional chainID so the correct chain id is used instead of the ethereum mainnet default
export const mewConnect = new MewConnectConnector({
    url: 'https://rpc-mumbai.matic.today', chainId: 80001 
})

```



Please visit the [`web3-react` repository](https://github.com/NoahZinsmeister/web3-react) for documentation and details on how to use this package.
