import styles from '../styles/company.module.css';
import ob from '../public/ob.jpg'
import sisi from '../public/sisi.png'
import Image from 'next/image';
import  { useEffect } from "react";
import AOS from 'aos';
import "aos/dist/aos.css";
import WebIcon from '@material-ui/icons/Web';
import ComputerIcon from '@material-ui/icons/Computer';
import CameraAltIcon from '@material-ui/icons/CameraAlt';

function Company() {
    
    return (
        <>
     <div className={styles.la}>
          <h2>The Company</h2>
          <p>Who we are and what we do</p>
          </div>
          <div className={styles.ff}>
<div className={styles.left}>
<h2>We Are MGrinders Tech Solutions.</h2>
<h6>Your Internet Presence, Our Priority</h6>
<p>
Oracom offers outstanding Web Design in Kenya – We are the best Web Design company in Kenya, Canada and Belgium. From Website Builders, Software & Mobile App Development. We stand out in the local and international market to be the best provider of Web Solutions with over 6 Years experience. Always guided by Creative Teams of Web Developers working in both day and night shift arrangement.
<br/>
We are fully charged with the responsibility of developing Quality, Affordable, Effective, Efficient and Reliable Web Solutions to our ever growing wide category of clients. For Web Design in Kenya, Contact Us The best Web Desin Company in Kenya
</p>
</div>
<div className={styles.right}>
<div className={styles.pos}>
<h1>01.</h1>
<h6>Best Online Solutions</h6>
<p>
Working with parastatals, Large Companies and SMEs to individuals to produce top notch web solutions
</p>

</div>

<div className={styles.pos}>
<h1>02.</h1>
<h6>Best Online Solutions</h6>
<p>
Working with parastatals, Large Companies and SMEs to individuals to produce top notch web solutions
</p>

</div>
<div className={styles.pos}>
<h1>03.</h1>
<h6>Best Online Solutions</h6>
<p>
Working with parastatals, Large Companies and SMEs to individuals to produce top notch web solutions
</p>

</div>
<div className={styles.pos}>
<h1>04.</h1>
<h6>Best Online Solutions</h6>
<p>
Working with parastatals, Large Companies and SMEs to individuals to produce top notch web solutions
</p>

</div>
</div>

          </div>
        </>
    )
}

export default Company
