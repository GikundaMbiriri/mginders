import  { useEffect } from "react";
import AOS from 'aos';
import "aos/dist/aos.css";

import styles from '../styles/Banner.module.css'
function Ban({im}) {
    useEffect(() => {
        AOS.init({
          duration : 1500
        });
      }, []);
    return (
        <div className={styles.kk} id="kk" >
            <div className={styles.spacer}/>
            <div className={styles.text} data-aos="zoom-out-right"><h2>Our Solutions</h2>
            <div className={styles.inf} data-aos="flip-left"
     data-aos-easing="ease-out-cubic"
     data-aos-duration="2000">
           
When It Comes To Reliability, We Are The One You Need!
            </div>
            </div>
            
            
           
        </div>
    )
}

export default Ban