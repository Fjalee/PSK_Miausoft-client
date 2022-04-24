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
