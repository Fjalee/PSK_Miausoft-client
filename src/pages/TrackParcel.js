import React from 'react';
import TrackingParcelHistoryRibon from '../components/TrackParcel/TrackingParcelHistoryRibon/TrackingParcelHistoryRibon';

function TrackParcel() {
  return (
    <>
      <TrackingParcelHistoryRibon eventsInfo={[
        {text: 'testText1', date: new Date(2022, 1, 3, 3, 45, 54), isDelivered: true},
        {text: 'testtty22', date: new Date(2022, 1, 3, 5, 49, 5), isDelivered: true},
        {text: 'ttt3333', date: new Date(2022, 1, 5, 11, 52, 6), isDelivered: true},
        {text: 'test4', date: new Date(2022, 1, 5, 13, 43, 9), isDelivered: false},
        {text: 'testt5', date: new Date(2022, 1, 6, 14, 56, 54), isDelivered: false},
      ]}/>
    </>
  );
}

export default TrackParcel;
