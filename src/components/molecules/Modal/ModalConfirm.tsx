import './ModalConfirm.css';

import React, { useEffect } from 'react';
import Button from '../../atoms/Button/Button';
import iconAlert from '../../../assets/icon-alert.svg';
type Props = {
  id: number;
  isOpen: boolean;
  deleteTitle: string;
  setOpenModalDelete: React.Dispatch<React.SetStateAction<boolean>>;
  handleDelete?: any;
};

const ModalConfirm = (props: Props) => {
  const { id, isOpen, setOpenModalDelete, handleDelete, deleteTitle } = props;
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      return;
    }
    document.body.style.overflow = 'scroll';
    return;
  }, [isOpen]);

  const handleDeleteOnClick = () => {
    handleDelete(id);
    setOpenModalDelete(false);
  };

  if (!isOpen) return null;
  return (
    <div data-cy="modal-delete" className={`modal-container`}>
      <div className="popup-modal">
        <div data-cy="todo-modal-delete" style={{ textAlign: 'center' }}>
          <img data-cy="modal-delete-icon" src={iconAlert}></img>
          <p data-cy="modal-delete-icon" style={{ marginTop: '32px', color: 'gray' }}>
            Apa Anda Yakin Ingin Menghapus?{' '}
            <span style={{ fontWeight: 'bold' }}>&quot;{deleteTitle}&quot;</span>
          </p>
        </div>
        <div className="modal-confirm-button">
          <Button
            data-cy="modal-delete-cancel-button"
            handleClick={() => setOpenModalDelete(false)}
            text="Cancel"
            color=""
            textColor="#4A4A4A"
          />
          <Button
            data-cy="modal-delete-confirm-button"
            handleClick={() => handleDeleteOnClick()}
            text="Delete"
            color="#ED4C5C"
          />
        </div>
      </div>
    </div>
  );
};

export default ModalConfirm;
