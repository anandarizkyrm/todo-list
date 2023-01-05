import { useQuery } from '@tanstack/react-query';

import { activityServices } from '../services/activity.service';

export const useGetActivity = (key: string, id: number): any => {
  return useQuery([key, id], () => {
    return activityServices.getTodoList(id);
  });
};

export const useGetDetailTodo = (key: string, id: number): any => {
  return useQuery([key, id], () => {
    return activityServices.getDetailTodo(id);
  });
};
