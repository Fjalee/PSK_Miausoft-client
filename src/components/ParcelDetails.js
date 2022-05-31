import React, { useRef } from 'react';
import Barcode from 'react-barcode';
import Pdf from 'react-to-pdf';
import ParcelInfo from './ParcelInfo';


function ParcelDetails({ parcelInfo }) {
  const ref = useRef();

  return (
    <div>
      <Pdf targetRef={ref} filename="parcelCode.pdf">
        {({ toPdf }) => (
          <button className="pdf-button" onClick={toPdf}>
            Generate PDF
          </button>
        )}
      </Pdf>
      <div ref={ref}>
        <div>
        <div className="barcode-container">
          <Barcode value={parcelInfo.id} />
        </div>
        </div>
        <div>
        <ParcelInfo data={parcelInfo} />
        </div>
      </div>
    </div>
  );
}

export default ParcelDetails;
