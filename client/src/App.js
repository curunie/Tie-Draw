import React, { Component } from "react";
import getWeb3 from "./utils/getWeb3";
import Chip from "./Chip.json";
import "./App.css";
import 'bootstrap/dist/css/bootstrap.css';
import "bootstrap/dist/css/bootstrap.min.css"
import Card from "react-bootstrap/Card"
import Button from "react-bootstrap/Button"

class Login extends Component {
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

class Join extends Component {
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
        your accout: {this.balance}
      </div>
            
    );
  }
}

class Gameform extends Component {
  render() {
    return (
      <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src="holder.js/100px180" />
        <Card.Body>
          <Card.Title>Card Title</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the bulk of
            the card's content.
    </Card.Text>
          <Button variant="primary">Go somewhere</Button>
        </Card.Body>
      </Card>
    );
  }
}

class App extends Component {
    
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
     
    this.state.diceInstance.GetTokens({
      from: "0x6bFF99C3761669c2f1ce78466C21DcB7fb8DE6E0",
      value: 10,
      gas: 700000
    })
  }
  
  render() {
    if (this.state.myAccount === undefined) {
      return (
        <div>
          <Login></Login>
          <Join></Join>
        </div>
      );
    } else {
      return (
        <React.Fragment>
          <div>
            <TieDraw></TieDraw>
          </div>
          <div>
            <Gameform></Gameform>
          </div>
        </React.Fragment>
      );
    }
  }
}  
export default App;
