import Head from 'next/head';
import dynamic from 'next/dynamic';
import styles from '../styles/Home.module.scss';
import SEO from '../components/SEO/SEO';
import Hero from '../components/Hero/Hero';
import About from '../components/About/About';
import Experience from '../components/Experience/Experience';
import Education from '../components/Education/Education';
import Volunteer from '../components/Volunteer/Volunteer';
import Contact from '../components/Contact/Contact';
import Projects from '../components/Projects/Projects';

const GalleryComp = dynamic(
  () => import('../components/Gallery/Gallery'),
  { ssr: false }
);

export default function Home() {
  return (
    <>
      <SEO />
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={`${styles.container} `}>
        <Hero />
        <Contact />
        <About />
        <Experience />
        <Education />
        <Volunteer />
        <Projects />
        <GalleryComp />
      </main>
    </>
  );
}
