import React from 'react';
import { Form } from 'react-bootstrap';
import '../../styles/HomeForm.css';

function HomeForm({ onChange }) {
  return (
    <div className="home-form-container">
      <Form.Label>Post Code</Form.Label>
      <Form.Control
        onChange={onChange}
        type="number"
        required
        placeholder="Enter post code"
        name="postCode"
      />
      <Form.Control.Feedback type="invalid">Please choose a post code.</Form.Control.Feedback>
      <Form.Label>City</Form.Label>
      <Form.Control
        onChange={onChange}
        type="text"
        required
        placeholder="Enter city name"
        name="townName"
      />
      <Form.Control.Feedback type="invalid">Please choose a city.</Form.Control.Feedback>
      <Form.Label>Street Name</Form.Label>
      <Form.Control
        onChange={onChange}
        type="text"
        required
        placeholder={'Enter street name'}
        name="streetName"
      />
      <Form.Control.Feedback type="invalid">Please choose a street name.</Form.Control.Feedback>
      <Form.Label>Building Number</Form.Label>
      <Form.Control
        onChange={onChange}
        type="number"
        required
        name="buildingNumber"
        placeholder={'Enter Bulding name'}
      />
      <Form.Control.Feedback type="invalid">Please choose a building number.</Form.Control.Feedback>
    </div>
  );
}

export default HomeForm;
