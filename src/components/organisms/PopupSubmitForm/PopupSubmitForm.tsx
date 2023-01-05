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
    <div className="modal-container">
      <div className="popup-modal">
        {popupType === 'add' ? (
          id ? (
            <FormCreateTodo id={id.toString()} setIsOpen={setOpenModalDelete} />
          ) : null
        ) : id ? (
          <FormEditTodo data={data} id={id.toString()} setIsOpen={setOpenModalDelete} />
        ) : null}
      </div>
    </div>
  );
};

export default PopupSubmitForm;
