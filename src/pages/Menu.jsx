import React from 'react';
import './Menu.scss';
import menuPage from '../assets/images/menuPage.webp';

const MenuPage = () => {
  const handleDownload = () => {
    // Ruta a tu archivo PDF
    const pdfUrl = '/enhanced3.pdf';
    window.open(pdfUrl, '_blank');
  };

  return (
    <main className="menu-page" role='main'>
      <div className="menu-container">
        {/* Contenido del menú */}
        <section className="menu-content" aria-labelledby='menu-title'>
          <header className="menu-header">
            <h1>Our Delicious Mexican Menu</h1>
            <p>Explore the authentic flavors of Mexico!</p>
          </header>

          <div className="menu-description">
            <p>From tacos and burritos to quesadillas and salsas, our Mexican catering brings the vibrant flavors of Mexico to your events. Perfect for weddings, parties, and all special occasions!</p>
          </div>

          <div className="menu-button">
            <button className="download-btn" type='button' onClick={handleDownload}>Download Our Menu</button>
          </div>
        </section>

        {/* Imagen del menú */}
        <aside className="menu-image-container" aria-label='Image of Mexican food menu'>
          <img src={menuPage} 
          alt= "A delicious spread of Mexican food including tacos and salsa"
          className="menu-image"
          width={800} height={800} style={{ maxWidth: '100%', height: 'auto' }}/>
        </aside>
      </div>
    </main>
  );
};

export default MenuPage;
