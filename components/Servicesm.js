import styles from '../styles/Servicesm.module.css';
import ob from '../public/webdevelopment.jpg'
import sisi from '../public/sisi.png'
import man from '../public/man.jpg'
import io from '../public/io.jpg'
import aa from '../public/aa.jpg'
import Image from 'next/image';
import  { useEffect,useState } from "react";
import AOS from 'aos';
import "aos/dist/aos.css";

function Servicesm() {
     useEffect(() => {
    AOS.init({
      duration : 1500
    });
  }, []);
    const [Web,setWeb]=useState(true);
    const [App,setApp]=useState(false);
    const [Man,setMan]=useState(false);
    const [Iot,setIot]=useState(false);
    const [cn,setCn]=useState('active');
    const [cn1,setCn1]=useState('bt');
    const [cn2,setCn2]=useState('bt');
    const [cn3,setCn3]=useState('bt');
    function fweb(){
        setWeb(true);
        setApp(false);
        setMan(false);
        setIot(false);
        setCn('active');
        setCn1('bt');
        setCn2('bt');
        setCn3('bt');
    }
    function fapp(){
        setWeb(false);
        setApp(true);
        setMan(false);
        setIot(false);
        setCn('bt');
        setCn1('active');
        setCn2('bt');
        setCn3('bt');
    }
        function fman(){
        setWeb(false);
        setApp(false);
        setMan(true);
        setIot(false);
         setCn('bt');
        setCn1('bt');
        setCn2('active');
        setCn3('bt');
    }
        function fiot(){
        setWeb(false);
        setApp(false);
        setMan(false);
        setIot(true);
        setCn('bt');
        setCn1('bt');
        setCn2('bt');
        setCn3('active');
    }
   
    return (
        <>
         <div className={styles.banner}>
        <h2>Best Tech Solutions In Kenya</h2>
        <h6>Home/ Our Services</h6>

        </div>
        <div className={styles.services}>
        <h2>Our Services</h2>
        <h6>We are a tech solutions company based in Nairobi, Kenya
offering the following services</h6>
<div className={styles.bts}>
<div className={styles.[cn]}  onClick={fweb}>Web Development</div>
<div className={styles.[cn1]} onClick={fapp}>App Development</div>
<div className={styles.[cn2]} onClick={fman}>Management Systems</div>
<div className={styles.[cn3]} onClick={fiot}>IOT Projects</div>
</div>
{Web && <div className={styles.ss} data-aos="fade-up-right">
<h3 >Web Development</h3>
<h6>We offer affordable web development services</h6>
<Image src={ob} alt="what we do" className={styles.ime}  width={600} height={300} />
<p> 
We do not just develop a website!<br/>
We mind about your presence in the internet.
Therefore ,we build SEO friendly websites to make sure that your business is easily seen on the internet.Our websites are also responsive so they can be viewed on any device while still maintaining the best design.
We also use the latest technologies like ReactJs, NodeJs, Firebase etc to ensure that our sites load easily and at high speeds.

</p>
</div>}

{App && <div className={styles.ss} data-aos="fade-up-right">
<h3>App Development</h3>
<h6>We offer affordable App development services</h6>
<Image src={aa} alt="what we do" className={styles.ime}  width={600} height={300} />
<p>
 Mobile App Development is a fast growing field which motivates us to keep working hard to deliver the best applications to our clients.<br/>
 We ensure tat our applications ave the best UI (User Interface) design so as to givr our clients customers the best first impression.Our apps are easy to use and have a very high performance.
 We use the latest technologies like Kotlin and Flutter to develop competitive applications.


</p>
</div>}

{Man && <div className={styles.ss} data-aos="fade-up-right">
<h3  >Management Systems</h3>
<h6>We offer affordable Management Systems</h6>
<Image src={man} alt="what we do" className={styles.ime}  width={600} height={300} />
<p> 
In the modern day and age , management systems are important in running organisations , institutions , established companies and startups.We create inventories for your organisation, student portals for your institution, workers management system for your company.We store your data in secure databases and back it up in the cloud to ensure that the data is never lost or misused .
<br/>
We also install an admin dashboard for our clients to make it easy for the to control the management system.

</p>
</div>}
{Iot && <div className={styles.ss} data-aos="fade-up-right">
<h3>IOT Projects</h3>
<h6>We do IOT Projects at affordable prices.</h6>
<Image src={io} alt="what we do" className={styles.ime}  width={600} height={300} />
<p>
IOT is an upcoming field and we are keen at observing the new trends in the field.
We use microprocessors like arduino Mega, arduino Uno and raspberry PI to prototype our projects before installing the for our clients.

</p>
</div>}
        </div>
        </>
    )
}

export default Servicesm;
