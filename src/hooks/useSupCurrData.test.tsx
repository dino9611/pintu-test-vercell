import { createWrapper } from '../utils/test-utils.tsx';
import { waitFor, renderHook } from '@testing-library/react';
import { expect } from 'vitest';
import { useSuppCurrData } from './useSupCurrData.tsx';

describe('useSupCurrData', () => {
  test('should return Supported Currencies data', async () => {
    const { result } = renderHook(() => useSuppCurrData(), {
      wrapper: createWrapper(),
    });
    console.log(result);
    await waitFor(() => {
      return expect(result.current.data).toBeDefined();
    });
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    const data = result!.current!.data![0];

    expect(data).toEqual({
      currencyGroup: 'BTC',
      color: '#F78B1A',
      currencySymbol: 'BTC',
      name: 'Bitcoin',
      logo: 'https://s3-ap-southeast-1.amazonaws.com/static.pintu.co.id/assets/images/logo/circle_BTC.svg',
      decimal_point: 8,
      listingDate: '2020-09-15T09:43:45Z',
    });
  });
});
