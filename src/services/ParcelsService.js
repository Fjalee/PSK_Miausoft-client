import Client from './Client';

export const getParcel = async (id) => {
  return await Client.get('/parcels?id=' + id)
    .then((response) => {
      return response.data;
    })
    .catch(() => {
      return null;
    });
};

export const getAll = async () => {
  return await Client.get('/parcels/getAll')
    .then((response) => {
      return response.data;
    })
    .catch(() => {
      return null;
    });
};

export const createDeliveryPlan = async (obj) => {
  return await Client.post('/parcels/deliveryplan', obj)
    .then((response) => {
      return response;
    })
    .catch((error) => {
      console.log('Error ========>', error);
    });
};
