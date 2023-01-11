import './PrioritySelect.css';

import { useEffect, useState } from 'react';

import iconCheck from '../../../assets/icon-check.svg';

const arrayOptions = [
  {
    key: 1,
    val: 'Very High',
    color: '#ED4C5C',
    priority: 'very-high',
  },
  {
    key: 2,
    val: 'High',
    color: '#F8A541',
    priority: 'high',
  },
  {
    key: 3,
    val: 'Medium',
    color: '#00A790',
    priority: 'normal',
  },
  {
    key: 4,
    val: 'Low',
    color: '#428BC1',
    priority: 'low',
  },
  {
    key: 5,
    val: 'Very Low',
    color: '#8942C1',
    priority: 'very-low',
  },
];

const PrioritySelect = ({
  isOpen,
  setIsOpen,
  active,
  setIsActive,
}: {
  isOpen: boolean;
  setIsOpen: any;
  active: any;
  setIsActive: any;
}) => {
  const [selected, setSelected] = useState<any>();
  const handleClickOptions = (item: { val: string; color: string; priority: string }) => {
    setIsActive(item.priority);
    setIsOpen(false);
    setSelected({
      val: item.val,
      color: item.color,
    });
  };

  useEffect(() => {
    if (active) {
      const selected = [...arrayOptions].filter((item) => {
        return item.priority === active;
      });
      setSelected(selected[0]);
    }
  }, [active]);

  return (
    <div>
      <button
        data-cy="modal-add-priority-dropdown"
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className="btn-priority"
      >
        {selected ? (
          <>
            <div
              style={{
                backgroundColor: selected?.color,
                marginRight: '12px',
                marginLeft: '32px',
              }}
              className={`priority-icon`}
            ></div>
            <p data-cy="sort-selection-title" style={{ fontSize: '16px' }}>
              {selected?.val}
            </p>
          </>
        ) : (
          <p
            style={{
              marginRight: '12px',
              marginLeft: '32px',
            }}
          >
            Pilih Priority
          </p>
        )}
      </button>
      <div className={` ${isOpen ? 'active-dropdown' : 'hidden-dropdown'}`}>
        {arrayOptions.map((item) => (
          <div
            onClick={() => handleClickOptions(item)}
            className="priority-option"
            data-cy="modal-add-priority-item"
            key={item.key}
          >
            <div className="sort-option-content">
              <div
                style={{ backgroundColor: item.color }}
                className={`priority-icon`}
              ></div>

              <p data-cy="sort-selection-title">{item.val}</p>
              {active === item.priority ? <img src={iconCheck}></img> : null}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PrioritySelect;
