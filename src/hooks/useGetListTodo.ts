import { useQuery } from '@tanstack/react-query';

import { activityServices } from '../services/activity.service';

export const useGetTodoList = (key: string): any => {
  const { data, isLoading, isFetching, refetch } = useQuery([key], () => {
    return activityServices.getActivityList();
  });

  return {
    data,
    refetch,
    isLoading,
    isFetching,
  };
};
