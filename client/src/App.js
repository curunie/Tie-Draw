import React, { Component } from "react";
import getWeb3 from "../utils/getWeb3";
import Chip from "./Chip.json";
import "../css/App.css";
import 'bootstrap/dist/css/bootstrap.css';
import "bootstrap/dist/css/bootstrap.min.css";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import blackjack from "../jpg/blackjack.jpg";
import dice from "../jpg/dice.png";
import odd from "../jpg/odd.jpg";
import rcp from "../jpg/rcp.jpg";

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

class Gameform1 extends Component {
  render() {
    return (
      <Card style={{ width: '18rem' }}>
        <Card.Img id="img_blackjack" variant="top" src={blackjack}/>
        <Card.Body>
          <Card.Title id="title">Blackjack(블랙잭)</Card.Title>
          <Card.Text id="content">
            기본적으로 우리가 알고있는 블랙잭 게임입니다. 룰은 동일합니다.
          </Card.Text>
          <Button variant="primary">Let's Start!</Button>
        </Card.Body>
      </Card>
    );
  }
}

class Gameform2 extends Component {
  render() {
    return (
      <Card style={{ width: '18rem' }}>
        <Card.Img id="img_dice" variant="top" src={dice}/>
        <Card.Body>
          <Card.Title id="title">Dice Game(같은 수 맞추기)</Card.Title>
          <Card.Text id="content">
            컴퓨터가 던지는 주사위와 같은 주사위를 맞추는 게임입니다.
            만약 맞춘 수가 6이라면 보상은 2배!
          </Card.Text>
          <Button variant="primary">Let's Start!</Button>
        </Card.Body>
      </Card>
    );
  }
}

class Gameform3 extends Component {
  render() {
    return (
      <Card style={{ width: '18rem' }}>
        <Card.Img id="img_odd" variant="top" src={odd}/>
        <Card.Body>
          <Card.Title id="title">Oddeven(홀짝게임)</Card.Title>
          <Card.Text id="content">
            간단하고 쉬운 여러분이 잘 아시는 홀짝게임 입니다.
          </Card.Text>
          <Button variant="primary">Let's Start!</Button>
        </Card.Body>
      </Card>
    );
  }
}

class Gameform4 extends Component {
  render() {
    return (
      <Card style={{ width: '18rem' }}>
        <Card.Img id="img_rcp" variant="top" src={rcp}/>
        <Card.Body>
          <Card.Title id="title">RockScissorsPaper(가위바위보)</Card.Title>
          <Card.Text id="content">
            가위바위보 게임 입니다. 가위는 '1' 바위는 '2' 보는 '3' 이란 수를 입력하세요.
          </Card.Text>
          <Button variant="primary">Let's Start!</Button>
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
            <table>
              <tr>
                <th><Gameform1></Gameform1></th>
                <th><Gameform2></Gameform2></th>
              </tr>
              <tr>
                <th><Gameform3></Gameform3></th>
                <th><Gameform4></Gameform4></th>
              </tr>  
           
            </table>  
          </div>
        </React.Fragment>
      );
    }
  }
}  
export default App;
