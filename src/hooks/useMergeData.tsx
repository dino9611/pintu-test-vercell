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
  color?: string;
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
      color: suppCurr.color,
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

// const topMovers =

export const useMergedata = () => {
  const [mergeData, setMergeData] = useState<IMergeData[]>([]);
  const [mergeDataPrev, setMergePrevData] = useState<IMergeData[]>([]);
  // const [topMovers, setTopMovers] = useState<IMergeData[]>([]);/

  const { data: priceChange } = usePriceChangeData();
  const { data: supportedCurrencies } = useSuppCurrData();

  useEffect(() => {
    if (mergeDataPrev.length) {
      setMergePrevData(mergeData);
    }
    setMergeData(mergeFunction(priceChange, supportedCurrencies));
    // setTopMovers(mergeFunction(priceChange, supportedCurrencies));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [priceChange, supportedCurrencies]);

  return { mergeData, mergeDataPrev };
};
