
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
import  { useEffect } from "react";
import AOS from 'aos';
import "aos/dist/aos.css";
import Cont from '../components/Cont';
function About1() {
    useEffect(() => {
        AOS.init({
          duration : 1500
        });
      }, []);
    const im ='../public/about3.png';
    return (
        <>
        
             <Head>
 
   
  </Head>
<Nav />

<Banner im="kk"/>
      <About/>
      {/* <Contact/> */}
      <Cont/>
      <Footer/>
       </>
    )
}
export default About1;