import { Card } from '@mui/material';
import React from 'react';

import styles from './About.module.scss';

const About = () => {
  return (
    <div className={styles['card-container']}>
      <Card variant="outlined">
        <div className={styles['about-container']}>
          <h3 className={styles['about-container-title']}>About</h3>
          <p className={styles['about-container-text']}>
            Problem solver, Leader, Tech Enthusiast, Public Speaker and a
            student who seeks opportunities to enhance and share knowledge in
            any way I can .
          </p>
        </div>
      </Card>
    </div>
  );
};

export default About;
