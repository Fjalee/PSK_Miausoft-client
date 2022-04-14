import Client from './Client';

export const createOrder = async (obj) => {
  return await Client.post('/api/paypal/createOrder', obj)
    .then((response) => {
      console.log(response.headers.location);
      window.location.href = response.headers.location;
    })
    .catch((error) => {
      console.log('Error ========>', error);
    });
};
