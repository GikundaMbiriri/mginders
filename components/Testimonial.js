
import Script from 'next/script'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import teach from '../public/lec.jpeg'
import kamunde from '../public/kamunde.jpg'
import styles from '../styles/Testimonial.module.css';
import Image from 'next/image';

function Testimonial() {
    return (
       <>
       <h2 className={styles.hh}>Testimonials</h2>
             <Carousel autoPlay={true} infiniteLoop={true} interval={2500} showThumbs={false}>
               
                <div className={styles.cc}>

                    <Image src={teach} alt="d,d,," className={styles.teach} height={100} width={100}/>
<h4>Mr. Owori</h4>

                   <div className={styles.tt}>
                   I really enjoyed the services I got from here.I will definitely come back.
                </div>
                </div>
  
                <div className={styles.cc}>

                    <Image src={kamunde} alt="d,d,," className={styles.teach} height={100} width={100}/>
                    <h4>Albert Kamunde</h4>

                   <div className={styles.tt}>
                    My website was delivered in a weeks time.I like the speed.
                </div>
                </div>
               
              
            </Carousel>
       </>
    )
}

export default Testimonial
