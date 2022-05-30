import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getParcel } from '../services/ParcelsService';
import '../styles/pages/ParcelInformationPages.css';
import { getAllRecords } from '../services/DeliveryRecordsService';
import ParcelDetails from '../components/ParcelDetails';
import TrackingParcelHistoryRibon from '../components/TrackParcel/TrackingParcelHistoryRibon';
import styles from '../commonStyles.module.css';
import ErrorPage from '../pages/ErrorPage';

function ParcelInformationPage() {
  const { parcelId } = useParams();
  const [parcelInfo, setParcelInfo] = useState(null);
  const [deliveryRecords, setDeliveryRecords] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const parcel = await getParcel(parcelId);
      const deliveryRecords = await getAllRecords(parcelId);

      setParcelInfo(parcel);
      setDeliveryRecords(deliveryRecords);
    };

    fetchData();
  }, []);

  return parcelInfo != null && parcelInfo.payment.status === 'COMPLETED' ? (
    deliveryRecords != null ? (
      <div className={`row row-cols-2 ${styles.mainRow}`}>
        <div className={`col ${styles.mainCol}`}>
          <TrackingParcelHistoryRibon eventsInfo={deliveryRecords} />
        </div>
        <div className={`col ${styles.mainCol}`}>
          <ParcelDetails parcelInfo={parcelInfo} />
        </div>
      </div>
    ) : (
      <ParcelDetails parcelInfo={parcelInfo} />
    )
  ) : (
    <ErrorPage />
  );
}

export default ParcelInformationPage;
