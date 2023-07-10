import { Card } from '@mui/material';
import React from 'react';

import styles from './Education.module.scss';
import ExperienceCard from '../common/ExperianceCard/ExperienceCard';

import sliitLogo from '../../images/sliit.png';
import esoftLogo from '../../images/esoft.png';
import britishLogo from '../../images/british.png';
import EducationCard from '../common/EducationCard/EducationCard';

const EducationData = [
  {
    institute: 'Sri Lanka Institute of Information Technology (SLIIT)',
    timeFrom: 'January 2017',
    timeTo: 'January 2021',
    degree:
      'B.Sc. Special (Hons) – Information Technology (Specialization – Software Engineering)',
    logo: sliitLogo,
  },
  {
    institute: 'Esoft Metro Campus',
    timeFrom: 'August 2016',
    timeTo: 'February 2017',
    degree: 'Diploma in Information Technology',
    logo: esoftLogo,
  },
  {
    institute: 'British Council',
    timeFrom: 'November 2018',
    timeTo: 'December 2018',
    degree: 'Certification in Presentation Skills',
    logo: britishLogo,
  },
];

const Education = () => {
  
  return (
    <div className={styles['card-container']}>
      <Card variant="outlined">
        <div className={styles['about-container']}>
          <h3 className={styles['about-container-title']}>Education</h3>
          {EducationData.map((value, key) => {
            return <EducationCard key={key} data={value} />;
          })}
        </div>
      </Card>
    </div>
  );
};

export default Education;
