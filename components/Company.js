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
<h6>Your Business, Our Priority</h6>
<p>
M-Grinders Technologies LTD was started in 2021 to offer the best tech solutions to businesses and individuals in Kenya and across.
<br/>
We are focused on bringing innovative ideas that make it easier for our clients to run their Businesses.Our team of creative developers work 24 hours in a day to ensure that they deliver quality work.Our Clients satisfaction is our main goal and we endeavour to deliver that daily.
</p>
</div>
<div className={styles.right}>
<div className={styles.pos}>
<h1>01.</h1>
<h6>Best Tech Solutions</h6>
<p>
We have worked with organisations,large companies and start-ups where we have delivered quality work which makes us to continue growing daily.
</p>

</div>

<div className={styles.pos}>
<h1>02.</h1>
<h6>Creativity</h6>
<p>
We have a team of highly creative developers that help in designing and developing projects for our Clients
</p>

</div>
<div className={styles.pos}>
<h1>03.</h1>
<h6>Research And Innovation</h6>
<p>
We do research on upcoming Technologies which makes us come up with innovative ideas.
</p>

</div>
<div className={styles.pos}>
<h1>04.</h1>
<h6>Passion & Hardwork</h6>
<p>
We are driven by Passion and Hardwork  which makes us burn the midnight oil to deliver quality work.

</p>

</div>
</div>

          </div>
        </>
    )
}

export default Company
