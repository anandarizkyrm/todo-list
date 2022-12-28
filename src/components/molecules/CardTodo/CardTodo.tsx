import './CardTodo.css';

type Props = {
  title: string;
  date: string;
  id: number;
  setDeleteId: React.Dispatch<React.SetStateAction<number>> | undefined;
  setOpenModalDelete: React.Dispatch<React.SetStateAction<boolean>>;
};

const CardTodo = (props: Props) => {
  const { title, date, id, setDeleteId, setOpenModalDelete } = props;

  const handleButtonDeleteOnClick = () => {
    setOpenModalDelete(true);
    setDeleteId(id);
  };

  return (
    <div className="card-todo">
      <h3>{title}</h3>
      <div className="card-bottom">
        <h3 className="card-todo-date">{date?.slice(0, 10)}</h3>
        <div onClick={handleButtonDeleteOnClick}>
          <img
            alt="delete-icon"
            src="https://ivan-todo-devrank.netlify.app/static/media/icon-delete.1e080ddb.svg"
          ></img>
        </div>
      </div>
    </div>
  );
};

export default CardTodo;
