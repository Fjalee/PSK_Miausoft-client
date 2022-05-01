import React from 'react';
import TrackingParcelPoint from './TrackingParcelPoint';

function TrackingParcelHistoryRibon({trackingEvents}) {
  const trackingPointsList = [];
  trackingEvents.forEach((e, index)=>{
    trackingPointsList.push(<TrackingParcelPoint
      key={index}
      isDelivered={e.isDelivered}
      text={e.text}/>);
  });

  return <>{trackingPointsList}</>;
}

export default TrackingParcelHistoryRibon;
