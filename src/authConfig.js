export const msalConfig = {
    auth: {
      authority: 'https://login.microsoftonline.com/5c6f187c-3c8d-4bcb-a321-362f2904c707',
      clientId: 'cd72cc2b-9762-472c-b389-7c7344b247d7',
    },
    cache: {
      cacheLocation: 'sessionStorage',
      storeAuthStateInCookie: false,
    },
  };

  export const loginRequest = {
   scopes: ['api://cd72cc2b-9762-472c-b389-7c7344b247d7/test.example'],
  };

  export const graphConfig = {
      graphMeEndpoint: 'https://graph.microsoft.com',
  };
