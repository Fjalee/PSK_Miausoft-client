import React from 'react';
import TrackingParcelPoint from './TrackingParcelPoint/TrackingParcelPoint';

function TrackingParcelHistoryRibon({eventsInfo}) {
  const trackingPointsList = [];
  eventsInfo.forEach((e, index)=>{
    trackingPointsList.push(<TrackingParcelPoint
      key={index}
      eventInfo={e}
    />);
  });

  return (
    <>
      {trackingPointsList}
    </>
  );
}

export default TrackingParcelHistoryRibon;
