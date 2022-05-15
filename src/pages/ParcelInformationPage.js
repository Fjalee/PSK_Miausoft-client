import React from 'react';
import { useParams } from 'react-router-dom';
import ParcelDetails from '../components/ParcelDetails';

function ParcelInformationPage() {
  const { parcelId } = useParams();

  return (<ParcelDetails parcelId={parcelId}/>);
}

export default ParcelInformationPage;
