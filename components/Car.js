import ob from '../public/appdev.jpg'
import sisi from '../public/splash.jpg'
import man from '../public/man.jpg'
import io from '../public/io.jpg'
import Image from 'next/image';
import  { useEffect } from "react";
import aa from '../public/aa.jpg'
import AOS from 'aos';
import "aos/dist/aos.css";
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // requires a loader
import styles from '../styles/carousel.module.css';
import "animate.css"

function Car() {
    
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

        <Image src={sisi} alt="kdjdj dj" className={styles.im}  priority="true" layout="responsive"
       objectFit="cover" width='100vw' height='70vh'/>
      <div className={styles.tt}>
      <h1>Web Development</h1>
      <h5>Get first and responsive sites.</h5>


      </div>
        
         
       </div>
       <div className={styles.carrier}>

        <Image src={io} alt="kdjdj dj" className={styles.im} layout="responsive" priority="true" 
       objectFit="cover" width='100vw' height='70vh'/>
       
         <div className={styles.tt}>
 <h1>IOT Projects</h1>
      <h5>We design IOT Solutions for our clients</h5>
      </div>
       </div>
       <div className={styles.carrier}>

        <Image src={man} alt="kdjdj dj" className={styles.im} layout="responsive" priority="true" 
       objectFit="cover" width='100vw' height='70vh'/>
       
         <div className={styles.tt}>
<h1>Management Systems</h1>
      <h5>Get a Management System for your business</h5>
         </div>
       </div>
          <div className={styles.carrier}>

        <Image src={aa} alt="kdjdj dj" className={styles.im} layout="responsive" priority="true" 
       objectFit="cover" width='100vw' height='70vh'/>
       
         <div className={styles.tt}>
            <h1>Mobile Development</h1>
      <h5>Get well-designed mobile apps</h5>

         </div>
       </div>
 </Carousel>
      
    
    </>
    )
}

export default Car
