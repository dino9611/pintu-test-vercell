import { useEffect, useState } from 'react';
import { IPriceChange, ISuppCurrencies } from 'src/services';
import { usePriceChangeData } from './usePriceChangeData';
import { useSuppCurrData } from './useSupCurrData';

export enum ChangePrice {
  stay = 'STAY',
  more = 'MORE',
  less = 'LESS',
}

export interface IMergeData {
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

interface IMergeDataFinal extends IMergeData {
  change?: ChangePrice;
}

const selectChange = (prevdata?: number, newData?: number) => {
  if (!prevdata || !newData) {
    return ChangePrice.stay;
  }
  if (prevdata > newData) {
    return ChangePrice.less;
  }
  if (prevdata < newData) {
    return ChangePrice.more;
  }
  return ChangePrice.stay;
};

const mergeFunction = (
  priceChange?: IPriceChange[],
  supportedCurrencies?: ISuppCurrencies[],
  mergeDataPrev?: IMergeDataFinal[],
): IMergeDataFinal[] => {
  if (!supportedCurrencies) {
    return [];
  }
  const mergeData = supportedCurrencies?.map((suppCurr) => {
    const price = priceChange?.find((price) => {
      const reg = new RegExp(`^${suppCurr.currencySymbol}/idr$`, 'gi');
      return price.pair.match(reg);
    });
    const prevData = mergeDataPrev?.find((data) => {
      return suppCurr.name === data.name;
    });
    const changePrice = selectChange(prevData?.latestPrice, price?.latestPrice);
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
      change: changePrice,
    };
  });

  return mergeData;
};

export const useMergedata = () => {
  const [mergeData, setMergeData] = useState<IMergeDataFinal[]>([]);
  const [mergeDataPrev, setMergePrevData] = useState<IMergeDataFinal[]>([]);

  const { data: priceChange } = usePriceChangeData();
  const { data: supportedCurrencies } = useSuppCurrData();

  useEffect(() => {
    if (mergeData.length) {
      setMergePrevData(mergeData);
    }
    setMergeData(
      mergeFunction(priceChange, supportedCurrencies, mergeDataPrev),
    );
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [priceChange]);

  return { mergeData, mergeDataPrev };
};
