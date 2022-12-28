import { useQuery } from '@tanstack/react-query';

import { activityServices } from '../services/activity.service';

export const useGetTodoList = (key: string): any => {
  return useQuery([key], () => {
    return activityServices.getActivityList();
  });
};
