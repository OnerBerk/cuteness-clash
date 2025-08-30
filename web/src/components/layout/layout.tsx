import React from 'react';
import {Outlet} from 'react-router-dom';
import './layout.scss';
import LayoutHeader from './layout.header';

const Layout: React.FC = () => {
  return (
    <div className='layout-main'>
      <LayoutHeader />
      <Outlet />
    </div>
  );
};

export default Layout;
