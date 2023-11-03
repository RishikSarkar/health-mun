import '../styles/global.css'
import Navbar from '../components/Navbar'
import { ThemeProvider } from 'next-themes';
import { ManualProvider } from '../contexts/ManualContext';
import Contact from '../components/Contact.jsx';
import { ParallaxProvider } from 'react-scroll-parallax';

function MyApp({ Component, pageProps }) {
    return (
        <>
            <ThemeProvider attribute='class'>
                <ParallaxProvider>
                    <ManualProvider>
                        <Navbar />
                        <Component {...pageProps} />
                        <Contact />
                    </ManualProvider>
                </ParallaxProvider>
            </ThemeProvider>
        </>
    )
}

export default MyApp;