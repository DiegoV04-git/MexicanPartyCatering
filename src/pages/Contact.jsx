import React from 'react';
import { Helmet } from 'react-helmet';
import './contact.scss';
import { FaWhatsapp, FaEnvelope, FaFacebookF } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import ContactImg from '../assets/images/contactUs.jpg';

const ContactSection = () => {
  return (
    <>
      <Helmet>
        <title>Contact Us | Mexican Party Catering Vancouver</title>
        <meta
          name="description"
          content="Get in touch with Mexican Party Catering in Vancouver. We’d love to bring authentic Mexican flavor to your next event!"
        />
        <link rel="canonical" href="https://mexicanpartycatering.ca/contact" />

        {/* Open Graph Tags */}
        <meta property="og:title" content="Contact Us | Mexican Party Catering Vancouver" />
        <meta
          property="og:description"
          content="Contact Mexican Party Catering Vancouver for authentic Mexican catering at weddings, corporate events, and private parties."
        />
        <meta property="og:image" content={ContactImg} />
        <meta property="og:url" content="https://mexicanpartycatering.ca/contact" />
        <meta property="og:type" content="website" />

        {/* Twitter Card Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Contact Us | Mexican Party Catering Vancouver" />
        <meta
          name="twitter:description"
          content="Reach out to Mexican Party Catering Vancouver for authentic Mexican flavors at your events."
        />
        <meta name="twitter:image" content={ContactImg} />
      </Helmet>

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
            <img src={ContactImg} alt="Happy customer at Mexican catering event" loading='lazy'/>
          </div>
        </div>
      </section>
    </>
  );
};

export default ContactSection;
