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

export const editParcel = async (parcel) => {
  return await Client.post('/parcels/' + parcel.id, parcel)
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      return error.response.data;
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
  return await Client.post('/deliverytask/create/plan', obj)
    .then((response) => {
      return response;
    })
    .catch((error) => {
      console.log('Error ========>', error);
    });
};
