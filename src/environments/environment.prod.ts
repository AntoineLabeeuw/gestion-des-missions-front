import { config } from './common';

/*export const environment = Object.assign({
  production: true,
  baseUrl: '__BACKEND_URL__'
}, config);*/

export const environment = Object.assign({
  production: false,
  baseUrl: 'http://localhost:8080/',
  baseUrlFront: 'http://localhost:4200/'
}, config);
