// Services.jsx
import React from 'react';
import './Services.scss';
import BrideImg from '../assets/images/bride.jpg';
import corporateParty from '../assets/images/corporateParty.jpg';
import PrivateParty from '../assets/images/PrivateParty.jpg';
import CustomMenu from '../assets/images/CustomMenu.jpg';
import  { Link } from 'react-router-dom'

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
                <Link href="/bookus" className="service-cta">
                  {service.cta}
                </Link>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Services;