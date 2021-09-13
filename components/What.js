import styles from '../styles/What.module.css';
import ob from '../public/ob.jpg'
import sisi from '../public/sisi.png'
import Image from 'next/image';
import  { useEffect } from "react";
import AOS from 'aos';
import "aos/dist/aos.css";
import WebIcon from '@material-ui/icons/Web';
import ComputerIcon from '@material-ui/icons/Computer';
import CameraAltIcon from '@material-ui/icons/CameraAlt';
import PhoneAndroidIcon from '@material-ui/icons/PhoneAndroid';
import SystemUpdateAltIcon from '@material-ui/icons/SystemUpdateAlt';
import AppsIcon from '@material-ui/icons/Apps';
import MobileFriendlyIcon from '@material-ui/icons/MobileFriendly';
function What() {
    
    return (
        <>
          <div className={styles.pj}>
          <h2>What We Do</h2>
          <p>How we can be of use to you</p>
          </div>
          <div className={styles.what}>
          <div className={styles.left}>
<h2>Check Out Our Services!</h2>
<p className={styles.first}>Lets begin your Tech Journey</p>
<p className={styles.rest}>At M-Grinders Technologies LTD, we offer tech solutions to our clients.We make it easier for our clients to manage their businesses.We offer services to organisations,institutions,companies and individuals.</p>
<div className={styles.cs}>
<div className={styles.card}>

<WebIcon className={styles.icc}/>

<div className={styles.cont}>
<h6>Web Development</h6>
<p>

 We design amazing websites for our clients.Our websites are SEO friendly to give our clients a strong online presence.<br/>
           We use the latest technologies to make our websites responsive and load at lightning speeds.

</p>
</div>
</div>
<div className={styles.card}>

<PhoneAndroidIcon className={styles.icc}/>

<div className={styles.cont}>
<h6>App Development</h6>
<p>
We develop user-friendly applications for institutions,organisations ,ecommerce enterprises etc at affordable prices.<br/>
            Our applications come with secure admin dashboards to help the owners manage their businesses easily.
          
</p>
</div>
</div>
<div className={styles.card}>

<SystemUpdateAltIcon className={styles.icc}/>

<div className={styles.cont}>
<h6>Management Systems</h6>
<p>
We develop management systems used in schools ,hospitals and other businesses to facilitate their daily activities.<br/>
We also help our clients store their data in secure databases and back it up in the cloud.
</p>
</div>
</div>
<div className={styles.card}>

<AppsIcon className={styles.icc}/>

<div className={styles.cont}>
<h6>IOT Projects</h6>
<p>
Iot is an upcoming industry and it really helps in automating our daily activities.We offer IOT services at affordable prices.
</p>
</div>
</div>
     </div>     </div>
          <div className={styles.right}>
          <div className={styles.ccd}>
<ComputerIcon className={styles.ccc}  style={{ fontSize: 70 }}/>
<h2>Computer Solutions</h2>
          </div>
<div className={styles.cc}>
<MobileFriendlyIcon className={styles.ccc}  style={{ fontSize: 70 }}/>
<h2>Mobile Solutions</h2>
          </div>
          </div>
          </div>
        </>
    )
}

export default What
