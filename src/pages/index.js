import Head from 'next/head';
import Image from 'next/image';
import styles from '@/styles/Home.module.scss';
import Hero from '@/components/Hero/Hero';
import About from '@/components/About/About';
import Experience from '@/components/Experience/Experience';
import Education from '@/components/Education/Education';
import Volunteer from '@/components/Volunteer/Volunteer';
import GalleryComp from '@/components/Gallery/Gallery';

export default function Home() {
  return (
    <>
      <Head>
        <title>Gihan Saranga Siriwardhana</title>
        <meta name="description" content="Gihan Saranga Siriwardhana" />

        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0"
        ></meta>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={`${styles.container} `}>
        <Hero />
        <About />
        <Experience />
        <Education />
        <Volunteer />
        <GalleryComp />
      </main>
    </>
  );
}
