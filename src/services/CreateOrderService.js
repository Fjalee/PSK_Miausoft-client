import axios from 'axios';

const apiUrl = 'http://localhost:3001';

export const getDimensionTypes = async () => {
  const result = await axios.get(apiUrl + '/parcelDimensions');
  return result.data;
};
