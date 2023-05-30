import { fetchPriceChange } from 'src/services';
import { useQuery } from '@tanstack/react-query';

export const usePriceChangeData = () => {
  const { data, isLoading, isError } = useQuery({
    queryKey: ['PRICE_CHANGE'],
    queryFn: fetchPriceChange,
    refetchInterval: 2000,
    select: (data) => data.payload,
  });

  return { data, isLoading, isError };
};
