import React, { useEffect, useRef, useState } from 'react';
import { Toaster } from 'react-hot-toast';
import { FaChevronCircleLeft, FaPencilAlt, FaPlus } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { useUpdateTitleDetail } from '../../../hooks/useHandleUpdate';
import Button from '../../atoms/Button/Button';
import PopupSubmitForm from '../../organisms/PopupSubmitForm/PopupSubmitForm';
import './HeaderListDetail.css';
type Props = {
  id: number;
  title: string;
};

const HeaderListDetail = ({ id, title: detailTitle }: Props) => {
  const [isEditTitle, setIsEditTitle] = useState(false);
  const [title, setTitle] = useState(detailTitle);
  const [isOpenModalCreate, setIsOpenModalCreate] = useState(false);

  const { onSubmit } = useUpdateTitleDetail();
  const inputTitle = useRef(null);
  const handleOnBlur = () => {
    setIsEditTitle(false);
    onSubmit(id, title);
  };

  const handleEdit = () => {
    setIsEditTitle(!isEditTitle);
    setTitle(detailTitle);
  };

  const handleChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value);
  };

  useEffect(() => {
    setTitle(detailTitle);
  }, [detailTitle]);

  return (
    <div>
      <Toaster />
      <div className="header-wrapper">
        <div className="header-content">
          <Link to="/">
            <FaChevronCircleLeft style={{ fontSize: '32px', marginRight: '12px' }} />
          </Link>
          {isEditTitle ? (
            <input
              className="input-title"
              autoFocus
              ref={inputTitle}
              onChange={(e) => handleChangeInput(e)}
              onBlur={handleOnBlur}
              type={'text'}
              value={title}
            ></input>
          ) : (
            <h1 className="title">{title}</h1>
          )}
          <div onClick={handleEdit}>
            <FaPencilAlt style={{ color: 'gray', fontSize: '16px' }} />
          </div>
        </div>
        <div onClick={() => setIsOpenModalCreate(true)}>
          <Button icon={<FaPlus />} text={'Tambah'} color="#0dcaf0" />
        </div>
      </div>

      <PopupSubmitForm
        popupType="add"
        id={id}
        isOpen={isOpenModalCreate}
        setOpenModalDelete={setIsOpenModalCreate}
      />
    </div>
  );
};

export default HeaderListDetail;
