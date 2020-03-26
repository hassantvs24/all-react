import http from './httpService';
import config from '../config.json';
import jwtDecode from 'jwt-decode';
const url = config.apiEndpoint+'auth';
const tokenKey = "token";

http.setJwt(getJwt());

 async function login(email, password) {
    const {data: jwt} = await http.post(url, {
        email: email,
        password: password
    });

    localStorage.setItem(tokenKey, jwt);
  }

 function loginWithJwt(jwt) {
    localStorage.setItem(tokenKey, jwt);
  }

 function logout() {
    localStorage.removeItem(tokenKey);
  }


 function getCurrentUser(){
    try{
        const jwt = localStorage.getItem(tokenKey);
        const user = jwtDecode(jwt);
        return user;
      } catch (ex) {
       return null;
      }
  }

  function getJwt(){
      return localStorage.getItem(tokenKey);
  }

  export default {
      login, 
      loginWithJwt,
      logout,
      getCurrentUser,
      getJwt
  }