import MEWconnect from '@myetherwallet/mewconnect-web-client'

export default function(maker) {
  const MEWCONNECT = 'MEWconnectProtocol';
  maker.service('accounts', true).addAccountType(MEWCONNECT, async settings => {
    const web3Service = maker.service('web3');
    const CHAIN_ID = web3Service.networkId();
    const ETH_JSONRPC_URL = web3Service.rpcUrl;

    const MewConnect = new MEWconnect.Provider();
    const MewConnectProvider = MewConnect.makeWeb3Provider(
      CHAIN_ID,
      ETH_JSONRPC_URL,
      true
    );

    const accounts = await MewConnect.enable();
    const address = accounts[0];
    if (settings.callback && typeof settings.callback === 'function') {
      settings.callback(address);
    }

    // setEngine and handleRequest are expected by the web3ProviderEngine
    function setEngine(engine) {
      const self = this;
      if (self.engine) return;
      self.engine = engine;
      engine.on('block', function(block) {
        self.currentBlock = block;
      });

      engine.on('start', function() {
        self.start();
      });

      engine.on('stop', function() {
        self.stop();
      });
    }

    function handleRequest(payload, next, end) {
      const self = this;
      // Including the nonce throws an error "couldn't find tx for nonce"
      if (Array.isArray(payload.params)) delete payload.params[0].nonce;
      self.sendAsync(payload, (err, result) => {
        return result ? end(null, result.result) : end(err);
      });
    }

    MewConnectProvider.setEngine = setEngine;
    MewConnectProvider.handleRequest = handleRequest;

    return { subprovider: MewConnectProvider, address };
  });
}