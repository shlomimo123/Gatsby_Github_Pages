import React from 'react';
import Link from 'gatsby-link';
import MenuComponent from '../Menu/menu';
import './header.scss';

const HeaderComponent = () => (
  <header>
    <div className="HeaderComponent">
      <div>
        <h1>
          <Link to="/">Gatsby </Link>
        </h1>
        <MenuComponent />
      </div>
    </div>
  </header>
);

export default HeaderComponent;
