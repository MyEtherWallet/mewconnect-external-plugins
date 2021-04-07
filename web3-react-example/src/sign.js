import React, {useState} from 'react';
import { Web3ReactProvider, useWeb3React, UnsupportedChainIdError } from '@web3-react/core'



export function Sign() {
  const { library, account } = useWeb3React()
  const [value, setValue] = useState(0)

  return (
    <>
      <button
        style={{
          height: '3rem',
          borderRadius: '1rem',
          cursor: 'pointer'
        }}
        onClick={() => {
          library
            .getSigner(account)
            .signMessage('👋')
            .then((signature) => {
              window.alert(`Success!\n\n${signature}`)
            })
            .catch((error) => {
              window.alert('Failure!' + (error && error.message ? `\n\n${error.message}` : ''))
            })
        }}
      >
        Sign Message
      </button>
    </>
  )
}
