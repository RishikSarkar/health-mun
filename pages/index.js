import Head from 'next/head';
import { NextSeo } from 'next-seo';
import Main from '../components/Main.jsx'
import Countdown from '../components/Countdown.jsx';
import Acronym from '../components/Acronym.jsx';
import FAQ from '../components/FAQ.jsx';
import Contact from '../components/Contact.jsx';
import { ParallaxProvider } from 'react-scroll-parallax';

export default function Home() {
  return (
    <div>
      <NextSeo
        title="HealthMUN"
        description="HealthMUN, the world's first-ever Model United Nations experience organized for pre-health students. See you in 2024!"
        openGraph={{
          url: 'http://www.healthmun.org/',
          title: 'HealthMUN',
          description: "HealthMUN, the world's first-ever Model United Nations experience organized for pre-health students. See you in 2024!",
          site_name: 'HealthMUN',
        }}
        additionalLinkTags={[
          {
            rel: 'icon',
            href: '/favicon/favicon.ico',
          },
        ]}
      />
      <ParallaxProvider>
        <Main />
      </ParallaxProvider>

      <Countdown />
      <Acronym />
      <FAQ />
      {/* <Contact /> */}
    </div>
  );
}