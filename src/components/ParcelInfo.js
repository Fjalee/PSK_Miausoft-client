import React from 'react';

function ParcelInfo({ data }) {
  return (
    <div>
      <p>Payment status: {data.payment.status}</p>
      <p>
        Price: {data.payment.amount} {data.payment.currencyCode}
      </p>
      <p>Delivery Method: {data.deliveryMethod}</p>
      <p>Parcel size: {data.dimensions.size}</p>

      {data.deliveryMethod === 'HOME_TO_HOME' ||
      data.deliveryMethod === 'HOME_TO_PARCEL_MACHINE' ? (
        <p>Start Address: {data.startAddress}</p>
      ) : (
        <p>Start Address: {data.startParcelMachine.address} (PARCEL MACHINE)</p>
      )}
      {data.deliveryMethod === 'HOME_TO_HOME' ||
      data.deliveryMethod === 'PARCEL_MACHINE_TO_HOME' ? (
        <p>Destination Address: {data.destinationAddress}</p>
      ) : (
        <p>Destination Address: {data.destinationParcelMachine.address} (PARCEL MACHINE)</p>
      )}
    </div>
  );
}

export default ParcelInfo;
