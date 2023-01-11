import './FormCreateEditTodo.css';

import { useState } from 'react';

import { useCreateTodo } from '../../../hooks/useCreateActivity';
import Button from '../../atoms/Button/Button';
import Input from '../../atoms/Input/Input';
import PrioritySelect from '../../atoms/PrioritySelect/PrioritySelect';

type Props = {
  setIsOpen: any;
  id: string;
};

const FormCreateTodo = (props: Props) => {
  const { setIsOpen, id } = props;
  const { setTitle, title, setPriority, onSubmit, priority } = useCreateTodo();
  const [isOpenDropdown, setIsOpenDropdown] = useState(false);

  const handleOnSubmit = (e: any) => {
    onSubmit(id, e);
    setIsOpen(false);
  };
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
          <label>Priority</label>
          <PrioritySelect
            isOpen={isOpenDropdown}
            setIsOpen={setIsOpenDropdown}
            active={priority}
            setIsActive={setPriority}
          />
        </div>
      </div>

      <div className="bottom-modal">
        <Button type="submit" text="Simpan" color="#16ABF8" />
      </div>
    </form>
  );
};

export default FormCreateTodo;
