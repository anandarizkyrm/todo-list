import { useEffect, useState } from 'react';
import { FaPencilAlt, FaTrash } from 'react-icons/fa';
import { useHandleUpdateStatusTodo } from '../../../hooks/useHandleUpdate';
import './CardActivity.css';
type Props = {
  setIsEdit: any;
  setDelete: any;
  data: any;
  setIsOpenModalEdit: any;
  setEditValue: any;
  setSelectedIdToDelete: any;
};

const CardActivity = ({
  setIsEdit,
  setDelete,
  data,
  setEditValue,
  setSelectedIdToDelete,
}: Props) => {
  const [checkbox, setCheckBox] = useState<boolean>();
  const { setIsActive, onSubmit: onUpdateTodoStatus } = useHandleUpdateStatusTodo();
  const handleEditIcon = () => {
    setIsEdit(true);
    setEditValue({
      id: data?.id,
      priority: data?.priority,
      is_active: data?.is_active,
      title: data?.title,
    });
  };

  const handleCheckBoxonChange = (e: any) => {
    setCheckBox(e.target.checked);
    setIsActive(e.target.checked ? 0 : 1);
    if (data) {
      onUpdateTodoStatus(data?.id);
    }
  };

  useEffect(() => {
    setCheckBox(data?.is_active === 1 ? false : true);
    setIsActive(data?.is_active === 1 ? false : true);
  }, [data]);

  const handleDelete = () => {
    setSelectedIdToDelete(data?.id);
    setDelete(true);
  };

  return (
    <div className="card-activity-container">
      <div className="card-activity-content">
        <input
          onChange={(e) => handleCheckBoxonChange(e)}
          checked={checkbox ? checkbox : false}
          type={'checkbox'}
        ></input>
        {data?.priority}
        {!checkbox ? (
          <h2>{data.title}</h2>
        ) : (
          <h2 className="is-checked-font">{data.title}</h2>
        )}
        <div onClick={handleEditIcon}>
          <FaPencilAlt style={{ color: 'gray', fontSize: '12px' }} />
        </div>
      </div>
      <div onClick={handleDelete}>
        <FaTrash style={{ color: 'red' }} />
      </div>
    </div>
  );
};

export default CardActivity;
