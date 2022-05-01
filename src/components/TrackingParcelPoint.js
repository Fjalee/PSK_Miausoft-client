import React from 'react';

const styles = {
  image: {
    maxHeight: '50px',
  },
};

function TrackingParcelPoint({isDelivered = false}) {
  const svgSrc = `/tracking-point-${isDelivered}.svg`;

  return (
    <div id="page">
      <img
        className="d-block w-100"
        style={styles.image}
        src={svgSrc}
        alt="tracking point done"
      />
    </div>
  );
}

export default TrackingParcelPoint;
