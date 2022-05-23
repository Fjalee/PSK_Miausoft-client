import React from 'react';
import { useMsal, useAccount } from '@azure/msal-react';
import axios from 'axios';
import { loginRequest } from '../authConfig';

export const AxiosInterceptor = ({ children }) => {
    const { instance, accounts } = useMsal();
    const account = useAccount(accounts[0]);

    if (account) {
        axios.interceptors.request.use(async (config) => {
            const response = await instance.acquireTokenSilent({
                ...loginRequest,
                account,
            });

            const bearer = `Bearer ${response.accessToken}`;
            config.headers.Authorization = bearer;

            return config;
        });
    }
  return (
    <>
      {children}
    </>
  );
};
