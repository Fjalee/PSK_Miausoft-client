import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { getAll } from '../services/ParcelsService';
import { Table, Button } from 'react-bootstrap';
import '../styles/pages/AllParcelsPage.css';

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
    <div className="layout-allparcels">
      <Table striped hover className="styled-table">
        <thead>
          <tr className="allparcels-names">
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
                <td className="allparcels-buttons-flex">
                  <Button
                    className="allparcels-button"
                    variant="dark"
                    onClick={() => {
                      navigate('/parcel/' + x.id);
                    }}
                  >
                    View Information
                  </Button>
                  <Button
                    className="allparcels-button"
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
