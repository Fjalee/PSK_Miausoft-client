import axios from 'axios';

const instance = axios.create({
  baseURL: 'http://localhost:8080/miausoft/api',
});

instance.interceptors.request = axios.interceptors.request;
export default instance;
