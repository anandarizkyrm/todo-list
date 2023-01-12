import './CardActivity.css';

import { useEffect, useState } from 'react';

import deleteIcon from '../../../assets/icon-delete.svg';
import iconPencil from '../../../assets/icon-edit-p.svg';
import { useHandleUpdateStatusTodo } from '../../../hooks/useHandleUpdate';

type Props = {
  setIsEdit: any;
  setDelete: any;
  data: any;
  setDeleteTitle: any;
  setIsOpenModalEdit: any;
  setEditValue: any;
  refetch: any;
  setSelectedIdToDelete: any;
};

const CardActivity = ({
  setIsEdit,
  setDelete,
  data,
  refetch,
  setEditValue,
  setDeleteTitle,
  setSelectedIdToDelete,
}: Props) => {
  const [checkbox, setCheckBox] = useState<boolean>();
  const { setIsActive, onSubmit: onUpdateTodoStatus } =
    useHandleUpdateStatusTodo(refetch);
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
    setDeleteTitle(data?.title);
  };

  const handlePriorityColor = (priority: string) => {
    switch (priority) {
      case 'very-high':
        return '#ED4C5C';
      case 'high':
        return '#F8A541';
      case 'normal':
        return '#00A790';
      case 'low':
        return '#428BC1';
      case 'very-low':
        return '#8942C1';
    }
  };
  return (
    <div className="card-activity-container">
      <div className="card-activity-content">
        <input
          data-cy="todo-item-checkbox"
          onChange={(e) => handleCheckBoxonChange(e)}
          checked={checkbox ? checkbox : false}
          type={'checkbox'}
        ></input>

        <div
          style={{ backgroundColor: handlePriorityColor(data?.priority) }}
          className={`priority-icon`}
        ></div>

        <h2
          data-cy="todo-item-title"
          className={`${!checkbox ? 'title-activity' : 'is-checked-font'}`}
        >
          {data.title}
        </h2>

        <div onClick={handleEditIcon}>
          <img src={iconPencil}></img>
        </div>
      </div>
      <div data-cy="todo-item-delete-button" onClick={handleDelete}>
        <img src={deleteIcon}></img>
      </div>
    </div>
  );
};

export default CardActivity;
