import './TopNavbar.css';

import React from 'react';
type TopNavbarProps = {
  title: string;
};

const TopNavbar = (props: TopNavbarProps) => {
  const { title } = props;

  return (
    <div data-cy="header-background" className="topnavbar">
      <h2 data-cy="header-title" className="topnavbar-title">
        {title}
      </h2>
    </div>
  );
};

export default TopNavbar;
