import Client from './Client';

export const createOrder = async (obj) => {
  return await Client.post('/paypal/createOrder', obj)
    .then((response) => {
      window.location.href = response.headers.location;
    })
    .catch((error) => {
      console.log('Error ========>', error);
    });
};
