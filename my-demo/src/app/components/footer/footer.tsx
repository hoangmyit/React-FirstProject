import AddressIcon from 'app/custom-icons/icons/address';
import MailV2Icon from 'app/custom-icons/icons/mail-2';
import PhoneIcon from 'app/custom-icons/icons/phone';
import * as React from 'react';
import Github from '../../custom-icons/icons/github';
import Linkedin from '../../custom-icons/icons/linkedin';
import Mail from '../../custom-icons/icons/mail';
import Skype from '../../custom-icons/icons/skype';
import './footer.scss';

function Footer() {
  const iconSize = 36;
  return (
    <footer className="footer-container">
      <div className="footer-content">
        <div className="footer-content-item information-container">
          <div className="footer-item">
            <div className="information-icon">
              <AddressIcon size={iconSize} />
            </div>
            <div className="information-content">Phu Nhuan Ward, Ho Chi Minh City, Vietnam</div>
          </div>
          <div className="footer-item">
            <div className="information-icon">
              <PhoneIcon size={iconSize} />
            </div>
            <div className="information-content">+84 123 45678</div>
          </div>
          <div className="footer-item">
            <div className="information-icon">
              <MailV2Icon size={iconSize} />
            </div>
            <div className="information-content">hoangmyit@outllok.com</div>
          </div>
        </div>
        <div className="footer-content-item contact-container">
          <div className="footer-item">About Myself</div>
          <div className="footer-item quote-item">
            &ldquo;Always code as if the guy who ends up maintaining your code will be a violent psychopath who knows
            where you live.&rdquo;
          </div>
          <div className="footer-item icon-container">
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
        </div>
      </div>
      <div className="signature-container">Hoang My &copy; 2021</div>
    </footer>
  );
}

export default Footer;
