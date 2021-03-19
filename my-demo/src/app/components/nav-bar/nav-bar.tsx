import * as React from 'react';
import Alert from '../../custom-icons/icons/alert';

function NavBar() {
  return (
    <div className="navbar">
      <div className="container">
        <div className="navbar-brand">
          <a href="#section" className="navbar-item">
            <Alert />
          </a>
        </div>
        <div id="navbarMenu" className="navbar-menu">
          <div className="navbar-end">
            <a href="#section" className="navbar-item is-active">
              Home
            </a>
            <a href="#section" className="navbar-item">
              Example
            </a>
            <a href="#section" className="navbar-item">
              Features
            </a>
            <a href="#section" className="navbar-item">
              Archies
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NavBar;
