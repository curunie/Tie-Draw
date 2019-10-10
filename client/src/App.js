import React, { Component } from "react";
import getWeb3 from "./utils/getWeb3";
import Chip from "./Chip.json";
import "./App.css";

class login extends Component {
  render() {
    return(
      <div className="login">
          <h4>Login</h4>
          <form>
            <label>
            ID:
            <input type="text" name="login-id" />
            PW:
            <input type="password" name="login-password" />
            </label>
            <input type="submit" value="Submit" />
          </form>
        </div>
    )
  }
}

class join extends Component {
  render() {
    return(
      <div className="join">
        <h4>Join</h4>
        <form>
          <label>
            ID:
            <input type="text" name="join-id" />
            PW:
            <input type="password" name="join-pw" />
            Your Ethereum Address
            <input type="text" name="join-address" />
          </label>
          <input type="submit" value="Sumbit" />
        </form>
      </div>
    )
  }
}

class TieDraw extends Component {  
  render() {
    return (
      
      <div>
        <h1>TieDraw Test</h1>
        <div>
          블록에서 데이터 가져오기<button onClick={this.balance}>Click</button>
        </div>
        your accout: {this.state.myToken}
      </div>
            
    );
  }
}

class App extends Component {

  if () {
    <login></login>
    <join></join>
  } else {
    render(
      <h4>Hello, World!</h4>
    )
  }
  
  constructor(props)  {
    super(props);

    this.state = {
      diceInstance: null,
      myAccount: null,
      myToken: 0,
      web3: null
    };
  }
    
  componentDidMount() {
    getWeb3
      .then(results => {
        this.setState({
          web3: results.web3
        })
        console.log('get web3')
        this.instantiateContract()
      })
      .catch(() => {
        console.log('Error finding web3.')
      })
  }

  instantiateContract() {
    const contract = require('truffle-contract');
    const TieDraw = contract(Chip);
    console.dir(this.state.web3.currentProvider)
    TieDraw.setProvider(this.state.web3.currentProvider);
  
    this.state.web3.eth.getAccounts((error, accounts) => {
      if (!error) {
        console.log("accounts" + accounts[0])
        console.dir(this.state.web3)

        TieDraw.deployed().then(instance => {
          this.setState({
            diceInstance: instance,
            myAccount: accounts[0]
            
          });
            this.balance();    
        });
      } else { console.log('error' + error)
    }
    });
  }

  //balanceOf function
  balance=()=> {
    this.state.diceInstance.BalanceOf(
      this.state.myAccount
    ).then(result=> { 
      //from: this.state.myAccount,
      //gas: 500000
      this.setState({myToken: result.toNumber()})
      console.log(this.state.myToken)
    })
  }

  //getTokens function
  getToken=()=> {
    this.state.diceInstance.getTokens()
    .then(result => {
      this.setState()
    })
  }
  
}  
export default App;
