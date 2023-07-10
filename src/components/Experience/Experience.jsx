import { Card } from '@mui/material';
import React from 'react';

import styles from './Experience.module.scss';
import ExperienceCard from '../common/ExperianceCard/ExperienceCard';

import OnramperLogo from '../../images/onramper.png';
import SyscoLogo from '../../images/sysco.png';
import IfsLogo from '../../images/ifs.png';

const ExperienceData = {
  Onramper: {
    company: 'Onramper',
    logo: OnramperLogo,
    country: 'Amsterdam, North Holland, Netherlands',
    positions: [
      {
        title: 'Senior Software Engineer',
        details:
          'As a Senior Software Engineer - Fullstack, I played an instrumental role in the development and maintenance of Onramper, a global platform that streamlines fiat-to-crypto transactions. Utilizing a tech stack that included AWS Lambda, DynamoDB, NodeJS, React JS, and React Query, I contributed to a solution that enhances user experience in the crypto and web3 space. This platform supports a wide range of payment methods in 180 countries, significantly increases transaction success rates, reduces user fees, and provides access to over 1000 cryptocurrencies, over 130 fiat currencies and over 120 different payment methods',
        timeFrom: 'November 2022',
        timeTo: 'Present',
      },
    ],
  },
  SyscoLabs: {
    company: 'Sysco LABS Technologies',
    logo: SyscoLogo,
    country: 'Colombo, Sri Lanka',
    positions: [
      {
        title: 'Senior Software Engineer',
        details:
          'Experienced Full Stack Engineer specializing in the development of Sysco Shop, the flagship e-commerce system for Sysco, a Fortune 500 company. Taking end-to-end ownership, I ensure seamless user experience, optimal performance, and unwavering reliability. Proficient in React JS, Node JS, Spring Boot, and GraphQL, I contribute to a microservice architecture deployed on Kubernetes. Skilled in handling high transaction volumes, I bring expertise in delivering robust solutions.',
        timeFrom: 'August 2022',
        timeTo: 'November 2022',
      },
      {
        title: 'Software Engineer',
        details:
          'Experienced Full Stack Engineer specializing in the development of Sysco Shop, the flagship e-commerce system for Sysco, a Fortune 500 company. Taking end-to-end ownership, I ensure seamless user experience, optimal performance, and unwavering reliability. Proficient in React JS, Node JS, Spring Boot, and GraphQL, I contribute to a microservice architecture deployed on Kubernetes. Skilled in handling high transaction volumes, I bring expertise in delivering robust solutions.',
        timeFrom: 'March 2021',
        timeTo: 'August 2022',
      },
    ],
  },
  Ifs: {
    company: 'IFS R&D International',
    logo: IfsLogo,
    country: 'Colombo, Sri Lanka',
    positions: [
      {
        title: 'Software Engineer',
        details:
          'Recruited immediately after completing a rigorous 3-year scholarship program, I embarked on a mission to enhance developer experience by leveraging the power of the marble modeling language. Utilizing technologies such as Java, ANTLR, Docker, LSP, Maven, ANT, and Bash, I am dedicated to creating a cutting-edge environment for developers to thrive.',
        timeFrom: 'January 2021',
        timeTo: 'March 2021',
      },
      {
        title: 'Trainee Software Developer',
        details: `Employed by IFS R & D International for 4 years as a Software Developer in the Technology team under the scholarship program offered by IFS in collaboration with SLIIT.
         \nDeveloping the "Marble" programming language with a tool to handle modeling, code generation, middle tier development and server implementation utilizing technologies like Java, Python and Netbeans Platform to provide the internal framework support to IFS Applications`,
        timeFrom: 'June 2017',
        timeTo: 'January 2021',
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
          {Object.entries(ExperienceData).map(([key, value]) => {
            return <ExperienceCard key={key} company={key} data={value} />;
          })}
        </div>
      </Card>
    </div>
  );
};

export default Experience;
