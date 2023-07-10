import { Button, Card } from '@mui/material';
import React from 'react';

import styles from './Contact.module.scss';

import LocationOnIcon from '@mui/icons-material/LocationOn';
import CallIcon from '@mui/icons-material/Call';
import EmailIcon from '@mui/icons-material/Email';

import LinkedInIcon from '@mui/icons-material/LinkedIn';
import FacebookIcon from '@mui/icons-material/Facebook';
import GitHubIcon from '@mui/icons-material/GitHub';
import InstagramIcon from '@mui/icons-material/Instagram';
import { FaStackOverflow } from 'react-icons/fa';

const Contact = () => {
  return (
    <div className={styles['card-container']}>
      <Card variant="outlined">
        <div className={styles['about-container']}>
          <h3 className={styles['about-container-title']}>Contact Me</h3>

          <div className={styles['about-container-detail']}>
            <LocationOnIcon />
            <p className={styles['about-container-text']}>Colombo, Sri Lanka</p>
          </div>
          <div className={styles['about-container-detail']}>
            <CallIcon />
            <p className={styles['about-container-text']}>
              <a href="tel:+94714914133">+94 71 491 4133</a>
            </p>
          </div>
          <div className={styles['about-container-detail']}>
            <CallIcon />
            <p className={styles['about-container-text']}>
              <a href="tel:+94769938710">+94 76 993 8710</a>
            </p>
          </div>
          <div className={styles['about-container-detail']}>
            <EmailIcon />
            <p className={styles['about-container-text']}>
              <a href="mailto:gihanrcg1997@gmail.com">gihanrcg1997@gmail.com</a>
            </p>
          </div>
          <div className={styles['about-container-detail']}>
            <EmailIcon />
            <p className={styles['about-container-text']}>
              <a href="mailto:gihan@onramper.com">gihan@onramper.com</a>
            </p>
          </div>

          <div className={styles['social-icons']}>
            <Button
              style={{ textTransform: 'none', backgroundColor: '#0A66C2' }}
              variant="contained"
              case
              endIcon={<LinkedInIcon />}
              href="https://www.linkedin.com/in/gihan-saranga-siriwardhana"
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn
            </Button>
            <Button
              style={{ textTransform: 'none', backgroundColor: '#ef8236' }}
              variant="contained"
              case
              endIcon={<FaStackOverflow />}
              href="https://stackoverflow.com/users/10086033/gihan-saranga-siriwardhana"
              target="_blank"
              rel="noopener noreferrer"
            >
              Stack Overflow
            </Button>
            <Button
              style={{ textTransform: 'none', backgroundColor: '#141414' }}
              variant="contained"
              case
              endIcon={<GitHubIcon />}
              href="https://github.com/gihanrcg"
              target="_blank"
              rel="noopener noreferrer"
            >
              Github
            </Button>

            <Button
              style={{ textTransform: 'none', backgroundColor: '#3b5998' }}
              variant="contained"
              case
              endIcon={<FacebookIcon />}
              href="https://www.facebook.com/gihan.s.siriwardhana"
              target="_blank"
              rel="noopener noreferrer"
            >
              Facebook
            </Button>

            <Button
              style={{
                textTransform: 'none',
                backgroundImage:
                  'linear-gradient(45deg,#405DE6,#5851DB,#833AB4,#C13584,#E1306C,#FD1D1D,#F56040,#F77737,#FCAF45,#FFDC80)',
              }}
              variant="contained"
              case
              endIcon={<InstagramIcon />}
              href="https://www.instagram.com/gihan_saranga_siriwardhana/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Instagram
            </Button>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default Contact;
