import { useMutation } from '@tanstack/react-query';
import toast from 'react-hot-toast';

import { activityServices } from '../services/activity.service';

function useCreateActivity(refetch?: any) {
  const { mutate, isLoading } = useMutation(activityServices.createActivity, {
    onSuccess() {
      refetch();
      toast.success('Successfully add Activity!');
    },
    onError(error: Error) {
      toast.error(error.message);
    },
  });
  const onSubmit = () => {
    mutate();
  };

  return {
    onSubmit,
    isLoading,
  };
}

export default useCreateActivity;
