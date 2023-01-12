import './DropdownSort.css';

import React from 'react';

import iconCheck from '../../../assets/icon-check.svg';
import iconSort from '../../../assets/icon-sort.svg';
import iconSortAsc from '../../../assets/icon-sort-a-alpha.svg';
import iconSortDesc from '../../../assets/icon-sort-d-alpha.svg';
import iconSortNewest from '../../../assets/icon-sort-newest.svg';
import iconSortOldest from '../../../assets/icon-sort-oldest.svg';
import iconSortunfinished from '../../../assets/icon-sort-unfinished.svg';

const arrayOptions = [
  {
    key: 1,
    val: 'Terbaru',
    icon: iconSortNewest,
  },
  {
    key: 2,
    val: 'Terlama',
    icon: iconSortOldest,
  },
  {
    key: 3,
    val: 'A-Z',
    icon: iconSortAsc,
  },
  {
    key: 4,
    val: 'Z-A',
    icon: iconSortDesc,
  },
  {
    key: 5,
    val: 'Belum Selesai',
    icon: iconSortunfinished,
  },
];

const DropdownSort = ({
  isOpen,
  setIsOpen,
  active,
  setIsActive,
}: {
  isOpen: boolean;
  setIsOpen: any;
  active: number;
  setIsActive: any;
}) => {
  const handleClickOptions = (key: number) => {
    setIsActive(key);
    // handleSort();
    setIsOpen(false);
  };
  return (
    <div>
      <button
        data-cy="todo-sort-button"
        onClick={() => setIsOpen(!isOpen)}
        className="btn-sort"
      >
        <img src={iconSort}></img>
      </button>
      <div
        data-cy="sort-parent"
        className={` ${isOpen ? 'active-dropdown' : 'hidden-dropdown'}`}
      >
        {arrayOptions.map((item) => (
          <div
            onClick={() => handleClickOptions(item.key)}
            className="sort-option"
            key={item.key}
            data-cy="sort-selection"
          >
            <div className="sort-option-content">
              <img data-cy="sort-selection-icon" src={item.icon} alt="icons"></img>{' '}
              <p data-cy="sort-selection-title">{item.val}</p>
              {active === item.key ? <img src={iconCheck}></img> : null}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DropdownSort;
