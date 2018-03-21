import React from 'react';
import Link from 'gatsby-link';
import Navigation from '../Navigation/navigation';
import './header.scss';
import logo from '../../../images/rahel-logo.png';

const Header = () => (
  <header>
    <div className="container">
      <div className="row no-gutters">
        <div className="logo-col">
          <div className="logo">
            <img src={logo} alt="" className="img-fluid" />
          </div>
        </div>
        <div className="nav-col">
     
              <Navigation />
         
        </div>
      </div>
    </div>
  </header>
);

export default Header;
