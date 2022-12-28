import './ActivityListContainer.css';

import { Toaster } from 'react-hot-toast';

import useCreateActivity from '../../../hooks/useCreateActivity';
import { useGetTodoList } from '../../../hooks/useGetListTodo';
import Button from '../../atoms/Button/Button';
import CardTodo from '../../molecules/CardTodo/CardTodo';
import ModalConfirm from '../../molecules/Modal/ModalConfirm';
import { useState } from 'react';
import { useDeleteActivity } from '../../../hooks/useDeleteActivity';

const ActivityList = () => {
  const [deleteId, setDeleteId] = useState<number | undefined>();
  const [openModalDelete, setOpenModalDelete] = useState<boolean>(false);
  const { data, isLoading, error, refetch, isFetching } = useGetTodoList('get list');
  const { handleDelete } = useDeleteActivity(refetch);
  const { onSubmit, isLoading: loadingCreate } = useCreateActivity(refetch);

  return (
    <div className="activity-list-container">
      <div className="header">
        <h1>Activity</h1>
        <Button
          handleClick={onSubmit}
          text={loadingCreate ? 'Loading...' : 'Tambah'}
          icon="+"
          color={'#0dcaf0'}
        />
      </div>
      {!isLoading && !isFetching ? (
        <div className="activity-list">
          {data?.data?.map((item: any) => (
            <CardTodo
              setDeleteId={setDeleteId}
              setOpenModalDelete={setOpenModalDelete}
              key={item?.id}
              title={item?.title}
              date={item.created_at}
              id={item.id}
            />
          ))}
        </div>
      ) : (
        'Loading . . .'
      )}
      <Toaster position="top-right" reverseOrder={false} />
      {deleteId ? (
        <ModalConfirm
          id={deleteId}
          handleDelete={handleDelete}
          isOpen={openModalDelete}
          setOpenModalDelete={setOpenModalDelete}
        />
      ) : null}
    </div>
  );
};

export default ActivityList;
