import React from 'react';
import Link from 'gatsby-link';
import './inner-navigation.scss';

const InnerNavigation = () => (
  <div className="container innerNavigation__container">
    <ul className="row no-gutters innerNavigation">
      <li className="col-md-2 innerNavigation__nav-item">
        <Link className="innerNavigation__link" to="/home">
          <div className="hover-div">
            <p>vdjjbjkvjk</p>
          </div>
          <h5>אודות</h5>
          <span className="sr-only">(current)</span>
        </Link>
      </li>
      <li className="col-md-2 innerNavigation__nav-item">
        <Link className="innerNavigation__link" to="/home">
          <h5>חזון וייעדים</h5>
          <span className="sr-only">(current)</span>
        </Link>
      </li>

      <li className="col-md-2 innerNavigation__nav-item">
        <Link className="innerNavigation__link" to="/home">
          <h5>תפקידי רח”ל</h5>
          <span className="sr-only">(current)</span>
        </Link>
      </li>

      <li className="col-md-2 innerNavigation__nav-item">
        <Link className="innerNavigation__link" to="/home">
          <h5>פעילויות מרכזיות</h5>
          <span className="sr-only">(current)</span>
        </Link>
      </li>

      <li className="col-md-2 innerNavigation__nav-item">
        <Link className="innerNavigation__link" to="/home">
          <h5>בעלי תפקידים</h5>
          <span className="sr-only">(current)</span>
        </Link>
      </li>
    </ul>
  </div>
);

export default InnerNavigation;
