import "react-alice-carousel/lib/alice-carousel.css";
import React from 'react';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import banner1 from './media/Carrousel/1.jpg';
import banner2 from './media/Carrousel/2.jpg';
import banner3 from './media/Carrousel/3.jpg';
import banner4 from './media/Carrousel/4.jpg';
import banner5 from './media/Carrousel/5.jpg';

const handleDragStart = (e) => e.preventDefault();

const imageStyle = {
  height: '560px',
  width: '560px',
};

const items = [
  <img
    src={banner1}
    onDragStart={handleDragStart}
    role="presentation"
    style={imageStyle}
    key={1}
  />,
  <img
    src={banner2}
    onDragStart={handleDragStart}
    role="presentation"
    style={imageStyle}
    key={2}
  />,
  <img
    src={banner3}
    onDragStart={handleDragStart}
    role="presentation"
    style={imageStyle}
    key={3}
  />,
  <img
    src={banner4}
    onDragStart={handleDragStart}
    role="presentation"
    style={imageStyle}
    key={4}
  />,
  <img
    src={banner5}
    onDragStart={handleDragStart}
    role="presentation"
    style={imageStyle}
    key={5}
  />
];

const Carrousel = () => {
  return (
    <div className="carrousel-container">
      <AliceCarousel
        mouseTracking={true}
        items={items}
        disableButtonsControls
        autoPlay
        autoPlayInterval={3000}
        autoPlayDirection="ltr"
        infinite
      />
    </div>
  );
}

export default Carrousel;
