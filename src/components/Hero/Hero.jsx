import React from 'react';
import styles from './Hero.module.scss';
import Image from 'next/image';

import coverImage from '../../images/cover.jpg';
import profileImage from '../../images/profile.jpg';

const Hero = () => {
  return (
    <div className={styles['hero']}>
      <div className={styles['hero-cover']}>
        <Image
          src={coverImage}
          alt="Gihan Saranga Siriwardhana - Lead Engineer at Maash"
          width={coverImage.width}
          height={coverImage.height}
          style={{ width: '100%', height: 'auto' }}
          priority
          placeholder="blur"
          quality={85}
        />
      </div>
      <div className={styles['hero-data']}>
        <div className={styles['hero-data-profile-pic']}>
          <Image
            src={profileImage}
            alt="Gihan Saranga Siriwardhana profile photo"
            width={250}
            height={250}
            className={styles['image']}
            loading="lazy"
            placeholder="blur"
            quality={80}
          />
        </div>
        <div className={styles['name-container']}>
          <h1 className={styles['name']}>Gihan Saranga Siriwardhana</h1>
          <p className={styles['profession']}>Lead Engineer at Maash</p>
        </div>
      </div>
    </div>
  );
};

export default Hero;
