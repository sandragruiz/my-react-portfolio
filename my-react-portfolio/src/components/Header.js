import React from 'react';
import Navigation from './Navigation';

const Header = () => {
  return (
    <header style={{ position: 'fixed', top: 0, left: 0, right: 0, zIndex: 999 }}>
      <h1>My Portfolio</h1>
      <Navigation />
    </header>
  );
};

export default Header;
