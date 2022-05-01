import React from 'react';
import TrackingParcelHistoryRibon from '../components/TrackParcel/TrackingParcelHistoryRibon';

function TrackParcel() {
  return (
    <>
      <TrackingParcelHistoryRibon trackingEvents={[
        {text: 'testText1', isDelivered: false},
        {text: 'testtty22', isDelivered: true},
        {text: 'ttt3333', isDelivered: false},
      ]}/>
    </>
  );
}

export default TrackParcel;
