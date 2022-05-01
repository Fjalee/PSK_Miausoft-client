import React from 'react';
import TrackingParcelPoint from '../TrackingParcelPoint/TrackingParcelPoint';
import styles from './styles.module.css';

function TrackingParcelHistoryRibon({trackingEvents}) {
  const trackingPointsList = [];
  trackingEvents.forEach((e, index)=>{
    trackingPointsList.push(<TrackingParcelPoint
      key={index}
      isDelivered={e.isDelivered}
      text={e.text}/>);
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
