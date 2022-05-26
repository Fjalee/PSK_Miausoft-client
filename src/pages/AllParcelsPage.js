import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { getAll } from '../services/ParcelsService';
import { Table, Button } from 'react-bootstrap';
import '../styles/pages/AllParcelsPage.css';
import DeliveryTasksModal from '../components/DeliveryTasksModal';

const convertStartToNiceString = (parcel) => {
  if (parcel.startAddress != null) {
    return parcel.startAddress;
  } else if (parcel.startParcelMachine != null) {
    return '(PM)' + parcel.startParcelMachine.address;
  }
};

const convertDestToNiceString = (parcel) => {
  if (parcel.destinationAddress != null) {
    return parcel.destinationAddress;
  } else if (parcel.destinationParcelMachine != null) {
    return '(PM)' + parcel.destinationParcelMachine.address;
  }
};

const getDeliveryStatus = (parcel) => {
  if (parcel.deliveryPlan.length == 0) {
    return 'DELIVERY PLAN NOT CREATED';
  } else if (parcel.deliveryPlan[0].status == 'AWAITING') {
    return 'AWAITING';
  } else if (parcel.deliveryPlan[parcel.deliveryPlan.length - 1].status == 'DELIVERED') {
    return 'COMPLETED';
  } else {
    return 'IN PROGRESS';
  }
};

function AllParcelsPage() {
  const navigate = useNavigate();
  const [parcels, setParcels] = useState([]);
  const [selectedParcel, setSelectedParcel] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [forceUpdate, setForceUpdate] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const parcels = await getAll();
      setParcels(parcels);
      if (selectedParcel != null) {
        setSelectedParcel(parcels.filter((x) => x.id == selectedParcel.id)[0]);
      }
      return;
    };

    fetchData();
  }, [forceUpdate]);

  const onModalExit = () => {
    setShowModal(false);
    setSelectedParcel(null);
  };

  return (
    <div className="layout-allparcels">
      <Table striped hover className="styled-table">
        <thead>
          <tr className="allparcels-names">
            <th>#</th>
            <th>Delivery Method</th>
            <th>Payment Status</th>
            <th>Delivery Status</th>
            <th>Start</th>
            <th>Destination</th>
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
                <td>{getDeliveryStatus(x)}</td>
                <td>{convertStartToNiceString(x)}</td>
                <td>{convertDestToNiceString(x)}</td>
                <td>
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
                  {x.deliveryPlan.length !== 0 && (
                    <Button
                      variant="dark"
                      onClick={() => {
                        setSelectedParcel(x);
                        setShowModal(true);
                      }}
                    >
                      Complete Delivery Plan Tasks
                    </Button>
                  )}
                </td>
              </tr>
            );
          })}
        </tbody>
      </Table>
      <DeliveryTasksModal
        parcel={selectedParcel}
        display={showModal}
        onExit={onModalExit}
        onUpdate={setForceUpdate}
      />
    </div>
  );
}

export default AllParcelsPage;
