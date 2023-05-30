import { useEffect, useState } from 'react';
import { IPriceChange, ISuppCurrencies } from 'src/services';
import { usePriceChangeData } from './usePriceChangeData';
import { useSuppCurrData } from './useSupCurrData';

interface IMergeData {
  name?: string;
  logo?: string;
  currencySymbol?: string;
  latestPrice?: number;
  day?: number;
  week?: number;
  month?: number;
  year?: number;
}

const mergeFunction = (
  priceChange?: IPriceChange[],
  supportedCurrencies?: ISuppCurrencies[],
): IMergeData[] => {
  if (!supportedCurrencies) {
    return [];
  }
  const excludeIRP = supportedCurrencies?.filter(
    (val) => val.currencySymbol != 'Rp',
  );
  const mergeData = excludeIRP?.map((suppCurr) => {
    const price = priceChange?.find((price) => {
      const reg = new RegExp(`^${suppCurr.currencySymbol}/idr$`, 'gi');
      return price.pair.match(reg);
    });
    return {
      name: suppCurr.name,
      logo: suppCurr.logo,
      currencySymbol: suppCurr.currencySymbol,
      latestPrice: price?.latestPrice,
      day: price?.day,
      week: price?.week,
      month: price?.month,
      year: price?.year,
    };
  });

  return mergeData;
};

export const useMergedata = () => {
  const [mergeData, setMergeData] = useState<IMergeData[]>([]);
  const { data: priceChange } = usePriceChangeData();
  const { data: supportedCurrencies } = useSuppCurrData();

  useEffect(() => {
    setMergeData(mergeFunction(priceChange, supportedCurrencies));
  }, [priceChange, supportedCurrencies]);

  return { mergeData };
};
