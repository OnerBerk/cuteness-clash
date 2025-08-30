import React from 'react';
import {Outlet} from 'react-router-dom';
import './layout.scss';

const Layout: React.FC = () => {
  return (
    <div className='layout-main'>
      <Outlet />
    </div>
  );
};

export default Layout;
