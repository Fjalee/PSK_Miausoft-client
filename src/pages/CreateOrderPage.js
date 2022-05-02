import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import HomeForm from '../components/CreateOrder/HomeForm';
import ParcelMachineForm from '../components/CreateOrder/ParcelMachineForm';
import { getDimensionTypes } from '../services/CreateOrderService';
import { getParcelMachines } from '../services/ParcelMachinesService';
import { Form, Button, Tooltip, OverlayTrigger } from 'react-bootstrap';
import { PatchQuestionFill } from 'react-bootstrap-icons';

const styles = {
  tab: {
    display: 'flex',
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '10px',
    paddingTop: '20px',
  },
  btn: {
    color: 'black',
    backgroundColor: 'white',
    border: '2px solid #e9ecef',
    borderBottom: '2px solid #e9ecef',
    borderRight: '2px solid #e9ecef',
    borderLeft: '2px solid #e9ecef',
    flex: '1 1 auto',
    borderRadius: '10px 10px 10px 10px',
    textDecoration: 'none',
    paddingTop: '20px',
    paddingBottom: '20px',
    marginRight: '20',
    fontFamily: 'Roboto',
  },
  active: {
    backgroundColor: '#e9ecef',
    borderBottom: '2px solid black',
    borderRight: '2px solid black',
    borderLeft: '2px solid black',
    borderTop: '2px solid black',
    textDecoration: 'underline',
  },
};

function CreateOrderPage() {
  const navigate = useNavigate();
  const { deliveryType } = useParams();

  const [parcelDimensions, setParcelDimensions] = useState([]);
  const [parcelMachines, setParcelMachines] = useState([]);

  const [newParcel, setNewParcel] = useState({
    deliveryTypeId: 1,
    dimensionsId: 1,
    startAddress: null,
    destinationAddress: null,
    startParcelMachineId: null,
    destinationParcelMachineId: null,
  });

  useEffect(() => {
    const fetchData = async () => {
      const dimensions = await getDimensionTypes();
      const machines = await getParcelMachines();

      setParcelDimensions(dimensions);
      setParcelMachines(machines);
      return;
    };

    fetchData();
  }, []);

  const availableDeliveryTypes = [
    'From Home To Home',
    'From Home To Parcel Machine',
    'From Parcel Machine To Parcel Machine',
    'From Parcel Machine To Home',
  ];

  const formSubmit = (e) => {
    e.preventDefault();
    console.log(newParcel);
  };

  const dimensionsChange = (e) => {
    setNewParcel({ ...newParcel, dimensionsId: e.target.value });
  };

  const startAddressChange = (e) => {
    setNewParcel({ ...newParcel, startAddress: e.target.value, startParcelMachineId: null });
  };

  const destinationAddressChange = (e) => {
    setNewParcel({
      ...newParcel,
      destinationAddress: e.target.value,
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

  const onDeliveryTypeChange = (type, idx) => {
    const startFormDoesntChange = () =>
      setNewParcel({
        ...newParcel,
        deliveryTypeId: idx + 1,
        destinationParcelMachineId: null,
        destinationAddress: null,
      });
    const destinationFormDoesntChange = () =>
      setNewParcel({
        ...newParcel,
        deliveryTypeId: idx + 1,
        startParcelMachineId: null,
        startAddress: null,
      });

    if (
      (type === 'FromHomeToHome' && deliveryType === 'FromHomeToParcelMachine') ||
      (type === 'FromHomeToParcelMachine' && deliveryType === 'FromHomeToHome') ||
      (type === 'FromParcelMachineToParcelMachine' && deliveryType === 'FromParcelMachineToHome') ||
      (type === 'FromParcelMachineToHome' && deliveryType === 'FromParcelMachineToParcelMachine')
    ) {
      startFormDoesntChange();
    } else if (
      (type === 'FromHomeToHome' && deliveryType === 'FromParcelMachineToHome') ||
      (type === 'FromHomeToParcelMachine' && deliveryType === 'FromParcelMachineToParcelMachine') ||
      (type === 'FromParcelMachineToParcelMachine' && deliveryType === 'FromHomeToParcelMachine') ||
      (type === 'FromParcelMachineToHome' && deliveryType === 'FromHomeToHome')
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
                {obj.label}
              </option>
            ))}
          </Form.Select>
          <OverlayTrigger
            placement={'right'}
            overlay={
              <Tooltip>
                {parcelDimensions.map((dim) => (
                  <p key={dim.id}>
                    <b>{dim.label}</b> - {dim.length}x{dim.width}x{dim.height}cm - {dim.price}&euro;
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
            {deliveryType === 'FromHomeToHome' || deliveryType === 'FromHomeToParcelMachine' ? (
              <HomeForm start={true} onChange={startAddressChange} />
            ) : (
              <ParcelMachineForm
                start={true}
                onChange={startParcelMachineChange}
                machines={parcelMachines}
              />
            )}
          </Form.Group>
          <Form.Group className="col">
            {deliveryType === 'FromHomeToHome' || deliveryType === 'FromParcelMachineToHome' ? (
              <HomeForm start={false} onChange={destinationAddressChange} />
            ) : (
              <ParcelMachineForm
                start={false}
                onChange={destinationParcelMachineChange}
                machines={parcelMachines}
              />
            )}
          </Form.Group>
        </div>
        <div className="mt-2 d-flex justify-content-center">
          <Button type="submit" className="btn-successs">
            Continue
          </Button>
        </div>
      </Form>
    </div>
  );
}

export default CreateOrderPage;
