import React from 'react';
import '../styles/ParcelInfo.css';

function ParcelInfo({ data }) {
  return (
    <div>
      <div className="card-parcel-info">
        <div className="title">Delivery Information</div>
        <div className="info">
          <div className="row">
            <div className="col-7">
              <span id="heading">Payment Status</span>
              <br />
              <span id="details">{data.payment.status}</span>
            </div>
            <div className="col-5 pull-right">
              <span id="heading">Delivery Method</span>
              <br />
              <span id="details">{data.deliveryMethod}</span>
            </div>

            <div className="col-7">
              <span id="heading">Start Address</span>
              <br />
              <span id="details">
                {' '}
                {data.deliveryMethod === 'HOME_TO_HOME' ||
                data.deliveryMethod === 'HOME_TO_PARCEL_MACHINE' ? (
                  <p>{data.startAddress}</p>
                ) : (
                  <p>{data.startParcelMachine.address} (PARCEL MACHINE)</p>
                )}
              </span>
            </div>
            <div className="col-5 pull-right">
              <span id="heading">Destination Address</span>
              <br />
              <span id="details">
                {' '}
                {data.deliveryMethod === 'HOME_TO_HOME' ||
                data.deliveryMethod === 'PARCEL_MACHINE_TO_HOME' ? (
                  <p>{data.destinationAddress}</p>
                ) : (
                  <p>{data.destinationParcelMachine.address} (PARCEL MACHINE)</p>
                )}
              </span>
            </div>
          </div>
        </div>
        <div className="pricing">
          <div className="row">
            <div className="col-9">
              <span id="name">Delivery Price:</span>
            </div>
            <div className="col-3">
              <span id="price">
                {data.payment.amount} {data.payment.currencyCode}
              </span>
            </div>
          </div>
          <div className="row">
            <div className="col-9">
              <span id="name">Parcel Size:</span>
            </div>
            <div className="col-3">
              <span id="price">{data.dimensions.size}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ParcelInfo;
