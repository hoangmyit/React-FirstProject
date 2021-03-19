import * as React from 'react';
import Github from '../../custom-icons/icons/github';
import Linkedin from '../../custom-icons/icons/linkedin';
import Skype from '../../custom-icons/icons/skype';

function Footer() {
  return (
    <footer className="footer">
      <div className="social-container">
        <span className="footer-icon">
          <Github size={50} />
        </span>
        <span className="footer-icon">
          <Link href="https://www.linkedin.com/in/hoang-my/" target="_blank">
            <Linkedin size={50} />
          </Link >
        </span>
        <span className="footer-icon">
          <Skype size={50} />
        </span>
        <span className="footer-icon" />
        <span className="footer-icon" />
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
