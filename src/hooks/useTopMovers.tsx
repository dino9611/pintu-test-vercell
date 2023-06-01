import { useEffect, useState } from 'react';
import { IPriceChange, ISuppCurrencies } from 'src/services';
import { usePriceChangeData } from './usePriceChangeData';
import { useSuppCurrData } from './useSupCurrData';
import { IMergeData } from './useMergeData';

const mergeFunction = (
  priceChange?: IPriceChange[],
  supportedCurrencies?: ISuppCurrencies[],
): IMergeData[] => {
  if (!supportedCurrencies) {
    return [];
  }
  let sortedPriceChange = priceChange?.sort(
    (a, b) => Math.abs(b.day) - Math.abs(a.day),
  );
  sortedPriceChange = sortedPriceChange?.slice(0, 6);

  const mergeData = sortedPriceChange?.map((price) => {
    const suppCurr = supportedCurrencies?.find((suppCur) => {
      const reg = new RegExp(`^${suppCur.currencySymbol}/idr$`, 'gi');
      return price.pair.match(reg);
    });

    return {
      name: suppCurr?.name,
      logo: suppCurr?.logo,
      color: suppCurr?.color,
      currencySymbol: suppCurr?.currencySymbol,
      latestPrice: price?.latestPrice,
      day: price?.day,
      week: price?.week,
      month: price?.month,
      year: price?.year,
    };
  });

  if (!mergeData) return [];

  return mergeData;
};

export const useTopMoversdata = () => {
  const [TopMovers, setTopMovers] = useState<IMergeData[]>([]);
  const { data: priceChange } = usePriceChangeData();
  const { data: supportedCurrencies } = useSuppCurrData();

  useEffect(() => {
    setTopMovers(mergeFunction(priceChange, supportedCurrencies));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [priceChange]);

  return { TopMovers };
};
