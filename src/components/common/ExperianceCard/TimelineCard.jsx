import React from 'react';
import styles from './ExperianceCard.module.scss';

export const TimelineCard = ({ data }) => {
  const details = Array.isArray(data.details)
    ? data.details
    : data.details
      ? [data.details]
      : [];
  const skills = Array.isArray(data.skills) ? data.skills : [];

  return (
    <div className={styles['timeline-card']}>
      <p className={styles['timeline-card-title']}>{data.title}</p>
      {data.timeFrom && data.timeTo && (
        <p
          className={styles['timeline-card-duration']}
        >{`${data.timeFrom} - ${data.timeTo}`}</p>
      )}
      {details.length > 0 && (
        <ul className={styles['timeline-card-details']}>
          {details.map((point, i) => (
            <li key={i}>{point}</li>
          ))}
        </ul>
      )}
      {skills.length > 0 && (
        <div className={styles['timeline-card-skills']}>
          {skills.map((skill, i) => (
            <span key={i} className={styles['timeline-card-skill']}>
              {skill}
            </span>
          ))}
        </div>
      )}
    </div>
  );
};
