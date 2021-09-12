import styles from '../styles/ContactUs.module.css';
import ob from '../public/ob.jpg'
import sisi from '../public/geo.jpg'
import Image from 'next/image';
import  { useEffect,useState } from "react";
import Cont from './Cont.js'
import Ccard from './Ccard.js'
function ContactUs() {

    return (
        <>
        <div className={styles.banner}>
        <h2>Get A Quote Today</h2>
        <h6>Home/Contact M-Grinders Tech Solutions Ltd</h6>

        </div>
        <Ccard/>
<Cont/>
       
        </>
    )
}

export default ContactUs
