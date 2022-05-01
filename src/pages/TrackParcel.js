import React from 'react';
import TrackingParcelPoint from '../components/TrackingParcelPoint';

function TrackParcel() {
  return (
    <>
      <TrackingParcelPoint/>
      <TrackingParcelPoint isDelivered={true}/>
      <TrackingParcelPoint isDelivered={true}/>
      <TrackingParcelPoint/>
    </>
  );
}

export default TrackParcel;
