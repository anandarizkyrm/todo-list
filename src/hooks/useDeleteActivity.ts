import { useMutation } from '@tanstack/react-query';
import toast from 'react-hot-toast';

import { activityServices } from '../services/activity.service';

export const useDeleteActivity = (refetch: any, setToastInfoOpen: any) => {
  const handleDelete = (deleteId: number) => {
    toast.loading('Please Wait');
    mutate(deleteId);
  };
  const { mutate, isLoading } = useMutation(activityServices.deleteActivity, {
    onSuccess() {
      refetch();
      toast.remove();
      setToastInfoOpen(true);
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

export const useDeleteTodo = (refetch: any, setToastInfoOpen: any) => {
  const { mutate, isLoading } = useMutation(activityServices.deleteTodo, {
    onSuccess() {
      toast.remove();
      refetch();
      setToastInfoOpen(true);
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
