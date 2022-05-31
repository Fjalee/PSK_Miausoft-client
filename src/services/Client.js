import { useAccount, useMsal } from '@azure/msal-react';
import axios from 'axios';
import { loginRequest } from '../authConfig';

const instance = axios.create({
  baseURL: 'http://localhost:8080/miausoft/api',
});

const reqInterceptor = (msalInstance, account) => async (request) => {
  const response = await msalInstance.acquireTokenSilent({
    ...loginRequest,
    account,
  });
  const bearer = `Bearer ${response.accessToken}`;
  request.headers.Authorization = bearer;
  return request;
};

function AxiosInterceptor({children}) {
  const { instance: msalInstance, accounts } = useMsal();
  const account = useAccount(accounts[0]);
  if (account && instance.interceptors.request['handlers'].length === 0) {
    instance.interceptors.request.use(reqInterceptor(msalInstance, account));
  }
  return children;
}

export default instance;
export { AxiosInterceptor };
