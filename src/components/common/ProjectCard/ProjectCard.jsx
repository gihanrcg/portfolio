import React from 'react';
import styles from './ProjectCard.module.scss';
import Image from 'next/image';

import InsertLinkIcon from '@mui/icons-material/InsertLink';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';

const ProjectCard = ({
  data: { title, details, tech, image, link, awards },
}) => {
  return (
    <div className={styles['project-card']}>
      <div className={styles['project-card-image']}>
        <Image src={image} alt={title} objectFit="cover" fill={true} />
      </div>
      <div className={styles['project-card-data']}>
        <p className={styles['project-card-data-title']}>{title}</p>
        <div className={styles['project-card-data-tech']}>
          {tech.split('|').map((t, index) => {
            return <p key={index}>{t.trim()}</p>;
          })}
        </div>
        <div className={styles['project-card-data-link']}>
          <InsertLinkIcon />
          <p className={styles['project-card-data-link-text']}>
            <a target="_blank" rel="noopener noreferrer" href={link}>
              {link}
            </a>
          </p>
        </div>
        <p className={styles['project-card-data-details']}>{details}</p>

        {awards &&
          awards.map((award, key) => {
            return (
              <div key={key} className={styles['project-card-data-award']}>
                <EmojiEventsIcon />
                <p className={styles['project-card-data-award-text']}>{award}</p>
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default ProjectCard;
