import  { useEffect } from "react";
import AOS from 'aos';
import "aos/dist/aos.css";

import styles from '../styles/B.module.css'
function B({im}) {
    useEffect(() => {
        AOS.init({
          duration : 1500
        });
      }, []);
    return (
        <div className={styles.kk} id="kk" >
            <div className={styles.spacer}/>
            <div className={styles.text} data-aos="zoom-out-right"><h2>Our Classes</h2>
            <div className={styles.inf} data-aos="flip-left"
     data-aos-easing="ease-out-cubic"
     data-aos-duration="2000">
           Learn with us today.
            </div>
            </div>
            
            
           
        </div>
    )
}

export default B