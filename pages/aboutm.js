
import Head from 'next/head'
import script from 'next/script'
import Image from 'next/image'
import Banner from  '../components/Banner'
import Nav from '../components/Nav'
import Link from 'next/link'
import Script from 'next/script'
import About from '../components/Aboutm';
import Contact from '../components/Contact'
import Footer from '../components/Footer'
import  { useEffect } from "react";
import AOS from 'aos';
import "aos/dist/aos.css";
import Cont from '../components/Cont';
function aboutm() {
 
   
    return (
        <>
             <Head>
        <title>About Mgrinders</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
        <Nav/>
        <About/>
        <Footer/>
       </>
    )
}
export default aboutm