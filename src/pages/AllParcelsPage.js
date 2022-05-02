import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { getAll } from '../services/ParcelsService';
import { Table, Button } from 'react-bootstrap';

function AllParcelsPage() {
  const navigate = useNavigate();
  const [parcels, setParcels] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const parcels = await getAll();
      setParcels(parcels);
      return;
    };

    fetchData();
  }, []);

  return (
    <div>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>Delivery Method</th>
            <th>Payment Status</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {parcels.map((x, idx) => {
            return (
              <tr key={x.id}>
                <td>{idx}</td>
                <td>{x.deliveryMethod}</td>
                <td>{x.payment.status}</td>
                <td>
                  <Button
                    variant="dark"
                    onClick={() => {
                      navigate('/parcel/' + x.id);
                    }}
                  >
                    View Information
                  </Button>
                  <Button
                    variant="dark"
                    onClick={() => {
                      navigate('/admin/deliveryplan/' + x.id);
                    }}
                  >
                    Create Delivery Plan
                  </Button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </Table>
    </div>
  );
}

export default AllParcelsPage;
