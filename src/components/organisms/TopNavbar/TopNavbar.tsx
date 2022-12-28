import './TopNavbar.css';

import React from 'react';
type TopNavbarProps = {
  title: string;
};

const TopNavbar = (props: TopNavbarProps) => {
  const { title } = props;

  return (
    <div className="topnavbar">
      <h2 className="topnavbar-title">{title}</h2>
    </div>
  );
};

export default TopNavbar;
