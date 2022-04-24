import React from 'react';
import { Form } from 'react-bootstrap';

function HomeForm({ onChange }) {
  return (
    <div>
      <Form.Label>Post Code</Form.Label>
      <Form.Control
        onChange={onChange}
        type="number"
        required
        placeholder="Enter post code"
        name="postCode"
      />
      <Form.Label>City</Form.Label>
      <Form.Control
        onChange={onChange}
        type="text"
        required
        placeholder="Enter city name"
        name="townName"
      />
      <Form.Label>Street Name</Form.Label>
      <Form.Control
        onChange={onChange}
        type="text"
        required
        placeholder={'Enter street name'}
        name="streetName"
      />
      <Form.Label>Building Number</Form.Label>
      <Form.Control onChange={onChange} type="number" required name="buildingNumber" />
    </div>
  );
}

export default HomeForm;
