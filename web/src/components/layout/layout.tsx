import React from 'react';
import { Outlet } from 'react-router-dom';

import LayoutHeader from './layout.header';
import LayoutFooter from './layout.footer';

import './layout.scss';

const Layout: React.FC = () => {
  return (
    <div className="layout-main">
      <LayoutHeader />
      <Outlet />
      <LayoutFooter />
    </div>
  );
};

export default Layout;
