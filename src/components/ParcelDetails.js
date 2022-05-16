import React, { useRef } from 'react';
import Barcode from 'react-barcode';
import Pdf from 'react-to-pdf';
import ParcelInfo from './ParcelInfo';

function ParcelDetails({ parcelInfo }) {
  const ref = useRef();

  return (
    <div>
      <div
        className="d-flex justify-content-center"
        ref={ref}
        style={{ border: '1px solid black' }}
      >
        <Barcode value={parcelInfo.id} />
      </div>
      <Pdf targetRef={ref} filename="parcelCode.pdf">
        {({ toPdf }) => <button onClick={toPdf}>Generate Pdf</button>}
      </Pdf>
      <ParcelInfo data={parcelInfo} />
    </div>
  );
}

export default ParcelDetails;
