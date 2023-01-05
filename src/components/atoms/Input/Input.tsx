import React from 'react';
import './Input.css';
type Props = {
  type: string;
  label: string;
  placeholder: string;
};

const Input = ({ type, label, placeholder, ...rest }: any) => {
  return (
    <div>
      <label className="input-label" htmlFor="input">
        {label}
      </label>
      <input
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
