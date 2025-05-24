import React from 'react';
import { Helmet } from 'react-helmet';
import './Home.scss';
import Carousel from '../components/Carousel'; 
import catering from '../assets/images/catering.webp'; 
import tables from '../assets/images/tables.webp'; 
import weddingCateringImage from '../assets/images/wedding.webp';
import privatePartyImage from '../assets/images/privatePartyImage.webp';
import corporateCateringImage from '../assets/images/corporateCateringImage.webp';
import customMenuImage from '../assets/images/customMenuImage.webp';
import { Link } from 'react-router-dom';

const Home = () => {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "FoodEstablishment",
    "name": "Mexican Party Catering",
    "image": "https://mexicanpartycatering.ca/images/helmetImg.jpg",
    "@id": "https://mexicanpartycatering.ca",
    "url": "https://mexicanpartycatering.ca/",
    "telephone": "+1-236-512-9594",
    "priceRange": "$$",
    "servesCuisine": "Mexican",
    "description": "Authentic Mexican catering for weddings, corporate events, and private parties in Vancouver, Langley, Burnaby, and surrounding areas.",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Langley",
      "addressRegion": "BC",
      "postalCode": "V3A 2C4",
      "addressCountry": "CA"
    },
    "areaServed": [
      { "@type": "Place", "name": "Vancouver" },
      { "@type": "Place", "name": "Langley" },
      { "@type": "Place", "name": "Burnaby" },
      { "@type": "Place", "name": "Delta" },
      { "@type": "Place", "name": "Surrey" },
      { "@type": "Place", "name": "Richmond" }
    ],
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": [
          "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"
        ],
        "opens": "00:00",
        "closes": "23:59"
      }
    ],
    "sameAs": [
      "https://www.facebook.com/profile.php?id=61558219903613",
      "https://www.yelp.com/biz/mexican-party-catering-langley"
    ]
  };

  return (
    <>
      <Helmet>
        {/* Title and Meta Description */}
        <title>Mexican Party Catering Vancouver, Surrey & Langley | Authentic Mexican Food for Weddings & Events</title>
        <meta
          name="description"
          content="Looking for authentic Mexican catering in Vancouver, Surrey, or Langley? Perfect for weddings, corporate events, and private parties. Fresh, flavorful, and memorable catering for your special occasions."
        />
        {/* Canonical URL */}
        <link rel="canonical" href="https://mexicanpartycatering.ca/" />
        {/* Open Graph for Social Sharing */}
        <meta property="og:title" content="Mexican Party Catering Vancouver" />
        <meta
          property="og:description"
          content="Bring the vibrant flavors of Mexico to your events with Mexican Party Catering in Vancouver. Perfect for weddings, corporate events, and private parties."
        />
        <meta property="og:image" content="https://mexicanpartycatering.ca/images/helmetImg.jpg" />
        <meta property="og:url" content="https://mexicanpartycatering.ca/" />
        <meta property="og:type" content="website" />
        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Mexican Party Catering Vancouver" />
        <meta
          name="twitter:description"
          content="Authentic Mexican catering for weddings, corporate events, and private parties in Vancouver."
        />
        <meta name="twitter:image" content="https://mexicanpartycatering.ca/images/helmetImg.jpg" />

        {/* JSON-LD Structured Data */}
        <script type="application/ld+json">
          {JSON.stringify(jsonLd)}
        </script>
      </Helmet>

      <main className="home">
      <h2 className="sr-only">Mexican Party Catering Services and Information</h2>
        <section className="hero">
          <h1>Authentic Mexican Catering</h1>
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
              We create unforgettable experiences with bold, authentic Mexican flavors. From tacos to ceviche, we bring the party—fresh, vibrant, and perfect for any celebration.
            </p>
            <Link to="/menu" className="about-cta">View Our Menu</Link>
          </div>
          <div className="about-image-wrapper">
            <img src={catering} alt="Mexican catering event setup in Vancouver with traditional dishes" loading='lazy' />
          </div>
        </section>

        <section className="about">
          <div className="about-image-wrapper">
            <img src={tables} alt="Outdoor catered tables decorated for event in Surrey" loading='lazy' />
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

        <section className="services" id="services">
          <h2 className="section-title">Our Services</h2>
          <div className="services-list">
            <div className="service-item">
              <img src={weddingCateringImage} alt="Wedding catering with Mexican dishes" loading='lazy'/>
              <h3>Weddings</h3>
              <p>A unique and flavorful menu to make the most important day of your life even more memorable.</p>
              <Link to="/bookus" className="service-cta">Spice Up Your Wedding</Link>
            </div>
            <div className="service-item">
              <img src={corporateCateringImage} alt="Corporate event catering with Mexican cuisine" loading='lazy' />
              <h3>Corporate Events</h3>
              <p>Elegant and delicious catering options for business meetings, conferences, or company events.</p>
              <Link to="/bookus" className="service-cta">Add Sabor to Your Event</Link>
            </div>
            <div className="service-item">
              <img src={privatePartyImage} alt="Private party catering with Mexican food"  loading='lazy'/>
              <h3>Private Parties</h3>
              <p>From birthdays to special celebrations, we provide a one-of-a-kind gastronomic experience.</p>
              <Link to="/bookus" className="service-cta">Let’s Fiesta!</Link>
            </div>
            <div className="service-item">
              <img src={customMenuImage} alt="Custom menu tailored for an event" loading='lazy' />
              <h3>Custom Menu</h3>
              <p>Design a unique menu tailored to your preferences, featuring the finest Mexican flavors.</p>
              <Link to="/bookus" className="service-cta">Craft Your Flavor Fiesta</Link>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default Home;
