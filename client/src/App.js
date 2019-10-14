/*global jQuery, padding*/
import React, { Component } from "react";
import "@fortawesome/fontawesome-free";
import "common-js";
//import jquery from "jquery";
//window.$ = window.jQuery = jquery;
//window.$ = window.jQuery = "./startbootstrap-freelancer-gh-pages/node_modules/jquery/dist/jquery.js"
import 'jquery/src/jquery';
import "jquery.easing";
import getWeb3 from "./utils/getWeb3";
import Chip from "./Chip.json";
import "./App.css";
import 'bootstrap/dist/css/bootstrap.css';
import "bootstrap/dist/css/bootstrap.min.css";
import casino from "./startbootstrap-freelancer-gh-pages/img/portfolio/lottery.png"
import blackjack from "./startbootstrap-freelancer-gh-pages/img/portfolio/black-jack.png";
import dice from "./startbootstrap-freelancer-gh-pages/img/portfolio/dice.png";
import odd from "./startbootstrap-freelancer-gh-pages/img/portfolio/countdown.png";
import rcp from "./startbootstrap-freelancer-gh-pages/img/portfolio/rcp4.jpg";
import fonts from "./startbootstrap-freelancer-gh-pages/vendor/fontawesome-free/css/all.min.css";
import theme_css from "./startbootstrap-freelancer-gh-pages/css/freelancer.css";

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
      <div class="col-lg ml-auto md-auto">
        {/* <div className="portfolio-item mx-auto" data-toggle="modal" data-target="#portfolioModal1">
          <div className="portfolio-item-caption d-flex align-items-center justify-content-center">
            <div className="portfolio-item-caption-content text-center text-white">
              <i className="fas fa-plus fa-3x" />
            </div>
          </div>
        </div> */}
      <img className="img-fluid" src={blackjack} alt="" />
      </div>
    );
  }
}

