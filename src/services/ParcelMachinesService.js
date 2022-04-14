import Client from './Client';

export const getParcelMachines = async () => {
  const result = await Client.get('/api/parcelmachines/');
  console.log(result);

  return result.data;
};
