import { createWrapper } from '../utils/test-utils.tsx';
import { waitFor, renderHook } from '@testing-library/react';
import { expect } from 'vitest';
import { usePriceChangeData } from 'src/hooks/usePriceChangeData';

describe('usePriceChangeData', () => {
  test('should return price change data', async () => {
    const { result } = renderHook(() => usePriceChangeData(), {
      wrapper: createWrapper(),
    });
    await waitFor(() => {
      return expect(result.current.data).toBeDefined();
    });
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    const data = result!.current!.data![0];

    expect(data).toEqual({
      pair: 'btc/idr',
      latestPrice: '405228748',
      day: '0.89',
      week: '2.25',
      month: '-1.97',
      year: '-6.82',
    });
  });
});
