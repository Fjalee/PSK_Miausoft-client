import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import HomeForm from '../components/CreateOrder/HomeForm';
import ParcelMachineForm from '../components/CreateOrder/ParcelMachineForm';
import { createOrder } from '../services/CreateOrderService';
import { getParcelDimensions } from '../services/ParcelDimensionsService';
import { getParcelMachines } from '../services/ParcelMachinesService';
import { Form, Button, Tooltip, OverlayTrigger } from 'react-bootstrap';
import { PatchQuestionFill } from 'react-bootstrap-icons';

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

const initialAddress = {
  countryCode: 'LT',
  postCode: null,
  townName: null,
  streetName: null,
  buildingNumber: null,
};

function CreateOrderPage() {
  const navigate = useNavigate();
  const { deliveryType } = useParams();

  const [parcelDimensions, setParcelDimensions] = useState([]);
  const [parcelMachines, setParcelMachines] = useState([]);

  const [newParcel, setNewParcel] = useState({
    deliveryMethod: convertToContractDeliveryMethod(deliveryType),
    dimensionsId: 1,
    startAddress: { ...initialAddress },
    destinationAddress: { ...initialAddress },
    startParcelMachineId: null,
    destinationParcelMachineId: null,
  });

  useEffect(() => {
    const fetchData = async () => {
      const dimensions = await getParcelDimensions();
      const machines = await getParcelMachines();

      setParcelDimensions(dimensions);
      setParcelMachines(machines);
      return;
    };

    fetchData();
  }, []);

  const formSubmit = async (e) => {
    e.preventDefault();
    await createOrder(newParcel);
  };

  const dimensionsChange = (e) => {
    setNewParcel({ ...newParcel, dimensionsId: e.target.value });
  };

  const startAddressChange = (e) => {
    const newAddress = newParcel.startAddress;
    newAddress[e.target.name] = e.target.value;
    setNewParcel({
      ...newParcel,
      startAddress: newAddress,
      startParcelMachineId: null,
    });
  };

  const destinationAddressChange = (e) => {
    const newAddress = newParcel.destinationAddress;
    newAddress[e.target.name] = e.target.value;
    setNewParcel({
      ...newParcel,
      destinationAddress: newAddress,
      destinationParcelMachineId: null,
    });
  };

  const startParcelMachineChange = (e) => {
    setNewParcel({ ...newParcel, startParcelMachineId: e.target.value, startAddress: null });
  };

  const destinationParcelMachineChange = (e) => {
    setNewParcel({
      ...newParcel,
      destinationParcelMachineId: e.target.value,
      destinationAddress: null,
    });
  };

  const onDeliveryTypeChange = (type) => {
    const startFormDoesntChange = () =>
      setNewParcel({
        ...newParcel,
        deliveryMethod: convertToContractDeliveryMethod(type),
        destinationParcelMachineId: null,
        destinationAddress: initialAddress,
      });
    const destinationFormDoesntChange = () =>
      setNewParcel({
        ...newParcel,
        deliveryMethod: convertToContractDeliveryMethod(type),
        startParcelMachineId: null,
        startAddress: initialAddress,
      });

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
    } else {
      // Set almost everything to null
      startFormDoesntChange();
      destinationFormDoesntChange();
    }

    navigate('/createOrder/' + type.replaceAll(' ', ''));
  };

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
          >
            {parcelDimensions.map((obj) => (
              <option key={obj.id} value={obj.id}>
                {obj.size}
              </option>
            ))}
          </Form.Select>
          <OverlayTrigger
            placement={'right'}
            overlay={
              <Tooltip>
                {parcelDimensions.map((dim) => (
                  <p key={dim.id}>
                    <b>{dim.size}</b> - {dim.maxLength}x{dim.maxWidth}x{dim.maxHeight}cm -{' '}
                    {dim.price}&euro;
                  </p>
                ))}
              </Tooltip>
            }
          >
            <PatchQuestionFill className="" size={36} />
          </OverlayTrigger>
        </Form.Group>
        <div className="row mt-2">
          <Form.Group className="col">
            {deliveryType === 'HomeToHome' || deliveryType === 'HomeToParcelMachine' ? (
              <HomeForm onChange={startAddressChange} />
            ) : (
              <ParcelMachineForm onChange={startParcelMachineChange} machines={parcelMachines} />
            )}
          </Form.Group>
          <Form.Group className="col">
            {deliveryType === 'HomeToHome' || deliveryType === 'ParcelMachineToHome' ? (
              <HomeForm onChange={destinationAddressChange} />
            ) : (
              <ParcelMachineForm
                onChange={destinationParcelMachineChange}
                machines={parcelMachines}
              />
            )}
          </Form.Group>
        </div>
        <div className="mt-2 d-flex justify-content-center">
          <Button type="submit" className="btn-successs">
            Pay
          </Button>
        </div>
      </Form>
    </div>
  );
}

export default CreateOrderPage;
