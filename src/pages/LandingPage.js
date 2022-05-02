import React from 'react';
import Carousel from '../components/Carousel';
import GoToOrderCreationCard from '../components/CreateOrder/GoToOrderCreationCard';
import TrackParcelCard from '../components/TrackParcelCard';
import { Card, Button} from 'react-bootstrap';

const styles = {
  carousel: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    height: '15rem',
    maxWidth: '18rem',
  },
  card: {
    width: '18rem',
    boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)',
    textAlign: 'center',
  },
};


function LandingPage() {
  return (
    <div id="page">
      <Carousel style={styles.carousel}/>
      <div>
        <div style={{justifyContent: 'center', marginTop: '100px', display: 'flex',
          gap: '5rem', paddingBottom: '10rem'}}>
          <div>
            <Card className="text-center" style={styles.card}>
              <Card.Img variant="top" src="deliver.jpg" style={styles.image}/>
              <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up the bulk
                  the content.
                </Card.Text>
                <GoToOrderCreationCard />
              </Card.Body>
            </Card>
          </div>
          <div>
            <Card className="text-center" style={styles.card}>
              <Card.Img variant="top" src="parcel.jpg" style={styles.image}/>
              <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up the bulk
                  the content.
                </Card.Text>
                <TrackParcelCard />
              </Card.Body>
            </Card>
          </div>
        </div>
        <Card className="text-center">
          <Card.Body>
            <Card.Title>Special title treatment</Card.Title>
            <Card.Text>
              With supporting text below as a natural lead-in to additional content.
            </Card.Text>
            <Button variant="primary">Go somewhere</Button>
          </Card.Body>
        </Card>
      </div>
    </div>
  );
}

export default LandingPage;
