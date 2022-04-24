import React from 'react';
import { useNavigate } from 'react-router-dom';

function GoToOrderCreationCard() {
  const navigate = useNavigate();

  const cardOnClick = () => navigate('/createOrder/HomeToHome');

  return (
    <div
      className="card border-dark mb-3 onHoverGray"
      style={{ maxWidth: '18rem', cursor: 'pointer' }}
      onClick={cardOnClick}
    >
      <div className="card-body text-dark">
        <h5 className="card-title">Deliver you parcel now!</h5>
      </div>
      <div className="card-footer bg-transparent border-dark">Footer</div>
    </div>
  );
}

export default GoToOrderCreationCard;
