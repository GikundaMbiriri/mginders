
import Head from 'next/head'
import script from 'next/script'
import Image from 'next/image'
import Banner from  '../components/Banner'
import Nav from '../components/Nav'
import Link from 'next/link'
import Script from 'next/script'
import About from '../components/About';
import Contact from '../components/Contact'
export default function about() {
    const im ='../public/about3.png';
    return (
        <>
        
             <Head>
 
   
  </Head>
<Nav />

<Banner im="kk"/>
      <About/>
      <Contact/>
       </>
    )
}
