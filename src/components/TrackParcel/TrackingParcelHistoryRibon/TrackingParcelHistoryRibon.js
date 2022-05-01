import React from 'react';
import TrackingParcelPoint from '../TrackingParcelPoint/TrackingParcelPoint';
import styles from './styles.module.css';

function TrackingParcelHistoryRibon({eventsInfo}) {
  const trackingPointsList = [];
  eventsInfo.forEach((e, index)=>{
    trackingPointsList.push(<TrackingParcelPoint
      key={index}
      eventInfo={e}
    />);
  });

  return (
    <div className={`row ${styles.mainRow}`}>
      <div className='col'>
        {trackingPointsList}
      </div>
      <div className='col'>
        parcel info (coming soon)
      </div>
    </div>
  );
}

export default TrackingParcelHistoryRibon;
