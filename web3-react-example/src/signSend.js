import React, {useState} from 'react';
import { Web3ReactProvider, useWeb3React, UnsupportedChainIdError } from '@web3-react/core'



export function SignSend() {
  const { library, account } = useWeb3React()
  const [value, setValue] = useState(0)
  const [hash, setHash] = useState('')

  function valuehandler(e){
    if(e.nativeEvent.data >= 0)
      setValue(e.nativeEvent.data)
    else setValue(0)
  }

  function SignAndSend(){
    const tx = {
      to: account,
      from: account,
      value: value
    }
    const signer =     library
      .getSigner(account)
    signer
      .getGasPrice()
      .then(gasPrice => {
        tx.gasPrice = gasPrice
        signer.getTransactionCount().then(nonce => {
          tx.nonce = nonce
          signer.estimateGas(tx).then(gasLimit => {
            tx.gasLimit = gasLimit
            console.log(tx); // todo remove dev item
            signer.signTransaction(tx).then(signed => {
              console.log(signed); // todo remove dev item
            })
          })
        })
      })

      // .sendTransaction({
      //   to: account,
      //   value: value
      // })
      // .then((signature) => {
      //   console.log(signature); // todo remove dev item
      //   setHash(signature.hash);
      //   window.alert(`Success!\n\n${signature}`)
      // })
      // .catch((error) => {
      //   window.alert('Failure!' + (error && error.message ? `\n\n${error.message}` : ''))
      // })
  }

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column'
      }}>
      <input type="number" value={value} onChange={valuehandler}/>
      <button
        style={{
          height: '3rem',
          borderRadius: '1rem',
          cursor: 'pointer'
        }}
        onClick={SignAndSend}
      >
        Send
      </button>
      {(hash !== '') && (
        <span> {hash}</span>
      )}
    </div>
  )
}
