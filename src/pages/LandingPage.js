import React from 'react';
import Carousel from '../components/Carousel';
import GoToOrderCreationCard from '../components/GoToOrderCreationCard';
import TrackParcelCard from '../components/TrackParcelCard';

function LandingPage() {
  return (
    <div id="page">
      <Carousel />
      <div>
        <div className="row row-cols-3 p-3" style={{ maxWidth: '100%' }}>
          <div className="col">
            <GoToOrderCreationCard />
          </div>
          <div className="col">
            <TrackParcelCard />
          </div>
        </div>
      </div>
    </div>
  );
}

export default LandingPage;
