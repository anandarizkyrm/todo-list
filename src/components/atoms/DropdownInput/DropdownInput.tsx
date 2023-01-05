import React from 'react';

type Props = {
  label: string;
  list: any[];
  defaultVal?: string;
};

const DropdownInput = ({ label, list, defaultVal, ...rest }: any) => {
  return (
    <div>
      <label htmlFor="select">{label}</label>
      <select {...rest} name="select">
        <option>Pilih Prioritas</option>
        {list?.map((item: any) => (
          <option selected={item?.toLowerCase() == defaultVal?.toLowerCase()}>
            {item}
          </option>
        ))}
      </select>
    </div>
  );
};

export default DropdownInput;
