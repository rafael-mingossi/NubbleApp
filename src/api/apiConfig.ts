import axios from 'axios';

export const api = axios.create({
  baseURL: 'http://127.0.0.1:3333/',
  headers: {
    Authorization:
      'Bearer Mg.q1BIOGZBZoFgnkGoxv1-YMfx37L-farboLsP9QMW-QQpMIP4oszm13qtKPud',
  },
});
