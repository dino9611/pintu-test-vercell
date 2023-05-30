import { axiosInstance } from 'src/utils/axios';

interface Response<T> {
  code: string;
  message: string;
  payload: T;
}

interface IWallet {
  currencyGroup: string;
  tokenSymbol: string;
  decimal_point: number;
  tokenType: string;
  blockchain: string;
  explorer: string;
  listingDate: Date;
  blockchainName: string;
  logo: string;
}

export interface ISuppCurrencies {
  currencyGroup: string;
  color: string;
  currencySymbol: string;
  name: string;
  logo: string;
  decimal_point: number;
  listingDate: Date;
  wallets: IWallet[];
}

export const fetchSupCurr = async (): Promise<Response<ISuppCurrencies[]>> => {
  const { data } = await axiosInstance.get('/wallet/supportedCurrencies');
  return data;
};
