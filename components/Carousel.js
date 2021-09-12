import ob from '../public/appdev.jpg'
import sisi from '../public/sisi1.png'
import man from '../public/man2.png'
import io from '../public/io1.png'
import Image from 'next/image';
import  { useEffect } from "react";
import aa from '../public/aa1.png'
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

        <Image src={sisi} alt="kdjdj dj" className={styles.im} layout="responsive" priority="true" 
       objectFit="cover" width='100vw' height='120'/>
      
        
         
       </div>
       <div className={styles.carrier}>

        <Image src={io} alt="kdjdj dj" className={styles.im} layout="responsive" priority="true" 
       objectFit="cover" width='100vw' height='120'/>
       
         <div className={styles.tt}>We are the best</div>
       </div>
       <div className={styles.carrier}>

        <Image src={man} alt="kdjdj dj" className={styles.im} layout="responsive" priority="true" 
       objectFit="cover" width='100vw' height='120'/>
       
         <div className={styles.tt}>We are the best</div>
       </div>
          <div className={styles.carrier}>

        <Image src={aa} alt="kdjdj dj" className={styles.im} layout="responsive" priority="true" 
       objectFit="cover" width='100vw' height='120'/>
       
         <div className={styles.tt}>We are the best</div>
       </div>
 </Carousel>
      
    
    </>
    )
}

export default Carouse;