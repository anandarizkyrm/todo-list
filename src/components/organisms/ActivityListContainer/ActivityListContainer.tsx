import './ActivityListContainer.css';

import { useState } from 'react';
import { Toaster } from 'react-hot-toast';

import { useCreateActivity } from '../../../hooks/useCreateActivity';
import { useDeleteActivity } from '../../../hooks/useDeleteActivity';
import { useGetTodoList } from '../../../hooks/useGetListTodo';
import Button from '../../atoms/Button/Button';
import CardTodo from '../../molecules/CardTodo/CardTodo';
import ModalConfirm from '../../molecules/Modal/ModalConfirm';

const ActivityList = () => {
  const [deleteId, setDeleteId] = useState<any>();
  const [openModalDelete, setOpenModalDelete] = useState<boolean>(false);
  const { data, isLoading, refetch, isFetching } = useGetTodoList('get list');
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
