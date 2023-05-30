import { axiosInstance } from 'src/utils/axios';

interface Response<T> {
  code: string;
  message: string;
  payload: T;
}

export interface IPriceChange {
  pair: string;
  latestPrice: number;
  day: number;
  week: number;
  month: number;
  year: number;
}

export const fetchPriceChange = async (): Promise<Response<IPriceChange[]>> => {
  const { data } = await axiosInstance.get('/trade/price-changes');
  return data;
};
