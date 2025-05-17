import React from 'react';
import { Helmet } from 'react-helmet';
import './AboutUs.scss';
import AboutImg from '../assets/images/AboutImg.jpg';
import { Link } from 'react-router-dom';

const AboutUs = () => {
  return (
    <>
      <Helmet>
        <title>About Us | Mexican Party Catering Vancouver</title>
        <meta
          name="description"
          content="Learn about Mexican Party Catering in Vancouver. We bring authentic Mexican flavors to your weddings, corporate events, and private parties."
        />
        <link rel="canonical" href="https://mexicanpartycatering.ca/about" />

        {/* Open Graph */}
        <meta property="og:title" content="About Us | Mexican Party Catering Vancouver" />
        <meta
          property="og:description"
          content="Discover the passion and story behind Mexican Party Catering in Vancouver. Authentic Mexican cuisine for all your events."
        />
        <meta property="og:image" content="https://mexicanpartycatering.ca/images/helmetImg.jpg" />
        <meta property="og:url" content="https://mexicanpartycatering.ca/about" />
        <meta property="og:type" content="website" />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="About Us | Mexican Party Catering Vancouver" />
        <meta
          name="twitter:description"
          content="Get to know Mexican Party Catering Vancouver, our team and mission to deliver authentic Mexican flavors for your events."
        />
        <meta name="twitter:image" content="https://mexicanpartycatering.ca/images/helmetImg.jpg" />
      </Helmet>

      <section className="AboutUs">
        <div className="container">
          <div className="content">
            <h2>About Us</h2>
            <p>
              At <strong>Mexican Party Catering</strong>, we bring the authentic flavor of Mexico to your events.
              From handcrafted tacos to traditional drinks, our team is committed to providing you
              with an unforgettable culinary experience.
            </p>
            <p>
              Founded with love for our roots and a passion for service, we cater weddings, birthdays,
              corporate events, and more—always guaranteeing quality, flavor, and joy in every dish.
            </p>
          </div>
          <div className="image-wrapper">
            <img
              src={AboutImg}
              alt="Mexican catering team serving food"
            />
            <Link to="/bookus">Get a Quote!</Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutUs;
