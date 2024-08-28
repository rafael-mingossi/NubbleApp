import axios from 'axios';

export const api = axios.create({
  baseURL: 'http://127.0.0.1:3333/',
  headers: {
    Authorization:
      'Bearer Mw.2VU1KYShF1RRj_iQCPb6S3elwdKLoC4IAf9--WFDLLisPQ9Ntu66ZsWYbAMt',
  },
});
