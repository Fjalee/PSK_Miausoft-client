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
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </BootStrapCarousel.Caption>
      </BootStrapCarousel.Item>
      <BootStrapCarousel.Item interval={3000}>
        <img className="d-block w-100 image-carousel" src="/slider2.jpg" alt="Second slide" />
        <BootStrapCarousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </BootStrapCarousel.Caption>
      </BootStrapCarousel.Item>
      <BootStrapCarousel.Item interval={3000}>
        <img className="d-block w-100 image-carousel" src="/slider3.jpg" alt="Third slide" />
        <BootStrapCarousel.Caption>
          <h3>Third slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </BootStrapCarousel.Caption>
      </BootStrapCarousel.Item>
    </BootStrapCarousel>
  );
}

export default Carousel;
