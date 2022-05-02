import Client from './Client';

export const getParcelDimensions = async () => {
  const result = await Client.get('/parceldimensions/');
  return result.data;
};
