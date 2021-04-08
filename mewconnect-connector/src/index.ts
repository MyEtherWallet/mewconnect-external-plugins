import {ConnectorUpdate} from '@web3-react/types'
import {AbstractConnector} from '@web3-react/abstract-connector'

const CHAIN_ID = 1

interface MewConnectConnectorArguments {
    url: string;
    chainId?: string | number | undefined;
    infuraId?: string | undefined;
    windowClosedError?: boolean | undefined;
    subscriptionNotFoundNoThrow?: boolean | undefined;
    supportedChainIds?: number[];
    newChain?: any
}

interface NewNetwork {
    name: string,
    name_long?: string | undefined,
    blockExplorerTX?: string | undefined,
    blockExplorerAddr?: string | undefined,
    chainID: number,
    currencyName?: string | undefined,
    service?: string | undefined,
    url: string
}

interface MewConnectProviderOptions {
    chainId: string | number | undefined;
    noUrlCheck: boolean;
    rpcUrl: string |  undefined;
    infuraId: string | undefined;
    windowClosedError: boolean | undefined;
    subscriptionNotFoundNoThrow: boolean | undefined;
    newNetwork: NewNetwork[] | boolean | undefined;
}

export class MewConnectConnector extends AbstractConnector {
    public static supportedChainIds: number[] = [1, 3, 5, 42];
    public static supportedNetworks: NewNetwork[] = [];
    public mewConnect: any
    private readonly url: string
    private readonly newChain: any;
    private provider: any
    private readonly windowClosedError : boolean | undefined;
    private readonly subscriptionNotFoundNoThrow : boolean | undefined;
    private readonly infuraId : string | undefined;
    private readonly chainId: string | number | undefined;

    public static addSupportedChainIds(id: number){
        MewConnectConnector.supportedChainIds = [...MewConnectConnector.supportedChainIds, id]
    }

    public static addSupportedNetwork(newNetwork: NewNetwork){
        MewConnectConnector.supportedChainIds = [...MewConnectConnector.supportedChainIds, newNetwork.chainID]
        MewConnectConnector.supportedNetworks = [...MewConnectConnector.supportedNetworks, newNetwork]
    }

    constructor(args : MewConnectConnectorArguments) {
        super({supportedChainIds: args.supportedChainIds || MewConnectConnector.supportedChainIds})
        const {url, windowClosedError, subscriptionNotFoundNoThrow , infuraId, chainId, newChain} = args;
        this.url = url
        if(typeof chainId === 'string'){
            this.chainId = parseInt(chainId)
        } else if(typeof chainId === 'undefined'){
            this.chainId = 1;
        } else {
            this.chainId = chainId
        }
        this.newChain = newChain
        this.windowClosedError = windowClosedError || true;
        this.subscriptionNotFoundNoThrow =
            subscriptionNotFoundNoThrow || true;
        this.infuraId = infuraId;
    }

    public async activate(): Promise<ConnectorUpdate> {
        try {
            const {default: MewConnect} = await import('@myetherwallet/mewconnect-web-client')

            let account;
            if (!MewConnect.Provider.isConnected) {
                const options: MewConnectProviderOptions = {
                    chainId: this.chainId || CHAIN_ID,
                    noUrlCheck: true,
                    rpcUrl: undefined,
                    infuraId: this.infuraId,
                    windowClosedError: this.windowClosedError,
                    subscriptionNotFoundNoThrow: this.subscriptionNotFoundNoThrow,
                    newNetwork: false
                };

                if (this.url.includes('https://mainnet.infura.io/v3/') && !options.infuraId) {
                    options.infuraId = this.url.replace('https://mainnet.infura.io/v3/', '')
                } else {
                    options.rpcUrl = this.url;
                }

                if (this.chainId) {
                    options.chainId = this.chainId;
                }
                if (this.newChain) {
                    options.newNetwork = [...this.newChain, ...MewConnectConnector.supportedNetworks];
                }

                this.mewConnect = new MewConnect.Provider(options);
                // Requires the use of websockets.
                this.provider = this.mewConnect.makeWeb3Provider()
                this.mewConnect.on('disconnected', () => {
                    this.emitDeactivate();
                })

                account = await this.mewConnect
                    .enable()
                    .catch(() => {
                        throw new Error('The user rejected the request.');
                    })
                    .then((accounts: string[]): string => accounts[0]);
                return {provider: this.provider, chainId: this.chainId, account: account}
            } else if (this.mewConnect) {
                account = await this.mewConnect
                    .enable()
                    .catch(() => {
                        throw new Error('The user rejected the request.');
                    })
                    .then((accounts: string[]): string => accounts[0]);
                return {provider: this.provider, chainId: this.chainId, account: account}
            }
            return {provider: this.provider, chainId: this.chainId, account: account}
        } catch (e) {
            return {provider: this.provider, chainId: this.chainId, account: ''}
        }
    }

    public async getProvider(): Promise<any> {
        return this.provider
    }

    public async getChainId(): Promise<number> {
        if(typeof this.chainId === 'string'){
            return parseInt(this.chainId)
        } else if(typeof this.chainId === 'undefined'){
            return 1
        } else {
            return this.chainId
        }
    }

    public async getAccount(): Promise<null | string> {
        return this.provider.send('eth_accounts')
            .then((accounts: string[]): string => accounts[0])
            .catch(() => {
                throw new Error('No account present to get.');
            })
    }

    public deactivate() {
        if (this.provider) {
            this.provider.close()
        }
        this.emitDeactivate()
    }

    public async close() {
        if (this.provider) {
            this.provider.close()
        }
        this.emitDeactivate()
    }
}
