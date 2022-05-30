import React from 'react';
import { Carousel as BootStrapCarousel } from 'react-bootstrap';
import '../styles/Carousel.css';

function Carousel() {
  return (
    <BootStrapCarousel className="carousel">
      <BootStrapCarousel.Item interval={3000}>
        <img
          className="slider-size d-block w-100 image-carousel"
          src="/slider1.jpg"
          alt="First slide"
        />
        <BootStrapCarousel.Caption>
          <h3>Welcome to MiaUps</h3>
          <p>New way to share your belongings!</p>
        </BootStrapCarousel.Caption>
      </BootStrapCarousel.Item>
      <BootStrapCarousel.Item interval={3000}>
        <img className="d-block w-100 image-carousel" src="/slider2.jpg" alt="Second slide" />
        <BootStrapCarousel.Caption>
          <h3>Our vision</h3>
          <p>To provide the freedom of sending anything to anyone, effortlessly and swiftly!</p>
        </BootStrapCarousel.Caption>
      </BootStrapCarousel.Item>
      <BootStrapCarousel.Item interval={3000}>
        <img className="d-block w-100 image-carousel" src="/slider3.jpg" alt="Third slide" />
        <BootStrapCarousel.Caption>
          <h3>Fast, effective, cheap</h3>
          <p>Our main pillars!</p>
        </BootStrapCarousel.Caption>
      </BootStrapCarousel.Item>
    </BootStrapCarousel>
  );
}

export default Carousel;
