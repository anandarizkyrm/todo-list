import './FormCreateEditTodo.css';

import { useEffect, useState } from 'react';

import { useHandleEditTodo } from '../../../hooks/useHandleUpdate';
import Button from '../../atoms/Button/Button';
import Input from '../../atoms/Input/Input';
import PrioritySelect from '../../atoms/PrioritySelect/PrioritySelect';

type Props = {
  setIsOpen: any;
  id: string;
  data?: {
    id: string | number;
    title: string;
    is_active: number;
    priority: string;
  };
};

const FormEditTodo = (props: Props) => {
  const { setIsOpen, id, data } = props;
  const { setTitle, title, priority, setPriority, onSubmit } = useHandleEditTodo();
  const [isOpenDropdown, setIsOpenDropdown] = useState(false);

  const handleOnSubmit = (e: any) => {
    if (data) {
      onSubmit(data?.id, e);
    }
    setIsOpen(false);
  };

  useEffect(() => {
    if (data) {
      setTitle(data?.title);
      setPriority(data?.priority);
    }
  }, [id]);

  return (
    <form onSubmit={(e: any) => handleOnSubmit(e)} className="form-container">
      <div style={{ marginTop: '-20px' }}>
        <Input
          type="text"
          className="input-add-todo"
          label="Nama List Item"
          value={title}
          placeholder="Tambahkan Nama Activity"
          onChange={(e: any) => setTitle(e.target.value)}
        />
        <div style={{ marginTop: '28px' }}>
          <label data-cy="modal-add-priority-title">PRIORITY</label>
          <PrioritySelect
            isOpen={isOpenDropdown}
            setIsOpen={setIsOpenDropdown}
            active={priority}
            setIsActive={setPriority}
          />
        </div>
      </div>

      <div className="bottom-modal">
        <Button
          data-cy="modal-add-save-button"
          type="submit"
          text="Simpan"
          color="#16ABF8"
        />
      </div>
    </form>
  );
};

export default FormEditTodo;
