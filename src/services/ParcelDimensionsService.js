import Client from './Client';

export const getParcelDimensions = async () => {
  const result = await Client.get('/api/parceldimensions/');
  return result.data;
};
