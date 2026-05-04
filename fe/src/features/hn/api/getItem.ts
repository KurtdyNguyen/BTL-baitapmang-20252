import { useQuery } from '@tanstack/react-query';
import { api } from '@/lib/api-client';

export const fetchItem = (id: number) => api.get(`/item/${id}.json`);

export const useItem = (id: number) => {
  return useQuery({
    queryKey: ['item', id],
    queryFn: () => fetchItem(id),
  });
};
