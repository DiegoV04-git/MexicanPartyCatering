import React from 'react';
import './contact.scss';
import { FaWhatsapp, FaEnvelope, FaFacebookF } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import ContactImg from '../assets/images/contactUs.jpg'

const ContactSection = () => {
  return (
    <section className="ContactSection">
      <div className="container">
        <div className="info">
          <h2>Contact Us</h2>
          <p>We’d love to bring the flavor to your next event!</p>
          <div className="contact-methods">
            <a href="https://wa.me/12365129594/" target="_blank" rel="noopener noreferrer">
              <FaWhatsapp />
              WhatsApp
            </a>
            <a href="mailto:mexicanpartycatering@gmail.com">
              <FaEnvelope />
              Email Us
            </a>
            <a href="https://www.facebook.com/profile.php?id=61558219903613" target="_blank" rel="noopener noreferrer">
              <FaFacebookF />
              Facebook
            </a>
          </div>
          <Link to="/bookus" className="contact-btn">
            Go to Contact Form
          </Link>
        </div>
        <div className="image-wrapper">
          <img src={ContactImg} alt="Happy customer at Mexican catering event" />
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
