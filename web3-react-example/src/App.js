import React from 'react'
import { Web3ReactProvider, useWeb3React } from '@web3-react/core'
import { Web3Provider } from '@ethersproject/providers'
import { formatEther } from '@ethersproject/units'

import { useEagerConnect, useInactiveListener } from './hooks'
import {Send} from './send'
import {Sign} from './sign'

import {
  injected,
  mewConnect
} from './connectors'

const ConnectorNames = {
  Injected: 'Injected',
    MEWconnect: 'MewConnect'
}

const connectorsByName = {
  [ConnectorNames.Injected]: injected,
  [ConnectorNames.MEWconnect]: mewConnect
}

function getLibrary(provider) {
  const library = new Web3Provider(provider)
  library.pollingInterval = 12000
  return library
}

export default function() {
  return (
    <Web3ReactProvider getLibrary={getLibrary}>
      <App />
    </Web3ReactProvider>
  )
}

function App() {
  const context = useWeb3React()
  const { connector, library, chainId, account, activate, deactivate, active, error } = context

  // handle logic to recognize the connector currently being activated
  const [activatingConnector, setActivatingConnector] = React.useState()
  React.useEffect(() => {
    if (activatingConnector && activatingConnector === connector) {
      setActivatingConnector(undefined)
    }
  }, [activatingConnector, connector])

  // handle logic to eagerly connect to the injected ethereum provider, if it exists and has granted access already
  const triedEager = useEagerConnect()

  // handle logic to connect in reaction to certain events on the injected ethereum provider, if it exists
  useInactiveListener(!triedEager || !!activatingConnector)
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        gridGap: '1rem',
        gridTemplateColumns: '1fr min-content 1fr',
        maxWidth: '20rem',
        lineHeight: '2rem',
        margin: 'auto'
      }}>

      <Header />
      {Object.keys(connectorsByName).map(name => {
        const currentConnector = connectorsByName[name]
        const activating = currentConnector === activatingConnector
        const connected = currentConnector === connector
        const disabled = !triedEager || !!activatingConnector || connected || !!error

        return (
          <button
            style={{
              height: '3rem',
              borderRadius: '1rem',
              borderColor: activating ? 'orange' : connected ? 'green' : 'unset',
              cursor: disabled ? 'unset' : 'pointer',
              position: 'relative'
            }}
            disabled={disabled}
            key={name}
            onClick={() => {
              setActivatingConnector(currentConnector)
              activate(connectorsByName[name])
            }}
          >
            <div
              style={{
                position: 'absolute',
                top: '0',
                left: '0',
                height: '100%',
                display: 'flex',
                alignItems: 'center',
                color: 'black',
                margin: '0 0 0 1rem'
              }}
            >
              {activating && <Spinner color={'black'} style={{ height: '25%', marginLeft: '-1rem' }} />}
              {connected && (
                <span role="img" aria-label="check">
                    ✅
                  </span>
              )}
            </div>
            {name}
          </button>
        )
      })}
      {!!(library && account) && (
        <>
          <ol>
            <li>
              <Sign/>
              <hr/>
            </li>
            <li>
              <Send/>
              <hr/>
            </li>
          </ol>


        </>
      )}
      {(connector === connectorsByName[ConnectorNames.MEWconnect]) && (
        <button
          style={{
            height: '3rem',
            borderRadius: '1rem',
            cursor: 'pointer'
          }}
          onClick={() => {
            ;(connector).close()
          }}
        >
          Kill MEWconnect Session
        </button>
      )}
    </div>

  )
}

function Spinner({ color, ...rest }) {
  return (
    <svg width="38" height="38" viewBox="0 0 38 38" xmlns="http://www.w3.org/2000/svg" stroke={color} {...rest}>
      <g fill="none" fillRule="evenodd">
        <g transform="translate(1 1)" strokeWidth="2">
          <circle strokeOpacity=".5" cx="18" cy="18" r="18" />
          <path d="M36 18c0-9.94-8.06-18-18-18">
            <animateTransform
              attributeName="transform"
              type="rotate"
              from="0 18 18"
              to="360 18 18"
              dur="1s"
              repeatCount="indefinite"
            />
          </path>
        </g>
      </g>
    </svg>
  )
}

function ChainId() {
  const { chainId } = useWeb3React()

  return (
    <>
      <span>Chain Id</span>
      <span role="img" aria-label="chain">
        ⛓
      </span>
      <span>{chainId ?? ''}</span>
    </>
  )
}

function BlockNumber() {
  const { chainId, library } = useWeb3React()

  const [blockNumber, setBlockNumber] = React.useState()
  React.useEffect(() => {
    if (!!library) {
      let stale = false

      library
        .getBlockNumber()
        .then((blockNumber) => {
          if (!stale) {
            setBlockNumber(blockNumber)
          }
        })
        .catch(() => {
          if (!stale) {
            setBlockNumber(null)
          }
        })

      const updateBlockNumber = (blockNumber) => {
        setBlockNumber(blockNumber)
      }
      library.on('block', updateBlockNumber)

      return () => {
        stale = true
        library.removeListener('block', updateBlockNumber)
        setBlockNumber(undefined)
      }
    }
  }, [library, chainId]) // ensures refresh if referential identity of library doesn't change across chainIds

  return (
    <>
      <span>Block Number</span>
      <span role="img" aria-label="numbers">
        🔢
      </span>
      <span>{blockNumber === null ? 'Error' : blockNumber ?? ''}</span>
    </>
  )
}

function Account() {
  const { account } = useWeb3React()

  return (
    <>
      <span>Account</span>
      <span role="img" aria-label="robot">
        🤖
      </span>
      <span>
        {account === null
          ? '-'
          : account
            ? `${account.substring(0, 6)}...${account.substring(account.length - 4)}`
            : ''}
      </span>
    </>
  )
}

function Balance() {
  const { account, library, chainId } = useWeb3React()

  const [balance, setBalance] = React.useState()
  React.useEffect(() => {
    if (!!account && !!library) {
      let stale = false

      library
        .getBalance(account)
        .then((balance) => {
          if (!stale) {
            setBalance(balance)
          }
        })
        .catch(() => {
          if (!stale) {
            setBalance(null)
          }
        })

      return () => {
        stale = true
        setBalance(undefined)
      }
    }
  }, [account, library, chainId]) // ensures refresh if referential identity of library doesn't change across chainIds

  return (
    <>
      <span>Balance</span>
      <span role="img" aria-label="gold">
        💰
      </span>
      <span>{balance === null ? 'Error' : balance ? `Ξ${formatEther(balance)}` : ''}</span>
    </>
  )
}

function Header() {
  const { active, error } = useWeb3React()

  return (
    <>
      <h1 style={{ margin: '1rem', textAlign: 'right' }}>{active ? '🟢' : error ? '🔴' : '🟠'}</h1>
      <h3
        style={{
          display: 'grid',
          gridGap: '1rem',
          gridTemplateColumns: '1fr min-content 1fr',
          maxWidth: '20rem',
          lineHeight: '2rem',
          margin: 'auto'
        }}
      >
        <ChainId />
        <BlockNumber />
        <Account />
        <Balance />
      </h3>
    </>
  )
}
