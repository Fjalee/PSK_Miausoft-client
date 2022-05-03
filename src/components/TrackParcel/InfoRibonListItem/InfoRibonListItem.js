import React from 'react';
import styles from './styles.module.css';

function InfoRibonListItem({description, text}) {
  return (
    <li>
        <span className={styles.bold}>
            {`${description}:\xa0\xa0\xa0`}
        </span>
        {text}
    </li>
  );
}

export default InfoRibonListItem;
