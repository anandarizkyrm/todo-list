import './ActivityListContainer.css';

import { useState } from 'react';
import { Toaster } from 'react-hot-toast';

import emptyItem from '../../../assets/empty-activity.png';
import { useCreateActivity } from '../../../hooks/useCreateActivity';
import { useDeleteActivity } from '../../../hooks/useDeleteActivity';
import { useGetTodoList } from '../../../hooks/useGetListTodo';
import Button from '../../atoms/Button/Button';
import CardTodo from '../../molecules/CardTodo/CardTodo';
import ModalConfirm from '../../molecules/Modal/ModalConfirm';

const ActivityList = () => {
  const [deleteId, setDeleteId] = useState<any>();
  const [deleteTitle, setDeleteTitle] = useState<any>();

  const [openModalDelete, setOpenModalDelete] = useState<boolean>(false);
  const { listData, setListData, isLoading, isFetching } = useGetTodoList('get list');
  const { handleDelete } = useDeleteActivity(setListData, listData);
  const { onSubmit, isLoading: loadingCreate } = useCreateActivity(setListData, listData);

  console.log(listData);

  return (
    <div className="activity-list-container">
      <div className="header">
        <h1 data-cy="activity-title">Activity</h1>
        <Button
          data-cy="activity-add-button"
          handleClick={onSubmit}
          text={loadingCreate ? 'Loading...' : 'Tambah'}
          icon="+"
          color={'#16ABF8'}
        />
      </div>

      {!isLoading && !isFetching ? (
        <div className="activity-list">
          {listData?.length < 1 && (
            <div className="empty-item" data-cy="activity-empty-state">
              <img src={emptyItem} alt="empty" onClick={onSubmit} />
            </div>
          )}
          {listData?.map((item: any) => (
            <CardTodo
              setDeleteId={setDeleteId}
              setDeleteTitle={setDeleteTitle}
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
      <Toaster data-cy="modal-information" position="top-right" reverseOrder={false} />
      {deleteId ? (
        <ModalConfirm
          id={deleteId}
          deleteTitle={deleteTitle}
          handleDelete={handleDelete}
          isOpen={openModalDelete}
          setOpenModalDelete={setOpenModalDelete}
        />
      ) : null}
    </div>
  );
};

export default ActivityList;
