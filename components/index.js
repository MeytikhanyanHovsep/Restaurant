"use client"
import Header from './Header'
import Footer from './Footer'
import NextTopLoader from 'nextjs-toploader';
import { usePathname } from 'next/navigation';
import LiveChat from './LiveChat';

export default function Componetns({ children }) {
    const path = usePathname();

    return <>
        <NextTopLoader color="#39db4a"
            initialPosition={ 0.08 }
            crawlSpeed={ 200 }
            height={ 4 }
            crawl={ false }
            showSpinner={ false }
            easing="ease"
            speed={ 200 }
            shadow="2px 0 10px #00000070"
            zIndex={ 1600 } />
        {path != "/login" && <Header />}
        { children }
        {path != "/login" && <Footer />}
        <LiveChat />
    </>
}
