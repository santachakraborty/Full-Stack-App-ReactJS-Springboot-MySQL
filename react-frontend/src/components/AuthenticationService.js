// import React, { Component } from 'react'

class AuthenticationService {
   registerSuccessfulLogin(username,password){
     console.log("register successful");
     sessionStorage.setItem('authenticatedUser', username);
   }

  //  to clear the session storage(logout)
  logout(){
    sessionStorage.removeItem('authenticatedUser');
  }

  // to check user logged in or not
  isUserLoggedIn(){
    let user = sessionStorage.getItem('authenticatedUser');
    if(user === null) return false
    return true
     
  }
  
}

export default new AuthenticationService()
