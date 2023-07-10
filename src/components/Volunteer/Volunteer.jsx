import { Card } from '@mui/material';
import React from 'react';

import styles from './Experience.module.scss';
import ExperienceCard from '../common/ExperianceCard/ExperienceCard';

import MlsaLogo from '../../images/mlsa.jpg';
import msclubLogo from '../../images/msclub.png';
import fcscLogo from '../../images/fcsc.png';

const VolunteerData = {
  mlsa: {
    company: 'Microsoft Learn',
    logo: MlsaLogo,
    country: 'United States',
    positions: [
      {
        title: 'Microsoft Learn Student Ambassador - GOLD Level',
        details:
          'Microsoft Student Partner program is re-branded to Microsoft Learn Student Ambassadors, I am really excited to have the privilege to be selected as a Microsoft Learn Student Ambassador which a global group of campus leaders who are eager to help fellow students, create robust tech communities and develop technical and career skills for the future, I am honored and humble to be the first and currently the only Gold Level Student Ambassador in Sri Lanka.',
        timeFrom: 'August 2019',
        timeTo: 'September 2021',
      },
      {
        title: 'Microsoft Student Partner',
        details:
          'I was selected as one out of seven Microsoft Student Partners since the year 2019. I have been conducting Techtalks, workshops, and hackathons all around Sri Lanka as an MSP to improve the tech community in Sri Lanka.',
        timeFrom: 'August 2019',
        timeTo: 'August 2020',
      },
    ],
  },
  msclub: {
    company: 'MS Club of SLIIT',
    logo: msclubLogo,
    country: 'Colombo, Sri Lanka',
    positions: [
      {
        title: 'President | Co-Founder',
        details:
          'I was the active president of the MS Club which tries to bridge the knowledge and technology gap between a professional and an undergraduate',
        timeFrom: 'July 2019',
        timeTo: 'November 2020',
      },
    ],
  },
  fcsc: {
    company: 'Faculty of Computing Students Community - SLIIT',
    logo: fcscLogo,
    country: 'Colombo, Sri Lanka',
    positions: [
      {
        title: 'Committee Member',
        details:
          'I was a committee member in the main student body of the faculty of computing. I directly involved with all the events organized by faculty of computing throughout the year',
        timeFrom: 'February 2018',
        timeTo: 'March 2019',
      },
    ],
  },
};

const Volunteer = () => {
  
  return (
    <div className={styles['card-container']}>
      <Card variant="outlined">
        <div className={styles['about-container']}>
          <h3 className={styles['about-container-title']}>Volunteering</h3>
          {Object.entries(VolunteerData).map(([key, value]) => {
            return <ExperienceCard key={key} company={key} data={value} />;
          })}
        </div>
      </Card>
    </div>
  );
};

export default Volunteer;
