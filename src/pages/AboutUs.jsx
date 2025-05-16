import React from 'react';
import './AboutUs.scss';
import AboutImg from '../assets/images/AboutImg.jpg';

const AboutUs = () => {
  return (
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
          <a href="/bookus">Get a Quote!</a>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
