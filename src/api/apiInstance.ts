/**
 * Created this to fix the cycle warnings in domain/Auth/authApi and authService
 */

import axios from 'axios';

// export const BASE_URL = 'http://192.168.1.100:3333/';
export const BASE_URL = 'http://127.0.0.1:3333/';
// export const BASE_URL = 'https://nubble-api.coffstack.com.br/';
export const api = axios.create({
  baseURL: BASE_URL,
});
