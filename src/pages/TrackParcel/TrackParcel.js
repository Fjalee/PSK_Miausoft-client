import React from 'react';
import TrackingParcelHistoryRibon from '../../components/TrackParcel/TrackingParcelHistoryRibon';
import TrackingParcelInfoRibon from '../../components/TrackParcel/TrackingParcelInfoRibon/TrackingParcelInfoRibon';
import styles from './styles.module.css';

const tempEventInfo = [
  {text: 'testText11111111111111111111111111111',
  date: new Date(2022, 1, 3, 3, 45, 54), isDelivered: true},
  {text: 'testtty2222222222222', date: new Date(2022, 1, 3, 5, 49, 5), isDelivered: true},
  {text: 'ttt3333', date: new Date(2022, 1, 5, 11, 52, 6), isDelivered: true},
  {text: 'test4', date: new Date(2022, 1, 5, 13, 43, 9), isDelivered: false},
  {text: 'testt5', date: new Date(2022, 1, 6, 14, 56, 54), isDelivered: false},
];

const tempParcelInfo = {
  address: 'Lietuva, Vilnius, Didlaukio g.59',
  size: 'S',
  weigth: 53.34,
};

function TrackParcel() {
  return (
    <div className={`row row-cols-2 ${styles.mainRow}`}>
      <div className={`col ${styles.mainCol}`}>
        <TrackingParcelHistoryRibon eventsInfo={tempEventInfo}/>
      </div>
      <div className={`col ${styles.mainCol}`}>
        <TrackingParcelInfoRibon parcelInfo={tempParcelInfo}/>
      </div>
    </div>
  );
}

export default TrackParcel;
