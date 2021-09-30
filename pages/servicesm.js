import Head from 'next/head'
import script from 'next/script'
import Image from 'next/image'
import Banner from  '../components/Banner'
import Nav from '../components/Nav'
import Link from 'next/link'
import Script from 'next/script'
import About from '../components/About';
import Contact from '../components/Contact'
import Footer from '../components/Footer'
import Ban from '../components/Ban';
import Servicesm from '../components/Servicesm'


function servicesm() {
    return (
        <>
           <Head>
        <title>Mgrinders our services </title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
        <Nav/>
       <Servicesm/>
        <Footer/>
        </>
       
    )
}

export default servicesm