import React from 'react';

const styles = {
  image: {
    maxHeight: '40px',
  },
};

function TrackingParcelPoint({text, isDelivered = false}) {
  const svgSrc = `/tracking-point-${isDelivered}.svg`;
  const imgAlt = isDelivered ? 'tracking point done' : 'tracking point not done';

  return (
    <>
      <img
        className='d-block w-100'
        style={styles.image}
        src={svgSrc}
        alt={imgAlt}
      />
      <div>{text}</div>
    </>
  );
}

export default TrackingParcelPoint;
