import React from 'react';
import './Input.css';

const Input = ({ type, label, placeholder, ...rest }: any) => {
  return (
    <div>
      <label data-cy="modal-add-name-title" className="input-label" htmlFor="input">
        {label}
      </label>
      <input
        data-cy="modal-add-name-input"
        {...rest}
        // className="input"
        name="input"
        type={type}
        placeholder={placeholder}
      ></input>
    </div>
  );
};

export default Input;
