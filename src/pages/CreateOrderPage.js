import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import FromHomeToHomeForm from '../components/CreateOrder/FromHomeToHomeForm';
import FromHomeToParcelMachineForm from '../components/CreateOrder/FromHomeToParcelMachineForm';
import FromParcelMachineToParcelMachineForm from '../components/CreateOrder/FromParcelMachineToParcelMachineForm';
import FromParcelMachineToHomeForm from '../components/CreateOrder/FromParcelMachineToHomeForm';

const styles = {
  tab: {
    display: 'inline-flex',
    width: '100%',
  },
  btn: {
    color: 'black',
    backgroundColor: 'white',
    border: '2px solid #e9ecef',
    borderBottom: '2px solid #e9ecef',
    borderRight: '2px solid #e9ecef',
    borderLeft: '2px solid #e9ecef',
    flex: '1 1 auto',
    borderRadius: '0px 0px 10px 10px',
    textDecoration: 'none',
  },
  active: {
    backgroundColor: 'white',
    borderBottom: '2px solid black',
    borderRight: '2px solid black',
    borderLeft: '2px solid black',
    textDecoration: 'underline',
  },
};

function CreateOrderPage() {
  const navigate = useNavigate();
  const { deliveryType } = useParams();
  console.log(deliveryType);

  const availableDeliveryTypes = [
    'From Home To Home',
    'From Home To Parcel Machine',
    'From Parcel Machine To Parcel Machine',
    'From Parcel Machine To Home',
  ];

  return (
    <div id="page">
      <div style={styles.tab}>
        {availableDeliveryTypes.map((type, index) => (
          <button
            onClick={() => navigate('/createOrder/' + type.replaceAll(' ', ''))}
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
      <div>
        {
          {
            FromHomeToHome: <FromHomeToHomeForm />,
            FromHomeToParcelMachine: <FromHomeToParcelMachineForm />,
            FromParcelMachineToParcelMachine: <FromParcelMachineToParcelMachineForm />,
            FromParcelMachineToHome: <FromParcelMachineToHomeForm />,
          }[deliveryType]
        }
      </div>
    </div>
  );
}

export default CreateOrderPage;
