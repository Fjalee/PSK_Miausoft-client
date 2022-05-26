import Client from './Client';

export const getAllRecords = async (parcelId) => {
  return await Client.get('/deliveryRecords?id=' + parcelId)
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      console.log('Error ========>', error);
    });
};
