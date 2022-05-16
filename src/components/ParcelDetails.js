import React, { useEffect, useState, useRef } from 'react';
import Barcode from 'react-barcode';
import { getParcel } from '../services/ParcelsService';
import ErrorPage from '../pages/ErrorPage';
import Pdf from 'react-to-pdf';
import ParcelInfo from './ParcelInfo';

function ParcelDetails({ parcelId }) {
  const ref = useRef();
  const [parcelInfo, setParcelInfo] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const parcel = await getParcel(parcelId);
      setParcelInfo(parcel);
    };

    fetchData();
  }, []);

  return parcelInfo != null && parcelInfo.payment.status === 'COMPLETED' ? (
    <div>
      <div
        className="d-flex justify-content-center"
        ref={ref}
        style={{ border: '1px solid black' }}
      >
        <Barcode value={parcelId} />
      </div>
      <Pdf targetRef={ref} filename="parcelCode.pdf">
        {({ toPdf }) => <button onClick={toPdf}>Generate Pdf</button>}
      </Pdf>
      <ParcelInfo data={parcelInfo} />
    </div>
  ) : (
    <ErrorPage />
  );
}

export default ParcelDetails;
