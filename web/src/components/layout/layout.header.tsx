import React from 'react';
import logo from '@/assets/cute-cat.png';

const LayoutHeader: React.FC = () => {
  return (
    <div className='layout-main-header'>
      <div className='layout-main-header-logo'>
        <img aria-label='logo' alt='logo' src={logo} />
        <div className='layout-main-header-title'>CATMASH</div>
      </div>
    </div>
  );
};

export default LayoutHeader;
