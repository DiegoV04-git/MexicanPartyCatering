// src/components/Footer.jsx
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faWhatsapp,
} from "@fortawesome/free-brands-svg-icons";
import { faEnvelope, faPhone } from "@fortawesome/free-solid-svg-icons";
import "./Footer.scss";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-top">
        <h2>Let’s Celebrate Together</h2>
        <p>Deliciously authentic Mexican catering for unforgettable moments.</p>
        <div className="footer-socials">
          <a href="https://wa.me/12365129594/" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faWhatsapp} />
          </a>
          <a href="https://www.facebook.com/profile.php?id=61558219903613" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faFacebookF} />
          </a>
          <a href="mailto:mexicanpartycatering@gmail.com">
            <FontAwesomeIcon icon={faEnvelope} />
          </a>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} Mexican Party LTD. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
