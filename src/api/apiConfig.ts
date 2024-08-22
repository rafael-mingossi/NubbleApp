import axios from 'axios';

export const api = axios.create({
  baseURL: 'http://127.0.0.1:3333/',
  headers: {
    Authorization:
      'Bearer MQ.rivIRIZ4D3KlT4tdj-k7U5F6G4RYWjt8y3YLT8zatIHsB7PPRKeb4adU3gfb',
  },
});
