import '../styles/global.css'
import Navbar from '../components/Navbar'
import { ThemeProvider } from 'next-themes';
import { ManualProvider } from '../contexts/ManualContext';

function MyApp({ Component, pageProps }) {
    return (
        <>
            <ThemeProvider attribute='class'>
                <ManualProvider>
                    <Navbar />
                    <Component {...pageProps} />
                </ManualProvider>
            </ThemeProvider>
        </>
    )
}

export default MyApp;