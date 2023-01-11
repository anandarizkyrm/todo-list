import './HeaderListDetail.css';

import React, { useEffect, useRef, useState } from 'react';
import { Toaster } from 'react-hot-toast';
import { Link } from 'react-router-dom';

import Backicon from '../../../assets/icon-back.svg';
import Editicon from '../../../assets/icon-edit-h.svg';
import Plusicon from '../../../assets/icon-plus.svg';
import { useUpdateTitleDetail } from '../../../hooks/useHandleUpdate';
import Button from '../../atoms/Button/Button';
import DropdownSort from '../../atoms/DropdownSort/DropdownSort';
import PopupSubmitForm from '../../organisms/PopupSubmitForm/PopupSubmitForm';

type Props = {
  id: number;
  title: string;
  activeDropdown: number;
  setActiveDropdown: React.Dispatch<React.SetStateAction<number>>;
  isOpenDropdown: boolean;
  setIsOpenDropdown: React.Dispatch<React.SetStateAction<boolean>>;
};

const HeaderListDetail = ({
  id,
  title: detailTitle,
  activeDropdown,
  setActiveDropdown,
  isOpenDropdown,
  setIsOpenDropdown,
}: Props) => {
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
          <Link data-cy="todo-back-button" to="/">
            <img src={Backicon}></img>
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
            <h1 data-cy="todo-title" style={{ margin: 0, padding: 0 }} className="title">
              {title}
            </h1>
          )}
          <div data-cy="todo-title-edit-button" onClick={handleEdit}>
            <img src={Editicon}></img>
          </div>
        </div>
        <div style={{ display: 'flex', gap: '24px' }}>
          <DropdownSort
            active={activeDropdown}
            setIsActive={setActiveDropdown}
            isOpen={isOpenDropdown}
            setIsOpen={setIsOpenDropdown}
          />
          <div onClick={() => setIsOpenModalCreate(true)}>
            <Button icon={<img src={Plusicon}></img>} text={'Tambah'} color="#16ABF8" />
          </div>
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
