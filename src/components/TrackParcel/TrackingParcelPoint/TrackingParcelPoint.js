import React from 'react';
import styles from './styles.module.css';

function TrackingParcelPoint({text, isDelivered = false}) {
  const textColorClass = isDelivered ? styles.deliveredText : styles.notDeliveredText;

  const svgSrc = `/tracking-point-${isDelivered}.svg`;
  const imgAlt = isDelivered ? 'tracking point done' : 'tracking point not done';

  return (<>
    <div className={`row ${styles.mainRow}`}>
      <div className={`col-md-1 ${styles.svgRow}`}>
        <img className={styles.svg} src={svgSrc} alt={imgAlt}/>
      </div>
      <div className={`col ${styles.text} ${textColorClass}`}>
        {text}
      </div>
    </div>
  </>);
}

export default TrackingParcelPoint;
