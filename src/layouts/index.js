import React from 'react';
import PropTypes from 'prop-types';
import Link from 'gatsby-link';
import Helmet from 'react-helmet';

// Stylesheets
import '../scss/core-rtl.scss';

// Components
import Header from '../components/layout/Header/header';
// import Footer from '../components/layout/Footer/footer';

export default ({ children }) => (
  <div>
    <Header />
    <div className="">{children()}></div>
    {/* <Footer /> */}
  </div>
);
