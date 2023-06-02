import { expect, vi } from 'vitest';
import TableBody from '.';
import { render } from '@testing-library/react';
import { ChangePrice } from 'src/hooks';

let mergeData = [
  {
    name: 'Bitcoin',
    logo: 'https://s3-ap-southeast-1.amazonaws.com/static.pintu.co.id/assets/images/logo/circle_BTC.svg',
    color: '#F78B1A',
    currencySymbol: 'BTC',
    latestPrice: '405228748',
    day: '0.89',
    week: '2.25',
    month: '-1.97',
    year: '-6.82',
    change: ChangePrice.more,
  },
];

vi.mock('src/hooks', async () => {
  const actual = await vi.importActual('src/hooks');
  return {
    ...(actual as typeof import('src/hooks')),
    useMergedata: vi.fn(() => ({
      mergeData,
    })),
  };
});

describe('TableBody', () => {
  test('should render Bitcoin in table body', async () => {
    const { getByText } = render(<TableBody filter="day" />);
    expect(getByText(/Bitcoin/i)).toBeInTheDocument();
  });
  test('should render Less Animate', async () => {
    mergeData = [
      {
        name: 'Bitcoin',
        logo: 'https://s3-ap-southeast-1.amazonaws.com/static.pintu.co.id/assets/images/logo/circle_BTC.svg',
        color: '#F78B1A',
        currencySymbol: 'BTC',
        latestPrice: '405228748',
        day: '0.89',
        week: '2.25',
        month: '-1.97',
        year: '-6.82',
        change: ChangePrice.less,
      },
    ];
    const { getByTestId } = render(<TableBody filter="day" />);
    expect(getByTestId('animate')).toHaveClass('less');
  });
  test('should render More Animate', async () => {
    mergeData = [
      {
        name: 'Bitcoin',
        logo: 'https://s3-ap-southeast-1.amazonaws.com/static.pintu.co.id/assets/images/logo/circle_BTC.svg',
        color: '#F78B1A',
        currencySymbol: 'BTC',
        latestPrice: '405228748',
        day: '0.89',
        week: '2.25',
        month: '-1.97',
        year: '-6.82',
        change: ChangePrice.more,
      },
    ];
    const { getByTestId } = render(<TableBody filter="day" />);
    expect(getByTestId('animate')).toHaveClass('more');
  });
  test('should render No Animate', async () => {
    mergeData = [
      {
        name: 'Bitcoin',
        logo: 'https://s3-ap-southeast-1.amazonaws.com/static.pintu.co.id/assets/images/logo/circle_BTC.svg',
        color: '#F78B1A',
        currencySymbol: 'BTC',
        latestPrice: '405228748',
        day: '0.89',
        week: '2.25',
        month: '-1.97',
        year: '-6.82',
        change: ChangePrice.stay,
      },
    ];
    const { getByTestId } = render(<TableBody filter="day" />);
    expect(getByTestId('animate')).not.toHaveClass('more');
    expect(getByTestId('animate')).not.toHaveClass('less');
  });
});
