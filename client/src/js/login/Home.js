import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import cookie from 'react-cookie';
import App from '../../App';
import LoginPanel from './LoginPanel';

class Home extends Component {
	componentWillMount(){
		this.state = {
			userId: ''
		};
		//adminId: cookie.load('adminId'),
	}

	onLogin(adminId){
		this.setState({
			userId:userId
		});
		//cookie.save('adminId',adminId, { path: '/'});
	}

	onLogout(){
		this.setState({
			userId:''
		});
		//cookie.remove('adminId', { path: '/'});
	}

	render(){
		if(!this.state.userId){
			return <LoginPanel 
					onSuccess={this.onLogin.bind(this)} 
					/>;
		} // userID 가 존재하면 App을 불러오고 존재하지 않을 경우 LoginPanel 컴포넌트 호출

		return <App
			userId={this.state.userId}
			onLogout={this.onLogout.bind(this)}
			/>;
	}
}
export default Home;