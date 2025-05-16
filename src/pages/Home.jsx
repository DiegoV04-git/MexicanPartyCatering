import React from 'react';
import './Home.scss';
import Carousel from '../components/Carousel'; 
import catering from '../assets/images/catering.jpg'; 
import tables from '../assets/images/tables.jpg'; 
import weddingCateringImage from '../assets/images/wedding.jpg';
import privatePartyImage from '../assets/images/privatePartyImage.jpg';
import corporateCateringImage from '../assets/images/corporateCateringImage.jpg';
import customMenuImage from '../assets/images/customMenuImage.jpg';
import { Link } from 'react-router-dom'; 


const Home = () => {
  return (
    <main className="home">
      <section className="hero">
        <h2>Authentic Mexican Catering</h2>
        <p>
          Bringing the vibrant flavors of Mexico to your events. Whether it’s a wedding, corporate event,
          or private party — our traditional recipes and professional service will make your celebration unforgettable.
        </p>
        <Link to="/menu" className="hero-cta">Explore Menu</Link>
      </section>
      <Carousel />
      <section className="about">
        <div className="about-content">
          <span className="subtitle">Enjoy the Moment!</span>
          <h2>Unforgettable Mexican Flavor</h2>
          <p>
          We create unforgettable experiences with bold, authentic Mexican flavors. From tacos to ceviche, we bring the party—fresh, vibrant, and perfect for any celebration.          </p>
          <Link to="/menu" className="about-cta">View Our Menu</Link>
        </div>
        <div className="about-image-wrapper">
          <img src={catering} alt="Catering event" />
        </div>
    </section>
    <section className="about">
      <div className="about-image-wrapper">
        <img src={tables} alt="Catering event" />
      </div>
      <div className="about-content">
        <span className="subtitle">Let's Celebrate!</span>
        <h2>Bring Authentic Mexican Flavor to Your Event</h2>
        <p>
          Make your next event unforgettable with vibrant, handcrafted Mexican cuisine. From casual gatherings to elegant celebrations, we bring the flavor—and the fun.
        </p>
        <Link to="/bookus" className="about-cta">Request a Quote</Link>
      </div>
    </section>  
    <section className="services" id='services'>
  <h2 className="section-title">Our Services</h2>
  <div className="services-list">
    <div className="service-item">
      <img src={weddingCateringImage} alt="Wedding Catering" />
      <h3>Weddings</h3>
      <p>
        A unique and flavorful menu to make the most important day of your life even more memorable.
      </p>
      <Link to="/bookus" className="service-cta">Spice Up Your Wedding</Link>
    </div>
    <div className="service-item">
      <img src={corporateCateringImage} alt="Corporate Events Catering" />
      <h3>Corporate Events</h3>
      <p>
        Elegant and delicious catering options for business meetings, conferences, or company events.
      </p>
      <Link to="/bookus" className="service-cta">Add Sabor to Your Event</Link>
    </div>
    <div className="service-item">
      <img src={privatePartyImage} alt="Private Parties Catering" />
      <h3>Private Parties</h3>
      <p>
        From birthdays to special celebrations, we provide a one-of-a-kind gastronomic experience.
      </p>
      <Link to="/bookus" className="service-cta">Let’s Fiesta!</Link>
    </div>
    <div className="service-item">
      <img src={customMenuImage} alt="Custom Menu" />
      <h3>Custom Menu</h3>
      <p>
        Design a unique menu tailored to your preferences, featuring the finest Mexican flavors.
      </p>
      <Link to="/bookus" className="service-cta">Craft Your Flavor Fiesta</Link>
    </div>
  </div>
</section>
    </main>
  );
};

export default Home;