class GameModal1 extends Component {
  render() {
    return (
      <div className="portfolio-modal modal fade" id="portfolioModal1" tabIndex={-1} role="dialog" aria-labelledby="portfolioModal1Label" aria-hidden="true">
        <div className="modal-dialog modal-xl" role="document">
          <div className="modal-content">
            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">
                <i className="fas fa-times" />
              </span>
            </button>
            <div className="modal-body text-center">
              <div className="container">
                <div className="row justify-content-center">
                  <div className="col-lg-8">
                    {/* Portfolio Modal - Title */}
                    <h2 className="portfolio-modal-title text-secondary text-uppercase mb-0">Blackjack</h2>
                    {/* Icon Divider */}
                    <div className="divider-custom">
                      <div className="divider-custom-line" />
                      <div className="divider-custom-icon">
                        <i className="fas fa-star" />
                      </div>
                      <div className="divider-custom-line" />
                    </div>
                    {/* Portfolio Modal - Image */}
                    <img className="img-fluid rounded mb-5" src={blackjack} alt="" />
                    {/* Portfolio Modal - Text */}
                    <p className="mb-5">블랙잭은 우리에게 익숙한 블랙잭 게임입니다 룰은 같습니다.</p>
                    <button className="btn btn-info" href="#" data-dismiss="modal">
                      <i className="fas fa-times fa-fw" />
                      Close Window
                </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

class Gameform2 extends Component {
  render() {
    return (
      <div class="col-lg mr-auto">
        {/* <div className="portfolio-item mx-auto" data-toggle="modal" data-target="#portfolioModal2">
          <div className="portfolio-item-caption d-flex align-items-center justify-content-center">
            <div className="portfolio-item-caption-content text-center text-white">
              <i className="fas fa-plus fa-3x" />
            </div>
          </div>
          
        </div> */}
        <img className="img-fluid" src={dice} alt="" />
      </div>
    );
  }
}

class GameModal2 extends Component {
  render() {
    return (
      <div className="portfolio-modal modal fade" id="portfolioModal2" tabIndex={-1} role="dialog" aria-labelledby="portfolioModal2Label" aria-hidden="true">
        <div className="modal-dialog modal-xl" role="document">
          <div className="modal-content">
            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">
                <i className="fas fa-times" />
              </span>
            </button>
            <div className="modal-body text-center">
              <div className="container">
                <div className="row justify-content-center">
                  <div className="col-lg-8">
                    {/* Portfolio Modal - Title */}
                    <h2 className="portfolio-modal-title text-secondary text-uppercase mb-0">Dice</h2>
                    {/* Icon Divider */}
                    <div className="divider-custom">
                      <div className="divider-custom-line" />
                      <div className="divider-custom-icon">
                        <i className="fas fa-star" />
                      </div>
                      <div className="divider-custom-line" />
                    </div>
                    {/* Portfolio Modal - Image */}
                    <img className="img-fluid rounded mb-5" src={dice} alt="" />
                    {/* Portfolio Modal - Text */}
                    <p className="mb-5">같은 수를 맞추는 게임 입니다. 만약 맞춘 수가 6일 경우에는 보상이 2배!</p>
                    <button className="btn btn-info" href="#" data-dismiss="modal">
                      <i className="fas fa-times fa-fw" />
                      Close Window
                </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

class Gameform3 extends Component {
  render() {
    return (
      <div class="col-lg ml-auto">
        {/* <div className="portfolio-item mx-auto" data-toggle="modal" data-target="#portfolioModal3">
          <div className="portfolio-item-caption d-flex align-items-center justify-content-center">
            <div className="portfolio-item-caption-content text-center text-white">
              <i className="fas fa-plus fa-3x" />
            </div>
          </div>
          
        </div> */}
        <img className="img-fluid" src={odd} alt="" />
      </div>
    );
  }
}

class GameModal3 extends Component {
  render() {
    return (
      <div className="portfolio-modal modal fade" id="portfolioModal3" tabIndex={-1} role="dialog" aria-labelledby="portfolioModal3Label" aria-hidden="true">
        <div className="modal-dialog modal-xl" role="document">
          <div className="modal-content">
            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">
                <i className="fas fa-times" />
              </span>
            </button>
            <div className="modal-body text-center">
              <div className="container">
                <div className="row justify-content-center">
                  <div className="col-lg-8">
                    {/* Portfolio Modal - Title */}
                    <h2 className="portfolio-modal-title text-secondary text-uppercase mb-0">Odd or Even</h2>
                    {/* Icon Divider */}
                    <div className="divider-custom">
                      <div className="divider-custom-line" />
                      <div className="divider-custom-icon">
                        <i className="fas fa-star" />
                      </div>
                      <div className="divider-custom-line" />
                    </div>
                    {/* Portfolio Modal - Image */}
                    <img className="img-fluid rounded mb-5" src="img/portfolio/circus.png" alt="" />
                    {/* Portfolio Modal - Text */}
                    <p className="mb-5">우리에게 익숙한 홀짝 게임입니다. 컴퓨터가 던지는 주사위가 홀이냐 짝이냐를 맞추는 게임입니다.</p>
                    <button className="btn btn-info" href="#" data-dismiss="modal">
                      <i className="fas fa-times fa-fw" />
                      Close Window
                </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

class Gameform4 extends Component {
  render() {
    return (
      <div class="col-lg mr-auto">
        {/* <div className="portfolio-item mx-auto" data-toggle="modal" data-target="#portfolioModal4">
          <div className="portfolio-item-caption d-flex align-items-center justify-content-center">
            <div className="portfolio-item-caption-content text-center text-white">
              <i className="fas fa-plus fa-3x" />
            </div>
          </div>
          
        </div> */}
        <img className="img-fluid" src={rcp} alt="" />
      </div>
    );
  }
}

class GameModal4 extends Component {
  render() {
    return (
      <div className="portfolio-modal modal fade" id="portfolioModal4" tabIndex={-1} role="dialog" aria-labelledby="portfolioModal4Label" aria-hidden="true">
        <div className="modal-dialog modal-xl" role="document">
          <div className="modal-content">
            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">
                <i className="fas fa-times" />
              </span>
            </button>
            <div className="modal-body text-center">
              <div className="container">
                <div className="row justify-content-center">
                  <div className="col-lg-8">
                    {/* Portfolio Modal - Title */}
                    <h2 className="portfolio-modal-title text-secondary text-uppercase mb-0">Rock Scissors Paper</h2>
                    {/* Icon Divider */}
                    <div className="divider-custom">
                      <div className="divider-custom-line" />
                      <div className="divider-custom-icon">
                        <i className="fas fa-star" />
                      </div>
                      <div className="divider-custom-line" />
                    </div>
                    {/* Portfolio Modal - Image */}
                    <img className="img-fluid rounded mb-5" src="img/portfolio/game.png" alt="" />
                    {/* Portfolio Modal - Text */}
                    <p className="mb-5">가위바위보 게임입니다. 가위는 '1'로 바위는 '2'로 보는 '3'으로 표기합니다.</p>
                    <button className="btn btn-info" href="#" data-dismiss="modal">
                      <i className="fas fa-times fa-fw" />
                      Close Window
                </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
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
            <meta charSet="utf-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
            <meta name="description" content />
            <meta name="author" content />
            <title>Game Centre</title>
            {/* Custom fonts for this theme */}
            <link src={fonts}/>
            <link href="https://fonts.googleapis.com/css?family=Montserrat:400,700" rel="stylesheet" type="text/css" />
            <link href="https://fonts.googleapis.com/css?family=Lato:400,700,400italic,700italic" rel="stylesheet" type="text/css" />
            <link href="http://fonts.googleapis.com/earlyaccess/notosanskr.css" rel="stylesheet"/>
            {/* Theme CSS */}
            <link src={theme_css} />
            {/* Navigation */}
            <nav className="navbar navbar-expand-lg bg-secondary text-uppercase fixed-top" id="mainNav">
              <div className="container">
                <a className="navbar-brand js-scroll-trigger" href="mainNav">Game Centre</a>
                <button class="nav-item dropdown" className="navbar-toggler navbar-toggler-right text-uppercase font-weight-bold bg-info text-white rounded" type="button" data-toggle="dropdown" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                  Menu
        <i className="fas fa-bars" />
                </button>
                <div className="collapse navbar-collapse" id="navbarResponsive">
                  <ul  className="navbar-nav ml-auto" >
                    <li className="nav-item mx-0 mx-lg-1">
                      <a className="nav-link py-3 px-0 px-lg-3 rounded js-scroll-trigger" href="#portfolio">LOGIN</a>
                    </li>
                    <li className="nav-item mx-0 mx-lg-1">
                      <a className="nav-link py-3 px-0 px-lg-3 rounded js-scroll-trigger" href="#portfolio">GameList</a>
                    </li>
                    <li className="nav-item mx-0 mx-lg-1">
                      <a className="nav-link py-3 px-0 px-lg-3 rounded js-scroll-trigger" href="#about">About</a>
                    </li>
                    <li className="nav-item mx-0 mx-lg-1">
                      <a className="nav-link py-3 px-0 px-lg-3 rounded js-scroll-trigger" href="#contact">Contact</a>
                    </li>
                  </ul>
                </div>
              </div>
            </nav>
            {/* Masthead */}
            <header className="masthead bg-info text-white text-center">
              <div className="container d-flex align-items-center flex-column">
                {/* Masthead Avatar Image */}
                <img className="masthead-avatar mb-5" src={casino} alt="" />
                {/* Masthead Heading */}
                <h1 className="masthead-heading text-uppercase mb-0">Game Centre</h1>
                {/* Icon Divider */}
                <div className="divider-custom divider-light">
                  <div className="divider-custom-line" />
                  <div className="divider-custom-icon">
                    <i className="fas fa-star" />
                  </div>
                  <div className="divider-custom-line" />
                </div>
                {/* Masthead Subheading */}
                <p className="masthead-subheading font-weight-light mb-0">Made by Heeyoun, InSu, HyengGeun</p>
              </div>
            </header>
            {/* Portfolio Section */}
            <section className="page-section portfolio" id="portfolio">
              <div className="container">
                {/* Portfolio Section Heading */}
                <h2 className="page-section-heading text-center text-uppercase text-secondary mb-0">Game list</h2>
                {/* Icon Divider */}
                <div className="divider-custom">
                  <div className="divider-custom-line" />
                  <div className="divider-custom-icon">
                    <i className="fas fa-star" />
                  </div>
                  <div className="divider-custom-line" />
                </div>
                {/* Portfolio Grid Items */}
                <div className="row" >
                  {/* Portfolio Item 1 ~ 4 */}
                    <Gameform1></Gameform1> <Gameform2></Gameform2> <Gameform3></Gameform3> <Gameform4></Gameform4>
                                    
                </div>
                {/* /.row */}
              </div>
            </section>
            {/* About Section */}
            <section className="page-section bg-info text-white mb-0" id="about">
              <div className="container">
                {/* About Section Heading */}
                <h2 className="page-section-heading text-center text-uppercase text-white">About</h2>
                {/* Icon Divider */}
                <div className="divider-custom divider-light">
                  <div className="divider-custom-line" />
                  <div className="divider-custom-icon">
                    <i className="fas fa-star" />
                  </div>
                  <div className="divider-custom-line" />
                </div>
                {/* About Section Content */}
                <div className="row">
                  <div className="col-lg-9 ml-auto mr-auto">
                    <p className="lead">
                      이 페이지는 정부에서 주관하는 '블록체인 엔지니어 양성과정'의 교육생 김인수, 김희윤, 안형근이 만들었습니다. 
                      게임들은 이더리움 기반의 스마트 컨트랙트로 구성되어 있습니다. 게임은 총 4가지로 각각의 아이콘을 누르면 설명과 함께 간단한 게임을
                      즐기실 수 있습니다. 작업내용은 Github에 모두 올려져 있습니다. 감사합니다.
                    </p>
                  </div>
                </div>
                {/* About Section Button */}
                <div className="text-center mt-4">
                  <a className="btn btn-xl btn-outline-light" href="https://github.com/lnhog403/Tie-Draw">
                    <i class="fab fa-github"/>
                    &nbsp; Join Github
        </a>
                </div>
              </div>
            </section>
            {/* Contact Section */}
            <section className="page-section" id="contact">
              <div className="container">
                {/* Contact Section Heading */}
                <h2 className="page-section-heading text-center text-uppercase text-secondary mb-0">Contact Me</h2>
                {/* Icon Divider */}
                <div className="divider-custom">
                  <div className="divider-custom-line" />
                  <div className="divider-custom-icon">
                    <i className="fas fa-star" />
                  </div>
                  <div className="divider-custom-line" />
                </div>
                {/* Contact Section Form */}
                <div className="row">
                  <div className="col-lg-8 mx-auto">
                    {/* To configure the contact form email address, go to mail/contact_me.php and update the email address in the PHP file on line 19. */}
                    <form name="sentMessage" id="contactForm" noValidate="novalidate" method="post" action="mailto:dnflwlq3231@naver.com">
                      <div className="control-group">
                        <div className="form-group floating-label-form-group controls mb-0 pb-2">
                          <label>Name</label>
                          <input className="form-control" id="name" type="text" placeholder="Name" required="required" data-validation-required-message="Please enter your name." />
                          <p className="help-block text-danger" />
                        </div>
                      </div>
                      <div className="control-group">
                        <div className="form-group floating-label-form-group controls mb-0 pb-2">
                          <label>Email Address</label>
                          <input className="form-control" id="email" type="email" placeholder="Email Address" required="required" data-validation-required-message="Please enter your email address." />
                          <p className="help-block text-danger" />
                        </div>
                      </div>
                      <div className="control-group">
                        <div className="form-group floating-label-form-group controls mb-0 pb-2">
                          <label>Phone Number</label>
                          <input className="form-control" id="phone" type="tel" placeholder="Phone Number" required="required" data-validation-required-message="Please enter your phone number." />
                          <p className="help-block text-danger" />
                        </div>
                      </div>
                      <div className="control-group">
                        <div className="form-group floating-label-form-group controls mb-0 pb-2">
                          <label>Message</label>
                          <textarea className="form-control" id="message" rows={3} placeholder="Message" required="required" data-validation-required-message="Please enter a message." defaultValue={""} />
                          <p className="help-block text-danger" />
                        </div>
                      </div>
                      <br />
                      <div id="success" />
                      <div className="form-group">
                        <button type="submit" className="btn btn-info btn-xl" id="sendMessageButton" href="mailto:dnflwlq3231@naver.com">Send</button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </section>
            {/* Footer */}
            <footer className="footer text-center">
              <div className="container">
                <div className="row">
                  {/* Footer Location */}
                  <div className="col-lg-4 mb-5 mb-lg-0">
                    <h4 className="text-uppercase mb-4">Location</h4>
                    <p className="lead mb-0">서울 마포구 양화로 127
            <br />서교동 353-4 (우)04032</p>
                  </div>
                  {/* Footer Social Icons */}
                  <div className="col-lg-4 mb-5 mb-lg-0">
                    <h4 className="text-uppercase mb-4">Around the Web</h4>
                    <a className="btn btn-outline-light btn-social mx-1" href="https://www.facebook.com/">
                      <i className="fab fa-fw fa-facebook-f" />
                    </a>
                    <a className="btn btn-outline-light btn-social mx-1" href="https://twitter.com/">
                      <i className="fab fa-fw fa-twitter" />
                    </a>
                    <a className="btn btn-outline-light btn-social mx-1" href="https://www.google.co.kr/">
                      <i className="fab fa-fw fa-google" />
                    </a>
                    <a className="btn btn-outline-light btn-social mx-1" href="https://www.instagram.com/?hl=ko">
                      <i className="fab fa-fw fa-instagram" />
                    </a>
                  </div>
                  {/* Footer About Text */}
                  <div className="col-lg-4">
                    <h4 className="text-uppercase mb-4">About Game Centre</h4>
                    <p className="lead mb-0">Game Centre is a free to use, Ethereum based game with smart contracts created by 
            <a href="https://github.com/lnhog403/Tie-Draw"> HIH</a>.</p>
                  </div>
                </div>
              </div>
            </footer>
            {/* Copyright Section */}
            <section className="copyright py-4 text-center text-white">
              <div className="container">
                <small>Copyright © HIH</small>
              </div>
            </section>
            {/* Scroll to Top Button (Only visible on small and extra-small screen sizes) */}
            <div className="scroll-to-top d-lg-none position-fixed ">
              <a className="js-scroll-trigger d-block text-center text-white rounded" href="#page-top">
                <i className="fa fa-chevron-up" />
              </a>
            </div>
            
            {/* Portfolio Modals */}
            {/* Portfolio explain section */}
            {/* Portfolio Modal 1 */}
            <GameModal1></GameModal1>
            {/* Portfolio Modal 2 */}
            <GameModal2></GameModal2>
            {/* Portfolio Modal 3 */}
            <GameModal3></GameModal3>
            {/* Portfolio Modal 4 */}
            <GameModal4></GameModal4>
                        
            {/* Bootstrap core JavaScript */}
            {/*<script src={corejs1}></script>
            <script src={corejs2}></script>*/}
            
            {/* Plugin JavaScript */}
            {/*<script src={plugin}></script>*/}

            {/* Contact Form JavaScript */}
            {/*<script src={contract_js1}></script>
            <script src={contract_js2}></script>*/}

            {/* Custom scripts for this template */}
            {/*<script src={custom_js}></script>*/}  
                                 
            
                      
          </div>

        </React.Fragment>
      )
    }
  }
}
export default App;
