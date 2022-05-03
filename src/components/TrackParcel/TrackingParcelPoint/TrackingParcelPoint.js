import React from 'react';
import styles from './styles.module.css';

function TrackingParcelPoint({eventInfo}) {
  const textColorClass = eventInfo.isDelivered ? styles.deliveredText : styles.notDeliveredText;

  const svgSrc = `/tracking-point-${eventInfo.isDelivered}.svg`;
  const imgAlt = eventInfo.isDelivered ? 'tracking point done' : 'tracking point not done';

  const formatedDate = '\xa0\xa0\xa0' +
    eventInfo.date.getFullYear() + '-' +
    eventInfo.date.getMonth() + '-' +
    eventInfo.date.getDate() + '\xa0\xa0\xa0' +
    eventInfo.date.getHours() + ':' +
    eventInfo.date.getMinutes();

  return (<>
    <div className={`row ${styles.mainRow}`}>
      <div className={`col-md-1 ${styles.svgRow}`}>
        <img className={styles.svg} src={svgSrc} alt={imgAlt}/>
      </div>
      <div className={`col ${styles.text} ${textColorClass}`}>
        {`${eventInfo.text} ${formatedDate}`}
      </div>
    </div>
  </>);
}

export default TrackingParcelPoint;
