import './ModalConfirm.css';

import React, { useEffect } from 'react';
import Button from '../../atoms/Button/Button';

type Props = {
  id: number;
  isOpen: boolean;
  setOpenModalDelete: React.Dispatch<React.SetStateAction<boolean>>;
  handleDelete?: any;
};

const ModalConfirm = (props: Props) => {
  const { id, isOpen, setOpenModalDelete, handleDelete } = props;
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
    <div className={`modal-container`}>
      <div className="popup-modal">
        <h2 style={{ marginTop: '32px', color: 'gray' }}>
          Apa Anda Yakin Ingin Menghapus?{' '}
        </h2>
        <div className="modal-confirm-button">
          <Button
            handleClick={() => setOpenModalDelete(false)}
            text="Cancel"
            color="gray"
          />
          <Button handleClick={() => handleDeleteOnClick()} text="Delete" color="red" />
        </div>
      </div>
    </div>
  );
};

export default ModalConfirm;
