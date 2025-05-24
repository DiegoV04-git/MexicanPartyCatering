// src/components/Carousel.jsx
import React from 'react';
import Slider from 'react-slick';

import slider01 from '../assets/images/slider01.webp';
import slider02 from '../assets/images/slider02.webp';
import slider03 from '../assets/images/slider03.webp';
import slider04 from '../assets/images/slider04.webp';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './Carousel.scss';

const items = [
  { id: 1, img: slider01},
  { id: 2, img: slider02},
  { id: 3, img: slider03},
  { id: 4, img: slider04},
];

const CustomCarousel = () => {

    const [currentSlide, setCurrentSlide] = React.useState(0);
    const sliderRef = React.useRef();

    const handleBeforeChange = (oldIndex, newIndex) => {
        const direction  = newIndex > oldIndex ? 1 : -1;
        const slides = sliderRef.current.innerSlider.list.querySelectorAll('.slick-slide');

        slides.forEach((slide,index) => {
            slide.style.setProperty('--direction',
                index === newIndex ? 0:
                index < newIndex ? -1 * direction :
                1 * direction
            );
        });
    };

  const settings = {
    centerMode: true,
    centerPadding: '0px',
    slidesToShow: 3,
    autoplay: true,
    autoplaySpeed: 6000,
    infinite: true,
    speed: 800,
    arrows: false,       // ← quitamos flechas
    dots: true,          // opcional: puntos de paginación
    focusOnSelect: true,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          centerMode: false,
          dots: true
        }
      }
    ]
  };

  return (
    <div className="carousel-wrapper">
      <Slider {...settings}>
  {items.map(item => (
    <div key={item.id} className="slide"> {/* Agrega clase aquí */}
      <img src={item.img}
       alt=""
       width={400}
       height={200} 
       />
    </div>
  ))}
</Slider>

    </div>
  );
};

export default CustomCarousel;
