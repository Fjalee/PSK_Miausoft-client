import React from 'react';
import TrackingParcelHistoryRibon from '../components/TrackParcel/TrackingParcelHistoryRibon';

function TrackParcel() {
  return (
    <>
      <TrackingParcelHistoryRibon trackingEvents={[
        {text: 'testText1', isDelivered: true},
        {text: 'testtty22', isDelivered: true},
        {text: 'ttt3333', isDelivered: true},
        {text: 'test4', isDelivered: false},
        {text: 'testt5', isDelivered: false},
      ]}/>
    </>
  );
}

export default TrackParcel;
