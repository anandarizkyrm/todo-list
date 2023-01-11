import './Button.css';

import React from 'react';

// type BtnProps = {
//   icon?: React.ReactNode;
//   text: string;
//   textColor?: string;
//   color: string;
//   type?: 'submit' | 'reset';
//   rest: any;
//   // eslint-disable-next-line @typescript-eslint/ban-types
//   handleClick?: React.MouseEventHandler<HTMLButtonElement>;
// };

const Button = (props: any) => {
  const { icon, text, color, handleClick, type, textColor, ...rest } = props;
  return (
    <button
      {...rest}
      type={type}
      onClick={handleClick}
      style={{ background: color, color: textColor }}
      className="button"
    >
      {icon} {text}
    </button>
  );
};

export default Button;
