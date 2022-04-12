import axios from 'axios';

const apiUrl = 'http://localhost:3001';

export const getParcelMachines = async () => {
  const result = await axios.get(apiUrl + '/parcelMachine');
  return result.data;
};
