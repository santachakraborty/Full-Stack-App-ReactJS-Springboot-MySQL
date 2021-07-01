import React, { Component } from 'react'
import AuthenticationService from './AuthenticationService.js';

export default class Login extends Component {
     constructor(props){
        super(props)
        this.state ={
           username: 'santa',
           password:'',
           hasLoginFailed:false,
           showSuccessMessage:false
        }
        this.handleUserChange = this.handleUserChange.bind(this);
        this.handlePasswordChange = this.handlePasswordChange.bind(this);
        this.loginClicked = this.loginClicked.bind(this)
     }
     //functions
     handleUserChange(e){
        this.setState({username:e.target.value})  
     }
     handlePasswordChange(e){
        this.setState({password:e.target.value})
     }
     loginClicked(){
        //hardcoded username and password

         if(this.state.username==='santa' && this.state.password==='abcde'){
            AuthenticationService.registerSuccessfulLogin(this.state.username, this.state.password);
            this.props.history.push("/welcome")
         }else{
           // console.log("failed");
            this.setState({showSuccessMessage:false})
            this.setState({hasLoginFailed:true})
         }
     }

  render() {
    return (
      <div>
        <div className="container">
          <div className="row">
             <div className="card col-md-5 offset-md-3 border shadow">


                <h2 className="text-center">Login</h2>
                <ShowInvalidCredentials hasLoginFailed={this.state.hasLoginFailed}/>
                {/* <ShowLoginSuccessMessage showSuccessMessage={this.state.showSuccessMessage} /> */}
                usename: <input type="text" name="username" value={this.state.username} onChange={this.handleUserChange}/>
                password: <input type="password" name="password" value={this.state.password} onChange={this.handlePasswordChange}/>
                <button style={{marginTop:"15px",marginBottom:"30px"}} className="btn btn-info" onClick={this.loginClicked}>Login</button>
           
             </div>
          </div>
        </div>
      </div>
    )
  }
}

function ShowInvalidCredentials(props){
    if(props.hasLoginFailed){
       return <div className="alert alert-warning">Access Denied: Invalid User.</div>
    }
    return null
}
// function ShowLoginSuccessMessage(props){
//   if(props.showSuccessMessage){
//     return <div>Login Successful!</div>
//   }
//   return null
// }
