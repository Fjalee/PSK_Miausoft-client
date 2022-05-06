import React from 'react';
import { Form } from 'react-bootstrap';
import '../../styles/ParcelMachineForm.css';

function ParcelMachineForm({ start, machines, onChange }) {
  const helper = (first, second) => (start === true ? first : second);

  return (
    <div className="parcel-form-container">
      <Form.Label>{helper('Start', 'Destination')} Parcel Machine</Form.Label>
      <Form.Select
        name={helper('startParcelMachineId', 'destinationParcelMachineId')}
        required
        onChange={onChange}
      >
        <option value="" hidden>
          Choose Parcel Machine
        </option>
        {machines.map((obj) => (
          <option key={obj.id} value={obj.id} disabled={obj.isEmpty}>
            {obj.address}
          </option>
        ))}
      </Form.Select>
    </div>
  );
}

export default ParcelMachineForm;
