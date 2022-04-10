import React from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const Card = styled.div`
  max-width: 18rem;
  cursor: pointer;
  &:hover {
    background-color: #e9ecef;
  }
`;

function GoToOrderCreationCard() {
  const navigate = useNavigate();

  const cardOnClick = () => navigate('/createOrder/FromHomeToHome');

  return (
    <Card className="card border-dark mb-3" onClick={cardOnClick}>
      <div className="card-body text-dark">
        <h5 className="card-title">Deliver you parcel now!</h5>
      </div>
      <div className="card-footer bg-transparent border-dark">Footer</div>
    </Card>
  );
}

export default GoToOrderCreationCard;
