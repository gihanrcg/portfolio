
import React from 'react';
import styles from './ExperianceCard.module.scss';

export const TimelineCard = ({ data }) => {
  return (
    <div className={styles['timeline-card']}>
      <p  className={styles['timeline-card-title']}>{data.title}</p>
      <p  className={styles['timeline-card-duration']}>{`${data.timeFrom} - ${data.timeTo}`}</p>
      <p  className={styles['timeline-card-details']}>{data.details}</p>
    </div>
  );
};
