export const responseSuppCurr = {
  code: 'success',
  message: '',
  payload: [
    {
      currencyGroup: 'BTC',
      color: '#F78B1A',
      currencySymbol: 'BTC',
      name: 'Bitcoin',
      logo: 'https://s3-ap-southeast-1.amazonaws.com/static.pintu.co.id/assets/images/logo/circle_BTC.svg',
      decimal_point: 8,
      listingDate: '2020-09-15T09:43:45Z',
    },
    {
      currencyGroup: 'ETH',
      color: '#9011FE',
      currencySymbol: 'ETH',
      name: 'Ethereum',
      logo: 'https://s3-ap-southeast-1.amazonaws.com/static.pintu.co.id/assets/images/logo/circle_ETH.svg',
      decimal_point: 18,
      listingDate: '2020-09-15T09:43:46Z',
    },
  ],
};

export const responsePriceChange = {
  code: 'success',
  message: '',
  payload: [
    {
      pair: 'btc/idr',
      latestPrice: '405228748',
      day: '0.89',
      week: '2.25',
      month: '-1.97',
      year: '-6.82',
    },
    {
      pair: 'eth/idr',
      latestPrice: '28228784',
      day: '1.56',
      week: '3.90',
      month: '4.27',
      year: '6.42',
    },
  ],
};

export const responsePriceChange2 = {
  code: 'success',
  message: '',
  payload: [
    {
      pair: 'btc/idr',
      latestPrice: '405228800',
      day: '0.89',
      week: '2.25',
      month: '-1.97',
      year: '-6.82',
    },
    {
      pair: 'eth/idr',
      latestPrice: '28228100',
      day: '1.56',
      week: '3.90',
      month: '4.27',
      year: '6.42',
    },
  ],
};
