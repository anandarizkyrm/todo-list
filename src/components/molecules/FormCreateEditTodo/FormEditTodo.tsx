import { useEffect } from 'react';
import { useHandleEditTodo } from '../../../hooks/useHandleUpdate';
import Button from '../../atoms/Button/Button';
import DropdownInput from '../../atoms/DropdownInput/DropdownInput';
import Input from '../../atoms/Input/Input';
import './FormCreateEditTodo.css';

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
      <div className="">
        <Input
          type="text"
          className="input-add-todo"
          label="Nama List Item"
          value={title}
          placeholder="Tambahkan Nama Activity"
          onChange={(e: any) => setTitle(e.target.value)}
        />
        <DropdownInput
          list={['Very-High', 'High', 'Normal', 'Low', 'Very-Low']}
          label="Priority"
          defaultVal={priority}
          onChange={(e: any) => setPriority(e.target.value)}
        />
      </div>

      <div style={{ display: 'flex', justifyContent: 'space-around' }}>
        <div onClick={() => setIsOpen(false)}>
          <Button text="Keluar" color="red" />
        </div>
        <Button type="submit" text="Simpan" color="cyan" />
      </div>
    </form>
  );
};

export default FormEditTodo;
