import { fetchSupCurr } from 'src/services';
import { useQuery } from '@tanstack/react-query';

export const useSuppCurrData = () => {
  const { data, isLoading, isError } = useQuery({
    queryKey: ['Supported_Curr'],
    queryFn: fetchSupCurr,
    select: (data) => data.payload,
  });

  return { data, isLoading, isError };
};
