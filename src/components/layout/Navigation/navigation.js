import React from 'react';
import Link from 'gatsby-link';
import './navigation.scss';


const Navigation = () => (
  <nav className="navbar navbar-expand-lg">
    <button
      className="navbar-toggler"
      type="button"
      data-toggle="collapse"
      data-target="#navbarNav"
      aria-controls="navbarNav"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span className="navbar-toggler-icon" />
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="row navbar-nav">
        <li className="col-md-auto nav-item active">
          <Link className="nav-link" to="/home">
            דף<span className="sr-only">(current)</span>
          </Link>
        </li>
        <li className="col-md-auto nav-item">
          <Link className="nav-link" to="/about">
            אודות רח"ל<span className="sr-only">(current)</span>
          </Link>
        </li>
        <li className="col-md-auto nav-item">
          <Link className="nav-link" to="/three-col-portfolio">
            מאגר המידע לחירום<span className="sr-only">(current)</span>
          </Link>
        </li>
        <li className="col-md-auto nav-item">
          <Link className="nav-link" to="/three-col-portfolio">
            <p>המרכז הלאומי</p>
            <p>לאיתנות ישראלית</p>

            <span className="sr-only">(current)</span>
          </Link>
        </li>
        <li className="col-md-auto nav-item">
          <Link className="nav-link" to="/three-col-portfolio">
            <p>ועדת ההיגוי הבין-משרדית</p>
            <p>להיערכות לרעידות אדמה</p>
            <span className="sr-only">(current)</span>
          </Link>
        </li>
        <li className="col-md-auto nav-item">
          <Link className="nav-link" to="/three-col-portfolio">
            שאלות ותשובות
            <span className="sr-only">(current)</span>
          </Link>
        </li>
      </ul>
    </div>
  </nav>
);

export default Navigation;
