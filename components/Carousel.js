
import ob from '../public/sasa.jpg'
import sisi from '../public/alas.jpg'
import rt from '../public/rt.jpg'
import Image from 'next/image';
import  { useEffect } from "react";

import AOS from 'aos';
import "aos/dist/aos.css";
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // requires a loader
import styles from '../styles/carousel.module.css';
import "animate.css"

function Carouse() {
    
    return (
        <>
           <Carousel
      autoPlay
      infiniteLoop
      showIndicators={false}
      showStatus={false}
      showThumbs={false}
    >
        <div className={styles.carrier}>

        <Image src={sisi} alt="kdjdj dj" className={styles.im} layout="responsive"
       objectFit="cover" width='100vw' height='70vh'/>
         <div className={styles.tt}><div className={styles.ona}>
         <h4>Your complete online presence</h4>
         <h2>Our priority.</h2>
         </div><div className={styles.s}><p>Request a quote</p></div></div>
         
       </div>
       <div className={styles.carrier}>

        <Image src={rt} alt="kdjdj dj" className={styles.im} layout="responsive"
       objectFit="cover" width='100vw' height='70vh'/>
         <div className={styles.tt}>We are the best</div>
       </div>
       <div className={styles.carrier}>

        <Image src={sisi} alt="kdjdj dj" className={styles.im} layout="responsive"
       objectFit="cover" width='100vw' height='70vh'/>
         <div className={styles.tt}>We are the best</div>
       </div>
 </Carousel>
      
    
    </>
    )
}

export default Carouse
