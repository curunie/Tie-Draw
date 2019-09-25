import React, { Component } from "react";
import getWeb3 from "./utils/getWeb3";
import Dice from "./DiceToken.json";
import "./App.css";

class App extends Component {
  constructor(props)  {
    super(props);

    this.state = {
      diceInstance: null,
      myAccount: null,
      myToken: null,
      web3: null
    };
  }
  
  componentWillMount() {
    getWeb3.then (results => {
      this.setState({
        web3: results.web3
      });
      this.instantiateContract();
    }).catch (() => {
      console.log("Error finding web3.");
    });


  }

  instantiateContract() {
    const contract = require('truffle-contract')
    const TieDraw = contract(Dice)

    console.dir(TieDraw)
    TieDraw.setProvider(this.state.web3.currentProvider);
    console.dir(this.state.web3.currentProvider)

    this.state.web3.eth.getAccounts((error, accounts) => {
      if (!error) {

        console.log("getAccounts" + accounts)
        TieDraw.deployed().then(instance => {
          this.setState({
            DiceInstance: instance,
            myAccount: "0xFF0ca6eC70cA25432Cc8c44dEb4286B583Dad62b"
          });
 
          console.dir(this.state.DiceInstance)
          //this.getTokens();
        });
      } else { console.log('error' + error)
    }
    });
  }

  getTokens = () => {
    this.state.DiceInstance.getTokens({
        from: this.state.myAccount,
        value: this.state.web3.utils.isBigNumber(10000000000000),
        gas: 900000
    });
  }

  render() {
    return (
      
      <div><button onClick={this.balanceOf}>Get Token</button></div>
            
    );
  }
}  
export default App;
