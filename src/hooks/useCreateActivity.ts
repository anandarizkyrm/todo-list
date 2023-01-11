import { useMutation } from '@tanstack/react-query';
import { useState } from 'react';
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

function useCreateTodo() {
  const [title, setTitle] = useState();
  const [priority, setPriority] = useState();
  const { mutate, isLoading } = useMutation(activityServices.createTodo, {
    onSuccess() {
      window.location.reload();
      toast.success('Successfully create todo!');
    },
    onError(error: Error) {
      toast.error(error.message);
    },
  });
  const onSubmit = (id: string, e: any) => {
    e.preventDefault();
    if (title && priority) {
      mutate({ id, title, priority });
      console.log(priority);
    } else {
      toast.error('Isi Semua Data');
    }
  };

  return {
    onSubmit,
    isLoading,
    setTitle,
    title,
    priority,
    setPriority,
  };
}

export { useCreateActivity, useCreateTodo };
