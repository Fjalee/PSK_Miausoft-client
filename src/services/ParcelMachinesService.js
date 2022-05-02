import Client from './Client';

export const getParcelMachines = async () => {
  const result = await Client.get('/parcelmachines/');

  return result.data;
};
