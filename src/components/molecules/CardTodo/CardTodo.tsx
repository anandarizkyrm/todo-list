import './CardTodo.css';
import 'dayjs/locale/id';

import dayjs from 'dayjs';
import { useNavigate } from 'react-router-dom';
import deleteIcon from '../../../assets/icon-delete.svg';

type Props = {
  title: string;
  date: string;
  id: number;
  setDeleteTitle: React.Dispatch<React.SetStateAction<any>>;
  setDeleteId: React.Dispatch<React.SetStateAction<number>>;
  setOpenModalDelete: React.Dispatch<React.SetStateAction<boolean>>;
};

const CardTodo = (props: Props) => {
  const { title, date, id, setDeleteId, setOpenModalDelete, setDeleteTitle } = props;

  const handleButtonDeleteOnClick = () => {
    setOpenModalDelete(true);
    setDeleteId(id);
    setDeleteTitle(title);
  };

  const navigate = useNavigate();
  return (
    <div data-cy="activity-item" className="card-todo">
      <h3 data-cy="activity-item-title" onClick={() => navigate(`/detail/${id}`)}>
        {title}
      </h3>
      <div className="card-bottom">
        <h4 data-cy="activity-item-date" className="card-todo-date">
          {dayjs(date).locale('id').format('DD MMMM YYYY')}
        </h4>
        <div data-cy="activity-item-delete-button" onClick={handleButtonDeleteOnClick}>
          <img alt="delete-icon" src={deleteIcon}></img>
        </div>
      </div>
    </div>
  );
};

export default CardTodo;
