import * as React from 'react';
import Github from '../../custom-icons/icons/github';
import Linkedin from '../../custom-icons/icons/linkedin';

function Footer() {
  return (
    <footer className="footer">
      <div className="social-container">
        <span className="icon">
          <Linkedin />
        </span>
        <span className="icon">
          <Github />
        </span>
        <span className="icon" />
        <span className="icon" />
        <span className="icon" />
      </div>
      <div className="topic-container">
        <div className="topic-item">as</div>
        <div className="topic-item">as</div>
        <div className="topic-item">as</div>
        <div className="topic-item">as</div>
      </div>
      <div className="signature-container">Hoang My &copy; 2021</div>
    </footer>
  );
}

export default Footer;
