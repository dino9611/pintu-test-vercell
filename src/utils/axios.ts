import Axios from 'axios';

export const axiosInstance = Axios.create({
  baseURL: 'https://api.pintu.co.id/v2',
});
