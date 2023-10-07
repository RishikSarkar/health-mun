import Head from 'next/head';
import Main from '../components/Main.jsx'
import Countdown from '../components/Countdown.jsx';
import Acronym from '../components/Acronym.jsx';
import FAQ from '../components/FAQ.jsx';
import Contact from '../components/Contact.jsx';

import { ParallaxProvider } from 'react-scroll-parallax';

export default function Home() {
  return (
    <div className>
      <Head>
        <title>HealthMUN</title>
      </Head>

      <ParallaxProvider>
        <Main />
      </ParallaxProvider>

      <Countdown />
      <Acronym />
      <FAQ />
      <Contact />
    </div>
  );
}
