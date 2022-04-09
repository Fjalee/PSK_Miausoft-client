import React from 'react';
import { Carousel as BootStrapCarousel } from 'react-bootstrap';

const styles = {
  image: {
    maxHeight: '250px',
  },
};

function Carousel() {
  return (
    <BootStrapCarousel>
      <BootStrapCarousel.Item interval={3000}>
        <img
          className="d-block w-100"
          style={styles.image}
          src="/1.png"
          alt="First slide"
        />
        <BootStrapCarousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </BootStrapCarousel.Caption>
      </BootStrapCarousel.Item>
      <BootStrapCarousel.Item interval={3000}>
        <img
          className="d-block w-100"
          style={styles.image}
          src="/2.png"
          alt="Second slide"
        />
        <BootStrapCarousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </BootStrapCarousel.Caption>
      </BootStrapCarousel.Item>
    </BootStrapCarousel>
  );
}

export default Carousel;
