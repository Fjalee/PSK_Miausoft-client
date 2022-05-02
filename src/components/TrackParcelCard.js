import React from 'react';

const styles = {
  card: {
    maxWidth: '18rem',
    cursor: 'pointer',
  },
};

function TrackParcelCard() {
  return (
    <div className="card border-dark mb-3" style={styles.card}>
      <div className="card-body text-dark">
        <h5 className="card-title">Where is my Parcel?</h5>
      </div>
    </div>
  );
}

export default TrackParcelCard;
