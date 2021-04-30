import axios from 'axios';

export const healthCheck = async () => {
  try {
    const res = await axios.get('/api/v1/healthcheck');
    return res;
  } catch (error) {
    return error;
  }
};
