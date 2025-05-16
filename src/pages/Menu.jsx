import React from 'react';
import './Menu.scss';
import menuPage from '../assets/images/menuPage.jpg';

const MenuPage = () => {
  const handleDownload = () => {
    // Ruta a tu archivo PDF
    const pdfUrl = '/enhanced3.pdf';
    window.open(pdfUrl, '_blank');
  };

  return (
    <div className="menu-page">
      <div className="menu-container">
        {/* Contenido del menú */}
        <div className="menu-content">
          <div className="menu-header">
            <h1>Our Delicious Mexican Menu</h1>
            <p>Explore the authentic flavors of Mexico!</p>
          </div>

          <div className="menu-description">
            <p>From tacos and burritos to quesadillas and salsas, our Mexican catering brings the vibrant flavors of Mexico to your events. Perfect for weddings, parties, and all special occasions!</p>
          </div>

          <div className="menu-button">
            <button className="download-btn" onClick={handleDownload}>Download Our Menu</button>
          </div>
        </div>

        {/* Imagen del menú */}
        <div className="menu-image-container">
          <img src={menuPage} alt="Mexican Food" className="menu-image" />
        </div>
      </div>
    </div>
  );
};

export default MenuPage;
