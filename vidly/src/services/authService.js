import http from './httpService';
import config from '../config.json';
const url = config.apiEndpoint+'auth';


export async function login(email, password) {
    return await http.post(url, {
        email: email,
        password: password
    });
  }