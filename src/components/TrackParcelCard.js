import React from 'react';
import { useNavigate } from 'react-router-dom';

const styles = {
  card: { maxWidth: '18rem', cursor: 'pointer' },
};

function TrackParcelCard() {
  const navigate = useNavigate();

  const cardOnClick = () => navigate('/trackParcel');

  return (
    <div
      className="card border-dark mb-3 onHoverGray"
      style={styles}
      onClick={cardOnClick}
    >
      <div className="card-body text-dark">
        <h5 className="card-title">Where is my Parcel?</h5>
      </div>
      <div className="card-footer bg-transparent border-dark">Footer</div>
    </div>
  );
}

export default TrackParcelCard;
