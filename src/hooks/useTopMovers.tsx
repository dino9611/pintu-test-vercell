import { useEffect, useState } from 'react';
import { IMergeData, useMergedata } from './useMergeData';

const mergeFunction = (mergeDataPar: IMergeData[]): IMergeData[] => {
  let sortedPriceChange = mergeDataPar.sort(
    (a, b) => Math.abs(b.day as number) - Math.abs(a.day as number),
  );
  sortedPriceChange = sortedPriceChange?.slice(0, 6);

  return sortedPriceChange;
};

export const useTopMoversdata = () => {
  const [TopMovers, setTopMovers] = useState<IMergeData[]>([]);
  const { mergeData } = useMergedata();

  useEffect(() => {
    setTopMovers(mergeFunction(mergeData));
  }, [mergeData]);

  return { TopMovers };
};
