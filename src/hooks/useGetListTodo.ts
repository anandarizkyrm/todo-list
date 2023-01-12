import { useQuery } from '@tanstack/react-query';
import { useEffect, useState } from 'react';

import { activityServices } from '../services/activity.service';

export const useGetTodoList = (key: string): any => {
  const [listData, setListData] = useState();
  const { data, isLoading, isFetching } = useQuery([key], () => {
    return activityServices.getActivityList();
  });
  useEffect(() => {
    if (data) {
      setListData(data.data);
    }
  }, [data]);

  return {
    listData,
    setListData,
    isLoading,
    isFetching,
  };
};
