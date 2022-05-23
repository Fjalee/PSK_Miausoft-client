import React from 'react';
import styles from './styles.module.css';

function TrackingParcelPoint({ eventInfo }) {
  const textColorClass = eventInfo.isDelivered ? styles.deliveredText : styles.notDeliveredText;

  const svgSrc = `/tracking-point-${eventInfo.isDelivered}.svg`;
  const imgAlt = eventInfo.isDelivered ? 'tracking point done' : 'tracking point not done';

  return (
    <>
      <div className={`row ${styles.mainRow}`}>
        <div className={`col-md-1 ${styles.svgRow}`}>
          <img className={styles.svg} src={svgSrc} alt={imgAlt} />
        </div>
        <div className={`col ${styles.text} ${textColorClass}`}>
          {`${eventInfo.text} ${eventInfo.date}`}
        </div>
      </div>
    </>
  );
}

export default TrackingParcelPoint;
