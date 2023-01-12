import './PopupSubmitForm.css';

import iconClose from '../.../../../../assets/icon-close.svg';
import FormCreateTodo from '../../molecules/FormCreateEditTodo/FormCreateTodo';
import FormEditTodo from '../../molecules/FormCreateEditTodo/FormEditTodo';

type Props = {
  popupType: 'edit' | 'add';
  id?: number;
  setOpenModalDelete: any;
  isOpen: boolean;
  data?: {
    id: string | number;
    title: string;
    is_active: number;
    priority: string;
  };
};

const PopupSubmitForm = (props: Props) => {
  const { id, isOpen, setOpenModalDelete, popupType, data } = props;

  if (!isOpen) return null;
  return (
    <>
      <div
        onClick={() => setOpenModalDelete(false)}
        data-cy="modal-add"
        className="modal-container"
      ></div>
      <div className="popup-modal">
        <div className="header-modal-add-edit">
          <h3 data-cy="modal-add-title">Tambah List Item</h3>
          <img
            data-cy="modal-add-close-button"
            onClick={() => setOpenModalDelete(false)}
            src={iconClose}
          ></img>
        </div>
        {popupType === 'add' ? (
          id ? (
            <FormCreateTodo id={id.toString()} setIsOpen={setOpenModalDelete} />
          ) : null
        ) : id ? (
          <FormEditTodo data={data} id={id.toString()} setIsOpen={setOpenModalDelete} />
        ) : null}
      </div>
    </>
  );
};

export default PopupSubmitForm;
