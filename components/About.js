import styles from '../styles/About.module.css';
import im from '../public/yes.jpeg'
import Image from 'next/image';
import  { useEffect } from "react";
import AOS from 'aos';
import "aos/dist/aos.css";
function About() {
    useEffect(() => {
        AOS.init({
          duration : 1500
        });
      }, []);
      var hhh=400;
    return (
        <>
         <div className={styles.about}>
             <h2 data-aos="zoom-out-left">Company Profile</h2>
             <div className={styles.bebaa}>
             <div className={styles.te} data-aos="fade-down"
     data-aos-easing="linear"
     data-aos-duration="1500">
             MGrinders Technologies was formed in August 2021 to take advantage of increasing opportunities in the Information Communication Technology (ICT) industry.
             MGrinders Technologies was formed in August 2021 to take advantage of increasing opportunities in the Information Communication Technology (ICT) industry.
             MGrinders Technologies was formed in August 2021 to take advantage of increasing opportunities in the Information Communication Technology (ICT) industry.
             </div>
             <Image src={im} alt="about image" height={hhh} width={500} data-aos="flip-left"
     data-aos-easing="ease-out-cubic"
     data-aos-duration="2000"/>
             </div>
<div className={styles.mission} data-aos="fade-up"
     data-aos-anchor-placement="center-bottom">
    <h2>Mission</h2>
    <ul>
        <li>Be the best in the industry Be the best in the industry </li>
        <li>Be the best in the industry</li>
        <li>Be the best in the industry</li>
        <li>Be the best in the industry</li>
    </ul>
</div>
{/* <div className={styles.vision}>
    <h2>Vision</h2>
    <div>To be among the best ICT firms providing Web Based Applications, Unified network security, 
        data services and value added services to the internet community in Kenya and beyond.</div>
</div> */}
             </div>   
        </>
    )
}

export default About
