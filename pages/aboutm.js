
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
        <Nav/>
        <About/>
        
       </>
    )
}
export default aboutm