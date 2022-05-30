import React from 'react';
import Carousel from '../components/Carousel';
import GoToOrderCreationCard from '../components/CreateOrder/GoToOrderCreationCard';
import TrackParcelCard from '../components/TrackParcelCard';
import { Card } from 'react-bootstrap';
import '../styles/pages/LandingPage.css';

function LandingPage() {
  return (
    <div id="page">
      <Carousel className=".carousel-layout" />
      <div>
        <div className="cards-flex">
          <div>
            <Card className="text-center card-layout">
              <Card.Img variant="top" src="deliver.jpg" className="image-proportion" />
              <Card.Body>
                <Card.Title>What to deliver something?</Card.Title>
                <Card.Text>
                  With our intuitave and fast website, delivering was never so easy!
                </Card.Text>
                <GoToOrderCreationCard />
              </Card.Body>
            </Card>
          </div>
          <div>
            <Card className="text-center  card-layout">
              <Card.Img variant="top" src="parcel.jpg" className="image-proportion" />
              <Card.Body>
                <Card.Title>Where is parcel?</Card.Title>
                <Card.Text>Find your parcel anywhere! Tracking is our top gun!</Card.Text>
                <TrackParcelCard />
              </Card.Body>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LandingPage;
