import React, { useRef } from 'react';
import Barcode from 'react-barcode';
import Pdf from 'react-to-pdf';
import ParcelInfo from './ParcelInfo';

function ParcelDetails({ parcelInfo }) {
  const ref = useRef();

  return (
    <div>
      <div className="barcode-container" ref={ref}>
        <Barcode value={parcelInfo.id} />
      </div>
      <Pdf targetRef={ref} filename="parcelCode.pdf">
        {({ toPdf }) => (
          <button className="pdf-button" onClick={toPdf}>
            Generate PDF
          </button>
        )}
      </Pdf>
      <ParcelInfo data={parcelInfo} />
    </div>
  );
}

export default ParcelDetails;
