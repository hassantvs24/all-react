import http from './httpService';
import config from '../config.json';
const url = config.apiEndpoint+'users';

export function register(user) {
    return http.post(url, {
        name: user.name,
        email: user.username,
        password: user.password
    });
  }