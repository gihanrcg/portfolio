import React from 'react';
import styles from './EducationCard.module.scss';
import Image from 'next/image';

const EducationCard = ({ company, data }) => {
  return (
    <div variant="outlined" className={styles['experience-card-container']}>
      <div className={styles['company-section']}>
        <div className={styles['company-image-container']}>
          <Image
            className={styles['company-image']}
            src={data.logo}
            alt={`${data.institute} logo`}
            fill
            sizes="(max-width: 992px) 50px, 60px"
            style={{ objectFit: 'contain' }}
            loading="lazy"
            quality={70}
          />
        </div>

        <div className={styles['company-data']}>
          <p className={styles['company-name']}>{data.degree}</p>
          <p className={styles['company-location']}>{data.institute}</p>
          <p
            className={styles['timeline-card-duration']}
          >{`${data.timeFrom} - ${data.timeTo}`}</p>
        </div>
      </div>
    </div>
  );
};

export default EducationCard;
