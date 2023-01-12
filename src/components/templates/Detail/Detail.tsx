import { useEffect, useState } from 'react';

import emptyImage from '../../../assets/empty-item.png';
import { useDeleteTodo } from '../../../hooks/useDeleteActivity';
import { useGetDetailTodo } from '../../../hooks/useGetActivity';
import CardActivity from '../../molecules/CardActivity/CardActivity';
import HeaderListDetail from '../../molecules/HeaderListDetail/HeaderListDetail';
import ModalConfirm from '../../molecules/Modal/ModalConfirm';
import PopupSubmitForm from '../../organisms/PopupSubmitForm/PopupSubmitForm';
import ToastInfo from '../../organisms/ToastInfo/ToastInfo';
const Detail = ({ id }: { id: number }) => {
  const [isEdit, setIsEdit] = useState(false);
  const [editValue, setEditValue] = useState();
  const [selectedIdToDelete, setSelectedIdToDelete] = useState();
  const [isDelete, setDelete] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(1);
  const [isOpenDropdown, setIsOpenDropdown] = useState(false);
  const [isOpenInfo, setIsOpenInfo] = useState(false);
  const { list, refetch, setList, detail } = useGetDetailTodo('detail', id);
  const { handleDelete } = useDeleteTodo(refetch, setIsOpenInfo);
  const [deleteTitle, setDeleteTitle] = useState<any>();
  const handleSort = () => {
    let sorted;
    switch (activeDropdown) {
      case 1:
        sorted = [...list].sort((a, b) => {
          return b.id - a.id;
        });
        setList(sorted);
        break;
      case 2:
        sorted = [...list].sort((a, b) => {
          return a.id - b.id;
        });
        setList(sorted);
        break;
      case 3:
        sorted = [...list].sort((a, b) => {
          return a.title > b.title ? 1 : -1;
        });
        setList(sorted);
        break;
      case 4:
        sorted = [...list].sort((a, b) => {
          return a.title > b.title ? -1 : 1;
        });
        setList(sorted);
        break;
      case 5:
        sorted = [...list].sort((a, b) => {
          return b.is_active - a.is_active;
        });
        setList(sorted);
        break;
      default:
        break;
    }
  };

  useEffect(() => {
    if (list && activeDropdown == 5) {
      handleSort();
    }
  }, [list]);

  useEffect(() => {
    if (list) {
      handleSort();
    }
  }, [activeDropdown]);

  return (
    <div>
      <HeaderListDetail
        activeDropdown={activeDropdown}
        isOpenDropdown={isOpenDropdown}
        setActiveDropdown={setActiveDropdown}
        setIsOpenDropdown={setIsOpenDropdown}
        title={detail?.title}
        id={detail?.id}
      />
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          marginTop: '12px',
        }}
      >
        {list?.length === 0 ? (
          <img data-cy="todo-empty-state" src={emptyImage}></img>
        ) : null}
        <div style={{ width: '100%' }}>
          {list?.map((item: any) => (
            <CardActivity
              setDeleteTitle={setDeleteTitle}
              key={item.id}
              refetch={refetch}
              setIsOpenModalEdit={setIsEdit}
              data={item}
              setDelete={setDelete}
              setIsEdit={setIsEdit}
              setEditValue={setEditValue}
              setSelectedIdToDelete={setSelectedIdToDelete}
            />
          ))}
        </div>
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
          deleteTitle={deleteTitle}
          id={selectedIdToDelete}
          isOpen={isDelete}
          setOpenModalDelete={setDelete}
          handleDelete={handleDelete}
        />
      ) : null}
      <ToastInfo isOpen={isOpenInfo} setOpen={setIsOpenInfo} />
    </div>
  );
};

export default Detail;
