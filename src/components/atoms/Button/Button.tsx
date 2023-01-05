import './Button.css';

import React from 'react';

type BtnProps = {
  icon?: React.ReactNode;
  text: string;
  color: string;
  type?: 'submit' | 'reset';
  // eslint-disable-next-line @typescript-eslint/ban-types
  handleClick?: React.MouseEventHandler<HTMLButtonElement>;
};

const Button = (props: BtnProps) => {
  const { icon, text, color, handleClick, type } = props;
  return (
    <button
      type={type}
      onClick={handleClick}
      style={{ background: color }}
      className="button"
    >
      {icon} {text}
    </button>
  );
};

export default Button;
