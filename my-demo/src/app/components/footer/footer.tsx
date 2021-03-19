import * as React from 'react';
import Github from '../../custom-icons/icons/github';
import Linkedin from '../../custom-icons/icons/linkedin';
import Mail from '../../custom-icons/icons/mail';
import Skype from '../../custom-icons/icons/skype';
import './footer.scss';

function Footer() {
  return (
    <footer className="footer">
      <div className="icon-container">
        <span className="footer-icon">
          <a href="mailto:hoangmyit@outlook.com">
            <Mail size={36} />
          </a>
        </span>
        <span className="footer-icon">
          <a href="skype:live:c0243f097c9ba312?chat">
            <Skype size={36} />
          </a>
        </span>
        <span className="footer-icon">
          <a href="https://github.com/hoangmyit" target="_blank" rel="noreferrer">
            <Github size={36} />
          </a>
        </span>
        <span className="footer-icon">
          <a href="https://www.linkedin.com/in/hoang-my/" target="_blank" rel="noreferrer">
            <Linkedin size={36} />
          </a>
        </span>
      </div>
      <div className="signature-container">Hoang My &copy; 2021</div>
    </footer>
  );
}

export default Footer;
