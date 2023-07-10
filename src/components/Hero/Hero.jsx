import React from 'react';
import styles from './Hero.module.scss';
import Image from 'next/image';

import coverImage from '../../images/cover.jpg';
import profileImage from '../../images/profile.jpg';

const Hero = () => {
  return (
    <div className={styles['hero']}>
      <div className={styles['hero-cover']}>
        <Image src={coverImage} alt="Cover Image" layout="responsive" />
      </div>
      <div className={styles['hero-data']}>
        <div className={styles['hero-data-profile-pic']}>
          <Image
            src={profileImage}
            alt="Cover Image"
            className={styles['image']}
          />
        </div>
        <div className={styles['name-container']}>
          <h2 className={styles['name']}>Gihan Saranga Siriwardhana</h2>
          <h4 className={styles['profession']}>
            Senior Software Engineer at Onramper
          </h4>
        </div>
      </div>
    </div>
  );
};

export default Hero;
