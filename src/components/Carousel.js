import React from 'react';
import { Carousel as BootStrapCarousel } from 'react-bootstrap';


const styles = {
  image: {
    maxHeight: '350px',
  },
  carousel: {
    width: '50%',
    marginLeft: '25%',
    boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)',
    textAlign: 'center',
  },
};

function Carousel() {
  return (
    <BootStrapCarousel style={styles.carousel} >
      <BootStrapCarousel.Item interval={3000}>
        <img
          className="slider-size d-block w-100"
          style={styles.image}
          src="/slider1.jpg"
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
          src="/slider2.jpg"
          alt="Second slide"
        />
        <BootStrapCarousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </BootStrapCarousel.Caption>
      </BootStrapCarousel.Item>
      <BootStrapCarousel.Item interval={3000}>
        <img
          className="d-block w-100"
          style={styles.image}
          src="/slider3.jpg"
          alt="Third slide"
        />
        <BootStrapCarousel.Caption>
          <h3>Third slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </BootStrapCarousel.Caption>
      </BootStrapCarousel.Item>
    </BootStrapCarousel>
  );
}

export default Carousel;
