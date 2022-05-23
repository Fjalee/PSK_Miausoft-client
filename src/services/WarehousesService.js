import Client from './Client';

export const getWarehouses = async () => {
  const result = await Client.get('/warehouses');

  return result.data;
};
