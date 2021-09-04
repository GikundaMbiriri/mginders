import app from '../public/app.jpg'
import iot from '../public/iot.jpg'
import teach from '../public/teach.png'
import dd from '../public/dd.jpg'
import  { useEffect } from "react";
import Image from 'next/image'
import webdesign from 'public/webdesign.jpg'
import webapps from 'public/ap.jpg'
import learn from 'public/learn.jpg'
import daro from 'public/daro.jpg'
import mobi from 'public/mobi.jpg'
import styles from '../styles/card.module.css';
import WebIcon from '@material-ui/icons/Web';
import SystemUpdateAltIcon from '@material-ui/icons/SystemUpdateAlt';
import ImportantDevicesIcon from '@material-ui/icons/ImportantDevices';
import DeveloperModeIcon from '@material-ui/icons/DeveloperMode';
import AOS from 'aos';
import "aos/dist/aos.css";
function Services() {
  useEffect(() => {
    AOS.init({
      duration : 1500
    });
  }, []);
    var hhh = 400;
    return (<>
        <div className={styles.industry}>
        <div className={styles.hind}><h2>Services We Offer</h2></div>
        <div className={styles.hdiv} data-aos="fade-up-right" >

          

          <div className={styles.desc}>
            <div className={styles.card1}>
            <h2>Web Design</h2>

            <WebIcon style={{ fontSize: 50 }} className={styles.ic}/>
            </div>
           We design amazing websites for our clients.Our websites are SEO friendly to give our clients a strong online presence.<br/>
           We use the latest technologies to make our websites responsive and load at lightning speeds.


          </div>
          <Image src={dd} alt="what we do" className={styles.ime} width={500} height={hhh} />
        </div>
        <div className={styles.hj}/>
        <div className={styles.hdiv} data-aos="fade-up-right">

         

          <div className={styles.desc}>
          <div className={styles.card1}>
            <h2>Web And Mobile Development.</h2>
            <ImportantDevicesIcon style={{ fontSize: 50 }} className={styles.ic}/>
            </div>
            We develop user-friendly applications for institutions,organisations ,ecommerce enterprises etc at affordable prices.<br/>
            Our applications come with secure admin dashboards to help the owners manage their businesses easily.
          </div>
          <Image src={mobi} alt="what we do" className={styles.ime} width={500} height={hhh} />
        </div>
        <div className={styles.hj}/>
        <div className={styles.hdiv} data-aos="fade-up-right">

         

          <div className={styles.desc}>
          <div className={styles.card1}>
            <h2>Management Systems.</h2>
            <SystemUpdateAltIcon style={{ fontSize: 50 }} className={styles.ic}/>
            </div>
We develop management systems used in schools ,hospitals and other businesses to facilitate their daily activities.<br/>
We also help our clients store their data in secure databases and back it up in the cloud.
          </div>
          <Image src={iot} alt="what we do" className={styles.ime} width={500} height={hhh} />
        </div>
        <div className={styles.hj}/>
        <div className={styles.hdiv} data-aos="fade-up-right">

         

          <div className={styles.desc}>
          <div className={styles.card1}>
          <h2>Coding Classes.</h2>
          <DeveloperModeIcon style={{ fontSize: 50 }} className={styles.ic}/>
            
            
            </div>
We run programming classes both physically and online .Currently ,we are offering classes in the following technologies:
<br/>
<span>Web Design:</span> <br/>HTML,CSS,Javascript
<br/>
<span>Frontend Development:</span><br/> Reactjs
<br/>
<span>Backend Development:</span><br/>Laravel,Nodejs,Django,Express Js
<br/>
<span>Mobile Development:</span><br/> Flutter,dart.
<br/>
<span>IOT:</span><br/>Arduino,Raspberry PI

          </div>
          <Image src={daro} alt="what we do" className={styles.ime} width={500} height={hhh} />
        </div>
      
        <div className={styles.hj}/>
      </div>






      <div className={styles.industr}>
        <div className={styles.hind}><h2>Services We Offer</h2></div>
        <div className={styles.hdiv} data-aos="fade-up-right" >

          <Image src={dd} alt="what we do" className={styles.ime} width={500} height={hhh} />

          <div className={styles.desc}>
            <div className={styles.card1}>
            <h2>Web Design</h2>

            <WebIcon style={{ fontSize: 50 }} className={styles.ic}/>
            </div>
           We design amazing websites for our clients.Our websites are SEO friendly to give our clients a strong online presence.<br/>
           We use the latest technologies to make our websites responsive and load at lightning speeds.


          </div>
          
        </div>
        <div className={styles.hj}/>
        <div className={styles.hdiv} data-aos="fade-up-right">

         

          <div className={styles.desc}>
          <div className={styles.card1}>
            <h2>Web And Mobile Development.</h2>
            <ImportantDevicesIcon style={{ fontSize: 50 }} className={styles.ic}/>
            </div>
            We develop user-friendly applications for institutions,organisations ,ecommerce enterprises etc at affordable prices.<br/>
            Our applications come with secure admin dashboards to help the owners manage their businesses easily.
          </div>
          <Image src={mobi} alt="what we do" className={styles.ime} width={500} height={hhh} />
        </div>
        <div className={styles.hj}/>
        <div className={styles.hdiv} data-aos="fade-up-right">

         

          <div className={styles.desc}>
          <div className={styles.card1}>
            <h2>Management Systems.</h2>
            <SystemUpdateAltIcon style={{ fontSize: 50 }} className={styles.ic}/>
            </div>
We develop management systems used in schools ,hospitals and other businesses to facilitate their daily activities.<br/>
We also help our clients store their data in secure databases and back it up in the cloud.
          </div>
          <Image src={iot} alt="what we do" className={styles.ime} width={500} height={hhh} />
        </div>
        <div className={styles.hj}/>
        <div className={styles.hdiv} data-aos="fade-up-right">

         <Image src={daro} alt="what we do" className={styles.ime} width={500} height={hhh} />

          <div className={styles.desc}>
          <div className={styles.card1}>
          <h2>Coding Classes.</h2>
          <DeveloperModeIcon style={{ fontSize: 50 }} className={styles.ic}/>
            
            
            </div>
We run programming classes both physically and online .Currently ,we are offering classes in the following technologies:
<br/>
<span>Web Design:</span> <br/>HTML,CSS,Javascript
<br/>
<span>Frontend Development:</span><br/> Reactjs
<br/>
<span>Backend Development:</span><br/>Laravel,Nodejs,Django,Express Js
<br/>
<span>Mobile Development:</span><br/> Flutter,dart.
<br/>
<span>IOT:</span><br/>Arduino,Raspberry PI

          </div>
          
        </div>
      
        <div className={styles.hj}/>
      </div>
    </>)
}

export default Services
