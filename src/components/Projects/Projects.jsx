import { Card } from '@mui/material';
import React from 'react';

import K8Image from '../../images/proj/k8.jpg';
import schoolMgmt from '../../images/proj/schoolmanagementsystem.JPG';

import covid from '../../images/proj/covid.JPG';
import thuru from '../../images/proj/thuru.PNG';
import blog from '../../images/proj/blog.JPG';
import teams from '../../images/proj/teams.webp';
import vs from '../../images/proj/vs.png';

import styles from './Projects.module.scss';
import ProjectCard from '../common/ProjectCard/ProjectCard';

const projectData = [
  {
    title:
      'A Network Science-Based Approach for an Optimal Microservice Governance',
    details:
      'A unified governance model for optimizing microservice deployments factoring in dependency analysis, load prediction, centrality analysis as well as and resilience evaluation.(Published in The International Conference on Advancements in Computing)',
    tech: 'Microservice | Kubernetes | Docker | Istio | Shell | YAML | Python | NodeJS | ReactJS',
    awards: [
      'National Best Quality Software Awards Finalist',
      'Best Track Paper award on Distributed Systems in ICAC 2020',
    ],
    link: 'http://k8cdaphtml.netlify.app/',
    image: K8Image,
  },
  {
    title: 'Fully customizable online store',
    details:
      'An online store that can be customized just by chaning two files. The application can be used as both web application as well as desktop application.',
    tech: 'React JS | Bootstrap | Bulma | AnimateJS | ElectronJS',
    link: 'http://thuru.netlify.com',
    image: thuru,
  },
  {
    title: 'Add users to teams using a csv',
    details:
      'Script to add a bulk list of users to a team in MS teams with the help of MS teams module for PowerShell',
    tech: 'PowerShell | Batch Script',
    image: teams,
    link: 'https://github.com/gihanrcg/MSTeamsBulkUser',
    awards: ['27+ Stars on Github', '100+ users'],
  },
  {
    title: 'Error Help : VS Code Extension',
    details:
      'An extension that can be used in visual studio code to find and fix error easily',
    tech: 'PowerShell | Batch Script | TypeScript | Visual Studio',
    image: vs,
    link: 'https://marketplace.visualstudio.com/items?itemName=GihanSiriwardhana.error-help',
    awards: ['6000+ Downloads'],
  },
  {
    title: 'Blog Web Application',
    details:
      'Developed a blog site for myself to share my knowledge among others',
    tech: 'act JS | Node JS | Express JS | Bootstrap | MarkDown | Azure Functions | Google Analytics',
    image: blog,
    link: 'https://gihanblog.netlify.com/',
  },
  {
    title: 'COVID-19 Status Tracker',
    details:
      'A dashboard which consumes several public APIs to visualize the status of COVID-19 situation. The system also includes interactive map, country comparison with timeseries data curves and realtime news',
    tech: 'React JS | Chart JS | Bootstrap | Postman',
    image: covid,
    link: 'https://covid-19-gihan.netlify.com/',
  },
];

const Projects = () => {
  return (
    <div className={styles['card-container']}>
      <Card variant="outlined">
        <div className={styles['about-container']}>
          <h3 className={styles['about-container-title']}>Projects</h3>

          <div>
            {projectData.map((project, index) => {
              return <ProjectCard data={project} key={index} />;
            })}
          </div>
        </div>
      </Card>
    </div>
  );
};

export default Projects;
