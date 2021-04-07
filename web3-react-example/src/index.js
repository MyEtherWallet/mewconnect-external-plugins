import React from 'react';
import ReactDOM from 'react-dom';
import App from './App'

const INITIAL_STATE = {
  fetching: false,
  address: "",
  web3: null,
  provider: null,
  connected: false,
  chainId: 1,
  networkId: 1,
  assets: [],
  showModal: false,
  pendingRequest: false,
  result: null
};

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
// class webApp extends React.Component {
//   // @ts-ignore
//   // public web3Modal: Web3Modal;
//   // public state: IAppState;
//   constructor (props) {
//     super(props);
//     this.state = {
//       ...INITIAL_STATE
//     };
//   }
//
//   render(){
//     return (<App></App>)
//   }
//
// }
//
//
// export default webApp
