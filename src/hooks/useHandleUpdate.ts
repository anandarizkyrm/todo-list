import { useMutation } from '@tanstack/react-query';
import { useState } from 'react';
import toast from 'react-hot-toast';

import { activityServices } from '../services/activity.service';

function useUpdateTitleDetail() {
  const { mutate, isLoading } = useMutation(activityServices.updateTitleDetail, {
    onSuccess() {
      toast.success('Successfully Update Title!');
    },
    onError(error: Error) {
      toast.error(error.message);
    },
  });
  const onSubmit = (id: number, title: string) => {
    mutate({ id, title });
  };

  return {
    onSubmit,
    isLoading,
  };
}

function useHandleEditTodo(refetch?: any) {
  const [title, setTitle] = useState<any>();
  const [priority, setPriority] = useState<any>();

  const { mutate, isLoading } = useMutation(activityServices.editTodo, {
    onSuccess() {
      window.location.reload();
      toast.success('Successfully edit todo!');
    },
    onError(error: Error) {
      toast.error(error.message);
    },
  });
  const onSubmit = (id: any, e: any) => {
    e.preventDefault();
    if (title && priority) {
      mutate({ id, title, priority });
    } else {
      toast.error('Please Fill All Input');
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

function useHandleUpdateStatusTodo() {
  const [is_active, setIsActive] = useState<any>();

  const { mutate, isLoading } = useMutation(activityServices.updateTodoStatus, {
    onSuccess() {
      toast.success('Successfully update todo status !');
    },
    onError(error: Error) {
      toast.error(error.message);
    },
  });
  const onSubmit = (id: any) => {
    mutate({ id, is_active });
  };

  return {
    onSubmit,
    isLoading,
    is_active,
    setIsActive,
  };
}

export { useUpdateTitleDetail, useHandleEditTodo, useHandleUpdateStatusTodo };
