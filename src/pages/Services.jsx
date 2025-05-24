// Services.jsx
import React from 'react';
import { Helmet } from 'react-helmet';
import './Services.scss';
import BrideImg from '../assets/images/bride.webp';
import corporateParty from '../assets/images/corporateParty.webp';
import PrivateParty from '../assets/images/PrivateParty.webp';
import CustomMenu from '../assets/images/CustomMenu.webp';
import { Link } from 'react-router-dom';

const Services = () => {
  const services = [
    {
      title: "Weddings",
      image: BrideImg,
      description: "Create timeless memories with our luxury wedding catering. Experience bespoke menus, artful presentation, and impeccable service tailored to your love story.",
      cta: "Design Your Dream Wedding"
    },
    {
      title: "Corporate Events",
      image: corporateParty,
      description: "Elevate business gatherings with premium culinary experiences. Our expert team delivers innovative menus and flawless execution for impactful corporate events.",
      cta: "Enhance Your Meeting"
    },
    {
      title: "Private Parties",
      image: PrivateParty,
      description: "Transform your personal celebration into an extraordinary event. From intimate dinners to grand soirées, we craft unforgettable gastronomic journeys.",
      cta: "Plan Your Exclusive Event"
    },
    {
      title: "Custom Menus",
      image: CustomMenu,
      description: "Collaborate with our chefs to create a completely personalized dining experience. Perfect for discerning hosts seeking a unique culinary narrative.",
      cta: "Create Your Signature Menu"
    }
  ];

  return (
    <>
      <Helmet>
        <title>Services | Mexican Party Catering Vancouver</title>
        <meta
          name="description"
          content="Discover the professional services offered by Mexican Party Catering in Vancouver: Weddings, corporate events, private parties, and custom menus."
        />
        <link rel="canonical" href="https://mexicanpartycatering.ca/services" />

        {/* Open Graph Tags */}
        <meta property="og:title" content="Services | Mexican Party Catering Vancouver" />
        <meta
          property="og:description"
          content="Explore our services: luxury wedding catering, corporate events, private parties, and custom menus by Mexican Party Catering Vancouver."
        />
        <meta property="og:image" content="https://mexicanpartycatering.ca/images/helmetImg.jpg" />
        <meta property="og:url" content="https://mexicanpartycatering.ca/services" />
        <meta property="og:type" content="website" />

        {/* Twitter Card Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Services | Mexican Party Catering Vancouver" />
        <meta
          name="twitter:description"
          content="Professional catering services by Mexican Party Catering Vancouver for weddings, corporate events, private parties, and custom menus."
        />
        <meta name="twitter:image" content="https://mexicanpartycatering.ca/images/helmetImg.jpg" />
      </Helmet>

      <section className="services" id="services">
        <h2 className="section-title">Culinary Excellence for Unforgettable Moments</h2>
        <div className="services-list">
          {services.map((service, index) => (
            <article className="service-item" key={index}>
              <div className="media">
                <div className="image-container">
                  <img 
                    src={service.image} 
                    alt={service.title} 
                    className="service-image"
                    loading="lazy"
                  />
                </div>
                <div className="service-info">
                  <h3>{service.title}</h3>
                  <p>{service.description}</p>
                  <Link to="/bookus" className="service-cta" aria-label={`Book catering for ${service.title}`} >
                    {service.cta}
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>
    </>
  );
};

export default Services;
