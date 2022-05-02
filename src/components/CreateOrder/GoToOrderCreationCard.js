import React from 'react';
import { useNavigate } from 'react-router-dom';

const styles = {
  card: {
    maxWidth: '18rem',
    cursor: 'pointer',
  },
};

function GoToOrderCreationCard() {
  const navigate = useNavigate();
  const cardOnClick = () => navigate('/createOrder/FromHomeToHome');

  return (
    <div
      className="card border-dark mb-3 onHoverGray"
      style={{ maxWidth: '18rem', cursor: 'pointer' }}
      onClick={cardOnClick}
    >
      <div className="card-body text-dark" style={styles.card}>
        <h5 className="card-title">Deliver your parcel now!</h5>
      </div>
    </div>
  );
}

export default GoToOrderCreationCard;
