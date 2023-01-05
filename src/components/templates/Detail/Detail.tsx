import { useState } from 'react';
import { useDeleteTodo } from '../../../hooks/useDeleteActivity';
import { useGetDetailTodo } from '../../../hooks/useGetActivity';
import CardActivity from '../../molecules/CardActivity/CardActivity';
import HeaderListDetail from '../../molecules/HeaderListDetail/HeaderListDetail';
import ModalConfirm from '../../molecules/Modal/ModalConfirm';
import PopupSubmitForm from '../../organisms/PopupSubmitForm/PopupSubmitForm';

const Detail = ({ id }: { id: number }) => {
  const [isEdit, setIsEdit] = useState(false);
  const [editValue, setEditValue] = useState();
  const [selectedIdToDelete, setSelectedIdToDelete] = useState();
  const [isDelete, setDelete] = useState(false);

  const { data: detail, refetch } = useGetDetailTodo('detail', id);
  const { handleDelete } = useDeleteTodo(refetch);

  return (
    <div>
      <HeaderListDetail title={detail?.title} id={detail?.id} />
      <div>
        {detail?.todo_items.map((item: any) => (
          <CardActivity
            key={item.id}
            setIsOpenModalEdit={setIsEdit}
            data={item}
            setDelete={setDelete}
            setIsEdit={setIsEdit}
            setEditValue={setEditValue}
            setSelectedIdToDelete={setSelectedIdToDelete}
          />
        ))}
      </div>
      {editValue ? (
        <PopupSubmitForm
          popupType="edit"
          data={editValue}
          id={id}
          isOpen={isEdit}
          setOpenModalDelete={setIsEdit}
        />
      ) : null}

      {selectedIdToDelete ? (
        <ModalConfirm
          id={selectedIdToDelete}
          isOpen={isDelete}
          setOpenModalDelete={setDelete}
          handleDelete={handleDelete}
        />
      ) : null}
    </div>
  );
};

export default Detail;
