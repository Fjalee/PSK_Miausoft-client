import React from 'react';
import { Form } from 'react-bootstrap';

function HomeForm({ start, onChange }) {
  const helper = (first, second) => (start === true ? first : second);

  return (
    <div>
      <Form.Label>{helper('Start', 'Destination')} Address</Form.Label>
      <Form.Control
        onChange={onChange}
        type="text"
        required
        placeholder={'Enter ' + helper('pickup', 'destination') + ' address'}
        name={helper('startAddress', 'destinationAddress')}
      />
    </div>
  );
}

export default HomeForm;
