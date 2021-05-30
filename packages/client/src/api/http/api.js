import http from './index.js';
export const loginUser = (data) => http.post('/login', data);