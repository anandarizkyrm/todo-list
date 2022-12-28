import { useMutation } from '@tanstack/react-query';
import toast from 'react-hot-toast';

import { activityServices } from '../services/activity.service';

export const useDeleteActivity = (refetch: any) => {
  const { mutate, isLoading } = useMutation(activityServices.deleteActivity, {
    onSuccess() {
      refetch();
      toast.remove();
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
