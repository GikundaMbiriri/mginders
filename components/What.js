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
<p className={styles.first}>Lets begin your Online Journey</p>
<p className={styles.rest}>At Oracom Web Solutions, we are totally internet business-focused, so we know how important your web and online presence and performance is to your organisation, whether it’s commercial or not-for-profit or SME or a starter company or an individual’s work</p>
<div className={styles.cs}>
<div className={styles.card}>

<WebIcon className={styles.icc}/>

<div className={styles.cont}>
<h6>Web Design</h6>
<p>
At Oracom Web Solutions, we are totally internet business-focused, so we know how important your web and online presence and performance is to your organisation, whether it’s commercial or not-for-profit or SME or a starter company or an individual’s work
</p>
</div>
</div>
<div className={styles.card}>

<WebIcon className={styles.icc}/>

<div className={styles.cont}>
<h6>Web Design</h6>
<p>
At Oracom Web Solutions, we are totally internet business-focused, so we know how important your web and online presence and performance is to your organisation, whether it’s commercial or not-for-profit or SME or a starter company or an individual’s work
</p>
</div>
</div>
<div className={styles.card}>

<WebIcon className={styles.icc}/>

<div className={styles.cont}>
<h6>Web Design</h6>
<p>
At Oracom Web Solutions, we are totally internet business-focused, so we know how important your web and online presence and performance is to your organisation, whether it’s commercial or not-for-profit or SME or a starter company or an individual’s work
</p>
</div>
</div>
<div className={styles.card}>

<WebIcon className={styles.icc}/>

<div className={styles.cont}>
<h6>Web Design</h6>
<p>
At Oracom Web Solutions, we are totally internet business-focused, so we know how important your web and online presence and performance is to your organisation, whether it’s commercial or not-for-profit or SME or a starter company or an individual’s work
</p>
</div>
</div>
     </div>     </div>
          <div className={styles.right}>
          <div className={styles.ccd}>
<ComputerIcon className={styles.ccc}  style={{ fontSize: 70 }}/>
<h2>Digital Marketing Agency</h2>
          </div>
<div className={styles.cc}>
<CameraAltIcon className={styles.ccc}  style={{ fontSize: 70 }}/>
<h2>Photography and Video</h2>
          </div>
          </div>
          </div>
        </>
    )
}

export default What
