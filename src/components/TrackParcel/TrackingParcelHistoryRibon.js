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
      <h1>Where is the parcel?</h1>
      {trackingPointsList}
    </>
  );
}

export default TrackingParcelHistoryRibon;
