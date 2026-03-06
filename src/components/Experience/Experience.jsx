import { Card } from '@mui/material';
import React from 'react';

import styles from './Experience.module.scss';
import ExperienceCard from '../common/ExperianceCard/ExperienceCard';

import OnramperLogo from '../../images/onramper.png';
import SyscoLogo from '../../images/sysco.png';
import ApiumLogo from '../../images/apium.jpeg';
import MaashLogo from '../../images/maash.jpeg';

const ExperienceData = {
  Maash: {
    company: 'Maash',
    logo: MaashLogo,
    country: 'United States · Hybrid',
    positions: [
      {
        title: 'Lead Engineer',
        timeFrom: 'July 2025',
        timeTo: 'Present',
        details: [
          'Building a financial platform that gives freelancers and businesses in emerging markets access to stable digital dollars and faster cross-border payments, starting with Sri Lanka.',
          'Build and maintain the full frontend for both the retail mobile app and the business web platform.',
          'Support other engineers through reviews and guidance on integrating 3rd party service providers, ensuring smooth and secure connectivity.',
          'Integrate real-time monitoring tools that improve reliability and allow early detection of issues without compromising security.',
          'Lead code reviews and product reviews, set engineering standards, and help drive alignment between technical decisions and product strategy.',
          'Collaborate closely with product, UX, stakeholders, and users to ensure Maash continuously evolves into a tool that empowers people to manage and move money with confidence.',
        ],
        skills: [
          'Solana',
          'Web3',
          'ReactJS',
          'React Native',
          'TypeScript',
          'AWS',
          'Non Custodial Wallets',
          'Stable Coins',
          'Cross Border Payments',
          'Real Time Monitoring',
        ],
      },
    ],
  },
  // Carely: {
  //   company: 'Carely',
  //   logo: PlaceholderLogo,
  //   country: 'Sri Lanka · On-site',
  //   positions: [
  //     {
  //       title: 'Co-Founder',
  //       timeFrom: 'January 2026',
  //       timeTo: 'Present',
  //       details: [
  //         'Co-founded Carely with my wife to make professional home-based healthcare more accessible for Sri Lankan families.',
  //         'Connect families with verified nurses and caregivers for trusted care at home, with clear updates and secure care records.',
  //         'Built the service model, pricing, and care packages.',
  //         'Set up provider onboarding and verification (qualifications, licensing, experience).',
  //         'Designed visit workflows, family updates, and record handling.',
  //         'Leading growth and partnerships to scale care across Sri Lanka.',
  //       ],
  //       skills: ['Product', 'Operations', 'Healthcare'],
  //     },
  //   ],
  // },
  Apium: {
    company: 'Apium Innovations',
    logo: ApiumLogo,
    country: 'United Arab Emirates',
    description: [
      'Delivered high-impact Web3 and blockchain initiatives with leading brands and companies.',
      "Positioned Apium's solutions at the forefront of Web3 gaming and financial innovation.",
    ],
    positions: [
      {
        title: 'Principal Engineer',
        timeFrom: 'March 2025',
        timeTo: 'July 2025',
        details: [
          'Spearheaded engineering for the Mocaverse project by Animoca Brands, including the staking platform and MOCA Coin token system, enabling seamless Web3 engagement for communities and gaming ecosystems.',
          'Designed and delivered a B2B and B2C stable-coin wallet application on the Solana blockchain, supporting enterprise and consumer clients in asset management and secure transactions.',
          'Led the architecture and full-stack implementation of a real-time gaming metrics platform that collected player data, mapped performance to reward triggers, and managed distribution via Web3 channels.',
          'Defined the technical roadmap and aligned engineering deliverables with product and blockchain strategy.',
          'Oversaw architecture, conducted code reviews, managed DevOps pipelines, and addressed security and compliance for wallet and token systems on Solana.',
          'Mentored engineers and established practices for scalable real-time metric processing and token reward-distribution workflows.',
          'Collaborated with product, UX, and business stakeholders to translate requirements into performant and secure blockchain systems.',
        ],
        skills: [
          'Solana',
          'Web3',
          'Blockchain',
          'TypeScript',
          'React',
          'Node.js',
          'DevOps',
        ],
      },
    ],
  },
  Onramper: {
    company: 'Onramper',
    logo: OnramperLogo,
    country: 'Amsterdam, North Holland, Netherlands',
    positions: [
      {
        title: 'Senior Software Engineer',
        timeFrom: 'November 2022',
        timeTo: 'April 2025',
        details: [
          'Played a pivotal role in developing and scaling a leading fiat-to-crypto onramp aggregator. Platform supports 1,000+ cryptocurrencies, 130+ fiat currencies, and 120+ payment methods across 190+ countries, serving clients like Telegram, Coinbase, and Worldcoin.',
          'Platform Development: Engineered high-availability systems and wallet integrations, enhancing transaction success rates and reducing user fees.',
          'Unified Interface: Developed a seamless interface facilitating access to a vast array of cryptocurrencies and fiat currencies, improving user experience and conversion rates.',
          'Tech Stack: AWS Lambda, DynamoDB, Node.js, React.js, and React Query to build scalable and efficient systems.',
          "Global Reach: Contributed to expanding the platform's global coverage for numerous payment methods and currencies.",
          'Deepened expertise in Web3 infrastructure, full-stack development, DevOps practices, and building secure, high-performance systems at scale.',
        ],
        skills: ['Distributed Systems', 'Wallets', 'AWS', 'React', 'Node.js'],
      },
    ],
  },
  SyscoLabs: {
    company: 'Sysco LABS Sri Lanka',
    logo: SyscoLogo,
    country: 'Sri Lanka',
    positions: [
      {
        title: 'Senior Software Engineer',
        timeFrom: 'August 2022',
        timeTo: 'November 2022',
        details: [
          'Developed the "Sysco Shop" web application for Fortune 500 company Sysco, allowing thousands of businesses to query millions of products and process billions of dollars in orders from a single application.',
          'Part of the Ordering tribe as a full-stack developer, working end-to-end on key features.',
        ],
        skills: [
          'PostgreSQL',
          'Distributed Systems',
          'GraphQL',
          'React',
          'Node.js',
          'Kubernetes',
        ],
      },
      {
        title: 'Software Engineer',
        timeFrom: 'March 2021',
        timeTo: 'August 2022',
        details: [
          'Developed the "Sysco Shop" web application allowing thousands of businesses to query millions of products and process billions of dollars in orders.',
          'Full-stack developer in the Ordering tribe, working end-to-end on key features.',
        ],
        skills: ['PostgreSQL', 'GraphQL', 'React', 'Spring Boot'],
      },
    ],
  },
};

const Experience = () => {
  return (
    <div className={styles['card-container']}>
      <Card variant="outlined">
        <div className={styles['about-container']}>
          <h3 className={styles['about-container-title']}>Experience</h3>

          {Object.entries(ExperienceData).map(([key, value]) => (
            <ExperienceCard key={key} company={key} data={value} />
          ))}
        </div>
      </Card>
    </div>
  );
};

export default Experience;
