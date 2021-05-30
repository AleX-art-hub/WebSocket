import axios from 'axios';
const http = axios({
  baseURL: 'http://localhost:3000/api',
});
export default http;