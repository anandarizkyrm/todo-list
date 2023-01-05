import { useCreateTodo } from '../../../hooks/useCreateActivity';
import Button from '../../atoms/Button/Button';
import DropdownInput from '../../atoms/DropdownInput/DropdownInput';
import Input from '../../atoms/Input/Input';
import './FormCreateEditTodo.css';

type Props = {
  setIsOpen: any;
  id: string;
};

const FormCreateTodo = (props: Props) => {
  const { setIsOpen, id } = props;
  const { setTitle, title, setPriority, onSubmit } = useCreateTodo();

  const handleOnSubmit = (e: any) => {
    onSubmit(id, e);
    setIsOpen(false);
  };
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

export default FormCreateTodo;
