import './ToastInfo.css';

import iconInfo from '../../../assets/icon-info.svg';
type Props = {
  setOpen: any;
  isOpen: boolean;
};

const ToastInfo = (props: Props) => {
  const { isOpen, setOpen } = props;

  if (!isOpen) return null;
  return (
    <>
      <div
        onClick={() => setOpen(false)}
        data-cy="modal-add"
        className="modal-container"
      ></div>
      <div data-cy="modal-information" className="popup-info">
        <img data-cy="modal-information-icon" src={iconInfo}></img>
        <p data-cy="modal-information-title">Activity berhasil dihapus</p>
      </div>
    </>
  );
};

export default ToastInfo;
