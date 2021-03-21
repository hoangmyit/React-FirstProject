import React, { useState } from 'react';
import LogoIcon from 'app/custom-icons/icons/logo-1';
import classNames from 'classnames';
import './nav-bar.scss';

const Navbar = () => {
  const [toggle, setToggle] = useState<boolean>(false);
  return (
    <section className="hero is-info is-medium is-bold">
      <div className="hero-head">
        <nav className="navbar">
          <div className="container">
            <div className="navbar-brand">
              <a className="navbar-item" href="../">
                <LogoIcon backgroundColor="#28a7e9" />
              </a>
              <span
                className={classNames('navbar-burger', 'burger', { 'is-active': toggle })}
                onClick={() => setToggle(!toggle)}
                aria-hidden="true"
              >
                <span />
                <span />
                <span />
              </span>
            </div>
            <div className={classNames('navbar-menu', { 'is-active': toggle })}>
              <div className="navbar-end">
                <div className="tabs is-right">
                  <ul>
                    <li className="is-active">
                      <a href="#section">Home</a>
                    </li>
                    <li>
                      <a href="#section">Examples</a>
                    </li>
                    <li>
                      <a href="#section">Features</a>
                    </li>
                    <li>
                      <a href="#section">Team</a>
                    </li>
                    <li>
                      <a href="#section">Help</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </nav>
      </div>
    </section>
  );
};

export default Navbar;
