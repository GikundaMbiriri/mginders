import Ba from '../components/Ba';
import Nav from '../components/Nav'
import Cont from '../components/Cont'
import Footer from '../components/Footer'
import Ccard from '../components/Ccard'
import Head from 'next/head'
function contact() {
    return (
        <>
         <Head>
        <title>Mgrinders contact-us </title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
        <Nav/>
        <Ba/>
        <Ccard/>
        <Cont/>
        {/* <Contact/> */}

        <Footer/>
        </>
       
    )
}

export default contact