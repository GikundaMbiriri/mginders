import styles from '../styles/Socials.module.css';
import ob from '../public/ob.jpg'
import sisi from '../public/sisi.png'
import Image from 'next/image';
import  { useEffect } from "react";
import AOS from 'aos';
import "aos/dist/aos.css";
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import SearchIcon from '@material-ui/icons/Search';
function Socials() {
    
    return (
        <>
   <div className={styles.tt}>
<div className={styles.ic}>

<FacebookIcon className={styles.jh}  style={{fontSize:30}}/>

<p>FACEBOOK</p>
<p>@mgrinderske</p>
</div>

<div className={styles.ic}>
<FacebookIcon/>
<p>FACEBOOK</p>
<p>@mgrinderske</p>
</div>

<div className={styles.ic}>
<FacebookIcon/>
<p>FACEBOOK</p>
<p>@mgrinderske</p>
</div>
   </div>
        </>
   
    )
}

export default Socials