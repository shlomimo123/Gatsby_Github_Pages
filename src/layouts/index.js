import React from 'react';
import PropTypes from 'prop-types';
import Link from 'gatsby-link';
import Helmet from 'react-helmet';
import HeaderComponent from '../components/layout/Header/header';
import FooterComponent from '../components/layout/Footer/footer';
import '../../packages/bootstrap4/bootstrap.scss';

import './main.css';

const TemplateWrapper = ({ children }) => (
  <div>
    <Helmet
      title="Gatsby Default Starter"
      meta={[
        { name: 'description', content: 'Sample' },
        { name: 'keywords', content: 'sample, something' },
      ]}
    />
    <HeaderComponent />
    <div className="container">{children()}</div>
    <FooterComponent />
  </div>
);

TemplateWrapper.propTypes = {
  children: PropTypes.func,
};

export default TemplateWrapper;
