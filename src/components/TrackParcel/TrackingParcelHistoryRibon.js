import React from 'react';
import TrackingParcelPoint from './TrackingParcelPoint/TrackingParcelPoint';
import styles from './styles.module.css';

function TrackingParcelHistoryRibon({ eventsInfo }) {
  const trackingPointsList = [];
  eventsInfo.forEach((e, index) => {
    trackingPointsList.push(<TrackingParcelPoint key={index} eventInfo={e} />);
  });

  return (
    <div className={styles.trackingContainer}>
      <h3 className={styles.title}>Parcel locations</h3>
      <div>{trackingPointsList}</div>
    </div>
  );
}

export default TrackingParcelHistoryRibon;
