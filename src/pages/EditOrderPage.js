/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import HomeForm from '../components/CreateOrder/HomeForm';
import ParcelMachineForm from '../components/CreateOrder/ParcelMachineForm';
import { createOrder } from '../services/CreateOrderService';
import { Form, Button, Tooltip, OverlayTrigger } from 'react-bootstrap';
import { PatchQuestionFill } from 'react-bootstrap-icons';
import { editParcel, getParcel } from '../services/ParcelsService';
import { getParcelDimensions } from '../services/ParcelDimensionsService';
import { getParcelMachines } from '../services/ParcelMachinesService';

const styles = {
  tab: {
    display: 'inline-flex',
    width: '100%',
  },
  btn: {
    color: 'black',
    backgroundColor: 'white',
    border: '2px solid #e9ecef',
    borderBottom: '2px solid #e9ecef',
    borderRight: '2px solid #e9ecef',
    borderLeft: '2px solid #e9ecef',
    flex: '1 1 auto',
    borderRadius: '0px 0px 10px 10px',
    textDecoration: 'none',
  },
  active: {
    backgroundColor: '#e9ecef',
    borderBottom: '2px solid black',
    borderRight: '2px solid black',
    borderLeft: '2px solid black',
    textDecoration: 'underline',
  },
};

const availableDeliveryTypes = [
  'Home To Home',
  'Home To Parcel Machine',
  'Parcel Machine To Parcel Machine',
  'Parcel Machine To Home',
];

const convertToContractDeliveryMethod = (method) => {
  switch (method) {
    case 'HomeToHome':
      return 'HOME_TO_HOME';
    case 'HomeToParcelMachine':
      return 'HOME_TO_PARCEL_MACHINE';
    case 'ParcelMachineToHome':
      return 'PARCEL_MACHINE_TO_HOME';
    case 'ParcelMachineToParcelMachine':
      return 'PARCEL_MACHINE_TO_PARCEL_MACHINE';
  }
};

const convertToDeliveryMethodToPath = (method) => {
  switch (method) {
    case 'HOME_TO_HOME':
      return 'HomeToHome';
    case 'HOME_TO_PARCEL_MACHINE':
      return 'HomeToParcelMachine';
    case 'PARCEL_MACHINE_TO_HOME':
      return 'ParcelMachineToHome';
    case 'PARCEL_MACHINE_TO_PARCEL_MACHINE':
      return 'ParcelMachineToParcelMachine';
  }
};

const initialAddress = {
  countryCode: 'LT',
  postCode: null,
  townName: null,
  streetName: null,
  buildingNumber: null,
};

function getAddressParts(address) {
  if (!address) return;
  const split = address.split('\n');
  const postCodeParts = split[0].split('-');

  const countryCode = postCodeParts[0];
  const postCode = postCodeParts[1];

  const townName = split[1];
  const streetName = split[2];
  const buildingNumber = split[3];

  return {
    countryCode,
    postCode,
    townName,
    streetName,
    buildingNumber,
  };
}

function cleanUpParcelDto(parcel, parcelId) {
  const deliveryMethod = parcel.deliveryMethod;
  const dto = {
    id: parcelId,
    deliveryMethod: deliveryMethod,
    dimensionsId: parcel.dimensionsId,
    startAddress: deliveryMethod === 'HOME_TO_HOME' ||
      deliveryMethod === 'HOME_TO_PARCEL_MACHINE' ? parcel.startAddress : null,
    destinationAddress: deliveryMethod === 'HOME_TO_HOME' ||
      deliveryMethod === 'PARCEL_MACHINE_TO_HOME' ? parcel.destinationAddress : null,
    startParcelMachineId: deliveryMethod === 'PARCEL_MACHINE_TO_PARCEL_MACHINE' ||
      deliveryMethod === 'PARCEL_MACHINE_TO_HOME' ? parcel.startParcelMachineId : null,
    destinationParcelMachineId: deliveryMethod === 'PARCEL_MACHINE_TO_PARCEL_MACHINE' ||
      deliveryMethod === 'HOME_TO_PARCEL_MACHINE' ? parcel.destinationParcelMachineId : null,
    version: parcel.version,
  };
  return dto;
}

