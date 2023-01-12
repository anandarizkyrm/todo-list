import { useMutation } from '@tanstack/react-query';
import toast from 'react-hot-toast';

import { activityServices } from '../services/activity.service';

export const useDeleteActivity = (setListData: any, listData: any) => {
  const handleDelete = (deleteId: number) => {
    toast.loading('Please Wait');
    mutate(deleteId);
    const newList = [...listData]?.filter((item: any) => {
      return item.id != deleteId;
    });
    setListData(newList);
  };
  const { mutate, isLoading } = useMutation(activityServices.deleteActivity, {
    onSuccess() {
      toast.remove();
      toast.success('Successfully Delete Activity!');
    },
    onError(error: Error) {
      toast.error(error.message);
    },
  });
  return {
    handleDelete,
    isLoading,
  };
};

export const useDeleteTodo = (refetch: any) => {
  const { mutate, isLoading } = useMutation(activityServices.deleteTodo, {
    onSuccess() {
      toast.remove();
      refetch();
      toast.success('Successfully Delete Activity!');
    },
    onError(error: Error) {
      toast.error(error.message);
    },
  });
  const handleDelete = (deleteId: number) => {
    toast.loading('Please Wait');
    mutate(deleteId);
  };

  return {
    handleDelete,
    isLoading,
  };
};
