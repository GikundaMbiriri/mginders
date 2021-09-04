import styles from '../styles/About.module.css';
import ob from '../public/ob.jpg'
import sisi from '../public/sisi.png'
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
             <h2>About Us</h2>
             <div className={styles.bebaa}>
             <div className={styles.te} >
            MGrinders limited is a tech company that designs and develops tech solutions for its clients.We develop competitive web and mobile applications that meet the requirements of the market.
            <br/>
            We also create management systems for institutions ,companies and organisations.
            <br/>
            You can also attend our coding classes that equip you with the best and most competitive skills in the market
             </div>
             <Image src={ob} alt="about image" height={hhh} width={500} className={styles.sa} />
             </div>
{/* <div className={styles.mission} data-aos="fade-up"
     data-aos-anchor-placement="center-bottom">
    <h2>Mission</h2>
    <ul>
        <li>Be the best in the industry Be the best in the industry </li>
        <li>Be the best in the industry</li>
        <li>Be the best in the industry</li>
        <li>Be the best in the industry</li>
    </ul>
</div> */}
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
