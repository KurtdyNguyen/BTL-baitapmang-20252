import { queryOptions, useQuery } from '@tanstack/react-query';
import { api } from '@/lib/api-client';

const storyEndpoints = {
  top: '/topstories.json',
  new: '/newstories.json',
  best: '/beststories.json',
  ask: '/askstories.json',
  show: '/showstories.json',
  job: '/jobstories.json',
};

export const getStories = (type: keyof typeof storyEndpoints) =>
  api.get(storyEndpoints[type]);

export const getStoriesQueryOptions = (type: keyof typeof storyEndpoints) => {
  return queryOptions({
    queryKey: ['stories', type],
    queryFn: () => getStories(type),
  });
};

export const useStories = () => {
  const type = 'top'; // get type from global state stores later, set by nav bar
  return useQuery(getStoriesQueryOptions(type));
};
