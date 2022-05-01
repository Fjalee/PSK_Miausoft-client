import React from 'react';
import TrackingParcelPoint from './TrackingParcelPoint/TrackingParcelPoint';

const styles = {
  mainRow: {
    padding: '10px',
  },
};

function TrackingParcelHistoryRibon({trackingEvents}) {
  const trackingPointsList = [];
  trackingEvents.forEach((e, index)=>{
    trackingPointsList.push(<TrackingParcelPoint
      key={index}
      isDelivered={e.isDelivered}
      text={e.text}/>);
  });

  return (
    <div className='row' style={styles.mainRow}>
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
