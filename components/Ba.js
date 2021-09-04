import  { useEffect } from "react";
import AOS from 'aos';
import "aos/dist/aos.css";

import styles from '../styles/Ba.module.css'
function Ban({im}) {
    useEffect(() => {
        AOS.init({
          duration : 1500
        });
      }, []);
    return (
        <div className={styles.kk} id="kk" >
            <div className={styles.spacer}/>
            <div className={styles.text} data-aos="zoom-out-right"><h2>Contact Us</h2>
            <div className={styles.inf} data-aos="flip-left"
     data-aos-easing="ease-out-cubic"
     data-aos-duration="2000">
           Get a Quotation or leave a feedback today.
            </div>
            </div>
            
            
           
        </div>
    )
}

export default Ban