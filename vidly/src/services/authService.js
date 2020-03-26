import http from './httpService';
import config from '../config.json';
const url = config.apiEndpoint+'auth';


export function login(email, password) {
    return http.post(url, {
        email: email,
        password: password
    });
  }