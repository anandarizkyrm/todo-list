import './DropdownInput.css';

import React from 'react';

import red from './red.svg';

// type Props = {
//   label: string;
//   list: any[];
//   defaultVal?: string;
// };

const DropdownInput = ({ label, list, defaultVal, ...rest }: any) => {
  return (
    <div className="dropdown-container">
      <label htmlFor="select">{label}</label>

      <select {...rest} name="select" className="priority-select">
        <option>Pilih priority</option>
        {list?.map((item: any) => (
          <option key={item} selected={item?.toLowerCase() == defaultVal?.toLowerCase()}>
            <img src={red}></img> {item}
          </option>
        ))}
      </select>
    </div>
  );
};

export default DropdownInput;