function EditOrderPage() {
  const navigate = useNavigate();
  const { parcelId } = useParams();
  const [parcel, setParcel] = useState(null);
  const [parcelDimensions, setParcelDimensions] = useState([]);
  const [parcelMachines, setParcelMachines] = useState([]);
  const [deliveryType, setDeliveryType] = useState(undefined);
  const [optimisticLockError, setOptimisticLockError] = useState(false);

  useEffect(() => {
      const fetchData = async () => {
      const parcel = await getParcel(parcelId);
      const dimensions = await getParcelDimensions();
      const machines = await getParcelMachines();


      setParcelDimensions(dimensions);
      setParcelMachines(machines);

      parcel.startAddress = getAddressParts(parcel.startAddress);
      parcel.destinationAddress = getAddressParts(parcel.destinationAddress);
      parcel.startParcelMachineId = parcel?.startParcelMachine?.id;
      parcel.destinationParcelMachineId = parcel?.destinationParcelMachine?.id;
      parcel.dimensionsId = parcel?.dimensions?.id;

      setParcel(parcel);

      console.log('1', parcel);
      setDeliveryType(convertToDeliveryMethodToPath(parcel.deliveryMethod));


      console.log('2', parcel);
      };

      fetchData();
  }, [optimisticLockError]);

  const formSubmit = async (e) => {
    e.preventDefault();
    console.log('FORM SUBMIT, parcel', parcel);
    const response = await editParcel(cleanUpParcelDto(parcel, parcelId));
    if (response?.error === 'OPTIMISTIC_LOCK') {
      setOptimisticLockError(true);
    } else if (!response?.error) {
      navigate('/admin/parcels');
    }
  };

  const dimensionsChange = (e) => {
    setParcel({ ...parcel, dimensionsId: e.target.value });
  };

  const startAddressChange = (e) => {
    const newAddress = parcel.startAddress || {};
    newAddress[e.target.name] = e.target.value;
    setParcel({
      ...parcel,
      startAddress: newAddress,
      startParcelMachineId: null,
    });
  };

  const destinationAddressChange = (e) => {
    const newAddress = parcel.destinationAddress || {};
    newAddress[e.target.name] = e.target.value;
    setParcel({
      ...parcel,
      destinationAddress: newAddress,
      destinationParcelMachineId: null,
    });
  };

  const startParcelMachineChange = (e) => {
    setParcel({ ...parcel, startParcelMachineId: e.target.value, startAddress: null });
  };

  const destinationParcelMachineChange = (e) => {
    setParcel({
      ...parcel,
      destinationParcelMachineId: e.target.value,
      destinationAddress: null,
    });
  };

  const onDeliveryTypeChange = (type) => {
    const startFormDoesntChange = () =>
      setParcel({
        ...parcel,
        deliveryMethod: convertToContractDeliveryMethod(type),
        destinationParcelMachineId: null,
        destinationAddress: initialAddress,
      });
    const destinationFormDoesntChange = () =>
      setParcel({
        ...parcel,
        deliveryMethod: convertToContractDeliveryMethod(type),
        startParcelMachineId: null,
        startAddress: initialAddress,
      });

      console.log('TYPESTUFF', type);
    if (
      (type === 'HomeToHome' && deliveryType === 'HomeToParcelMachine') ||
      (type === 'HomeToParcelMachine' && deliveryType === 'HomeToHome') ||
      (type === 'ParcelMachineToParcelMachine' && deliveryType === 'ParcelMachineToHome') ||
      (type === 'ParcelMachineToHome' && deliveryType === 'ParcelMachineToParcelMachine')
    ) {
      startFormDoesntChange();
    } else if (
      (type === 'HomeToHome' && deliveryType === 'ParcelMachineToHome') ||
      (type === 'HomeToParcelMachine' && deliveryType === 'ParcelMachineToParcelMachine') ||
      (type === 'ParcelMachineToParcelMachine' && deliveryType === 'HomeToParcelMachine') ||
      (type === 'ParcelMachineToHome' && deliveryType === 'HomeToHome')
    ) {
      destinationFormDoesntChange();
    } else if (type === deliveryType) {
      // do nothing
    } else {
      // Set almost everything to null
      startFormDoesntChange();
      destinationFormDoesntChange();
    }

    setDeliveryType(type.replaceAll(' ', ''));
    // navigate(`/admin/editOrder/${parcel.id}/${}`);
  };

  if (!parcel) {
    return (<></>);
  }

  return (
    <div id="page">
      <div style={styles.tab}>
        {availableDeliveryTypes.map((type, index) => (
          <button
            className="onHoverGray"
            onClick={() => onDeliveryTypeChange(type.replaceAll(' ', ''), index)}
            key={index}
            style={
              deliveryType === type.replaceAll(' ', '')
                ? { ...styles.btn, ...styles.active }
                : styles.btn
            }
          >
            {type}
          </button>
        ))}
      </div>
      <Form className="mt-2 p-5" onSubmit={formSubmit}>
        <Form.Group className="d-flex justify-content-center align-items-center">
          <Form.Label>Parcel Size: </Form.Label>
          <Form.Select
            className="mx-2"
            name="dimensionsId"
            style={{ width: '10%' }}
            onChange={dimensionsChange}
            value={parcel?.dimensionsId}
          >
            {parcelDimensions.map((obj) => (
              <option key={obj.id} value={obj.id}>
                {obj.size}
              </option>
            ))}
          </Form.Select>
        </Form.Group>
        <div className="row mt-2">
          <Form.Group className="col">
            {deliveryType === 'HomeToHome' || deliveryType === 'HomeToParcelMachine' ? (
              <HomeForm address={parcel.startAddress} onChange={startAddressChange} />
            ) : (
              <ParcelMachineForm
                onChange={startParcelMachineChange}
                machines={parcelMachines}
                parcelMachine={parcel.startParcelMachineId}
              />
            )}
          </Form.Group>
          <Form.Group className="col">
            {deliveryType === 'HomeToHome' || deliveryType === 'ParcelMachineToHome' ? (
              <HomeForm address={parcel.destinationAddress} onChange={destinationAddressChange} />
            ) : (
              <ParcelMachineForm
                onChange={destinationParcelMachineChange}
                machines={parcelMachines}
                parcelMachine={parcel.destinationParcelMachineId}
              />
            )}
          </Form.Group>
        </div>
        {optimisticLockError &&
          <div className='alert alert-danger'>
            Version mismatch, please try updating parcel again.
          </div>}
        <div className="mt-2 d-flex justify-content-center">
          <Button type="submit" className="btn-successs">
            Save
          </Button>
        </div>
      </Form>
    </div>
  );
}

export default EditOrderPage;
