import http from './httpService';
import config from '../config.json';
const url = config.apiEndpoint+'genres';

export function getGenres() {
    return http.get(url);
  }