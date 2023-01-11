import React from 'react';
import TopNavbar from '../../organisms/TopNavbar/TopNavbar';
import './Layout.css';

type Props = {
  children: React.ReactNode;
};

const Layout = (props: Props) => {
  const { children } = props;
  return (
    <>
      <TopNavbar title="TO DO LIST APP" />
      <div className="layout-container">{children}</div>
    </>
  );
};

export default Layout;
