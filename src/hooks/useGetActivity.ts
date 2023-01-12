import { useQuery } from '@tanstack/react-query';
import { useEffect, useState } from 'react';

import { activityServices } from '../services/activity.service';

export const useGetActivity = (key: string, id: number): any => {
  return useQuery([key, id], () => {
    return activityServices.getTodoList(id);
  });
};

export const useGetDetailTodo = (key: string, id: number): any => {
  const [list, setList] = useState();
  const {
    data: detail,
    refetch,
    isFetching,
    isLoading,
  } = useQuery([key, id], () => {
    return activityServices.getDetailTodo(id);
  });

  useEffect(() => {
    if (detail) {
      setList(detail?.todo_items);
    }
  }, [detail]);

  return { list, refetch, setList, detail, isFetching, isLoading };
};
