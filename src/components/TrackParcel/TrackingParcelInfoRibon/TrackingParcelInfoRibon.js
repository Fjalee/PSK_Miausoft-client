import React from 'react';
import InfoRibonListItem from '../InfoRibonListItem/InfoRibonListItem';

function TrackingParcelInfoRibon({parcelInfo}) {
  return (
      <>
      <h1>Parcel info</h1>
        <ul>
            <InfoRibonListItem description={'address'} text={parcelInfo.address}/>
            <InfoRibonListItem description={'size'} text={parcelInfo.size}/>
            <InfoRibonListItem description={'weigth'} text={`${parcelInfo.weigth}kg`}/>
        </ul>
      </>
  );
}

export default TrackingParcelInfoRibon;
