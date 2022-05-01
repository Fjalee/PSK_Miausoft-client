/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { getParcel, createDeliveryPlan } from '../services/ParcelsService';
import { getParcelMachines } from '../services/ParcelMachinesService';
import { getWarehouses } from '../services/WarehousesService';
import { Form, Button } from 'react-bootstrap';

function DeliveryPlan() {
  const navigate = useNavigate();
  const { parcelId } = useParams();
  const [availableParcelMachines, setAvailableParcelMachines] = useState([]);
  const [availableWarehouses, setAvailableWarehouses] = useState([]);
  const [selectedParcelMachine, setSelectedParcelMachine] = useState(''); // JSON
  const [selectedWarehouse, setSelectedWarehouse] = useState(''); // JSON
  const [selectedStop, setSelectedStop] = useState(0);
  const [stops, setStops] = useState([]);
  const [disabledAddBtn, setDisabledAddBtn] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      const warehouses = await getWarehouses();
      let machines = await getParcelMachines();
      const parcel = await getParcel(parcelId);
      const stops = [];

      if (parcel.startParcelMachine !== null) {
        stops[0] = { address: parcel.startParcelMachine.address };
        machines = machines.filter((x) => x.id != parcel.startParcelMachine.id && !x.isEmpty);
      } else {
        stops[0] = { address: parcel.startAddress };
      }

      if (parcel.destinationParcelMachine !== null) {
        stops[1] = { address: parcel.destinationParcelMachine.address };
        machines = machines.filter((x) => x.id != parcel.destinationParcelMachine.id && !x.isEmpty);
      } else {
        stops[1] = { address: parcel.destinationAddress };
      }

      setStops(stops);
      setAvailableParcelMachines(machines);
      setAvailableWarehouses(warehouses);
      return;
    };

    fetchData();
    setSelectedStop(0);
  }, []);

  const parcelMachineOnChange = (e) => {
    setSelectedParcelMachine(e.target.value);
    setSelectedWarehouse('');
    setDisabledAddBtn(false);
  };

  const warehouseOnChange = (e) => {
    setSelectedParcelMachine('');
    setSelectedWarehouse(e.target.value);
    setDisabledAddBtn(false);
  };

  const addStopSubmit = () => {
    let newObj;
    if (selectedParcelMachine !== '') {
      const parcelMachine = JSON.parse(selectedParcelMachine);
      newObj = {
        parcelMachineId: parcelMachine.id,
        address: parcelMachine.address,
      };
      setAvailableParcelMachines(availableParcelMachines.filter((x) => x.id !== parcelMachine.id));
    } else {
      const warehouse = JSON.parse(selectedWarehouse);
      newObj = {
        warehouseId: warehouse.id,
        address: warehouse.address,
      };
      setAvailableWarehouses(availableWarehouses.filter((x) => x.id !== warehouse.id));
    }

    const newStops = [
      ...stops.slice(0, selectedStop + 1),
      newObj,
      ...stops.slice(selectedStop + 1),
    ];
    setStops(newStops);
    setSelectedStop(stops.length - 1);
    setSelectedParcelMachine('');
    setSelectedWarehouse('');
    setDisabledAddBtn(true);
  };

  const submitPlanCreation = () => {
    const payload = {
      parcelId: parcelId,
      stops: [],
    };
    stops.slice(1, -1).map((x) => {
      payload.stops.push({
        parcelMachineId: x.parcelMachineId,
        warehouseId: x.warehouseId,
      });
    });
    createDeliveryPlan(payload);
    navigate('/admin/parcels');
  };

  return (
    <div className="row" style={{ width: '100%' }}>
      <div className="col-4">
        <Button variant="dark" className="w-100 m-2" onClick={submitPlanCreation}>
          Complete
        </Button>
        <div className="m-2">
          {stops.map((x, idx) => {
            return <div key={idx}>{x.address}</div>;
          })}
        </div>
      </div>
      <div className="col-8">
        <Form.Label>Parcel Machine</Form.Label>
        <Form.Select value={selectedParcelMachine} onChange={parcelMachineOnChange}>
          <option value="" hidden>
            Choose Parcel Machine
          </option>
          {availableParcelMachines.map((obj) => (
            <option
              key={obj.id}
              value={JSON.stringify({ id: obj.id, address: obj.address })}
              disabled={obj.isEmpty}
            >
              {obj.address}
            </option>
          ))}
        </Form.Select>
        <Form.Label>Warehouse</Form.Label>
        <Form.Select value={selectedWarehouse} onChange={warehouseOnChange}>
          <option value="" hidden>
            Choose Warehouse
          </option>
          {availableWarehouses.map((obj) => (
            <option key={obj.id} value={JSON.stringify({ id: obj.id, address: obj.address })}>
              {obj.address}
            </option>
          ))}
        </Form.Select>
        <Form.Label>After</Form.Label>
        <Form.Select
          value={selectedStop}
          onChange={(e) => {
            setSelectedStop(parseInt(e.target.value));
          }}
        >
          {stops.slice(0, -1).map((obj, idx) => (
            <option key={idx} value={idx}>
              {obj.address}
            </option>
          ))}
        </Form.Select>
        <Button variant="dark" onClick={addStopSubmit} disabled={disabledAddBtn}>
          Add stop
        </Button>
      </div>
    </div>
  );
}

export default DeliveryPlan;
