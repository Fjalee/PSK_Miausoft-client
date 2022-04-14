import React from 'react';
import { Form } from 'react-bootstrap';

function ParcelMachineForm({ start, machines, onChange }) {
  const helper = (first, second) => (start === true ? first : second);

  return (
    <div>
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
          <option key={obj.id} value={obj.id} disabled={!obj.hasEmptyLocker}>
            {obj.address}
          </option>
        ))}
      </Form.Select>
    </div>
  );
}

export default ParcelMachineForm;
