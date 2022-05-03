import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../../styles/TrackParcelCard.css';

function GoToOrderCreationCard() {
  const navigate = useNavigate();

  const cardOnClick = () => navigate('/createOrder/HomeToHome');

  return (
    <div className="card border-dark mb-3 onHoverGray button-card" onClick={cardOnClick}>
      <div className="card-body text-dark button-card">
        <h5 className="card-title">Deliver your parcel now!</h5>
      </div>
    </div>
  );
}

export default GoToOrderCreationCard;
