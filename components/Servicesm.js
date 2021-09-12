import styles from '../styles/Servicesm.module.css';
import ob from '../public/webdevelopment.jpg'
import sisi from '../public/sisi.png'
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
<p>If you are looking for a top web design company in Nairobi, Kenya then we are pleased to inform you that your search has come to an end.

Mine Softwares is a web design company in Nairobi, Kenya that offers custom web design services and helps businesses project the right image on the web.

If you are just starting out, we will take you through the process of registering a domain name for your business or organization, setting up your personalized corporate emails, getting you a brand identity which involves logo design , letterheads and business cards. This ensures that by the time we have finished designing your website, you are ready to do business.

The website that we will design for you will be easily be opened by any device from a desktop computer, laptop, tab to the most basic phone. By the way, did you know that over 75% of internet visitors in Kenya and across the world visit the internet using their mobile phones?

Our websites are usually fully optimized and rank highly on search engines like Google. This will help you increase sales as many customers needing your products and services are out there Googling. You are missing out big time if you are not on Google. We cannot emphasize more on the importance of being on Google. Picture this, there is someone out there looking for your products or services on Google and they happen to land on your website. Your job will just be to convert them. This is pretty easy compared to you hawking your products or services to people who’ve gone so socialize on social media.

Being on Google is important but Social media is equally important. It comes in handy especially when web visitors are happy with a product or service that you offer and they want to share it with their friends or simply want to leave a comment or review. Some clients also prefer inboxing you on Facebook or tweeting you whenever they need support. Some would want to see more of your product photos on Instagram while others would prefer ordering your products or services through WhatsApp. It is for this reason that the websites we design are Social Media friendly.</p>
</div>}

{App && <div className={styles.ss} data-aos="fade-up-right">
<h3>App Development</h3>
<h6>We offer affordable App development services</h6>
<Image src={ob} alt="what we do" className={styles.ime}  width={600} height={300} />
<p>If you are looking for a top web design company in Nairobi, Kenya then we are pleased to inform you that your search has come to an end.

Mine Softwares is a web design company in Nairobi, Kenya that offers custom web design services and helps businesses project the right image on the web.

If you are just starting out, we will take you through the process of registering a domain name for your business or organization, setting up your personalized corporate emails, getting you a brand identity which involves logo design , letterheads and business cards. This ensures that by the time we have finished designing your website, you are ready to do business.

The website that we will design for you will be easily be opened by any device from a desktop computer, laptop, tab to the most basic phone. By the way, did you know that over 75% of internet visitors in Kenya and across the world visit the internet using their mobile phones?

Our websites are usually fully optimized and rank highly on search engines like Google. This will help you increase sales as many customers needing your products and services are out there Googling. You are missing out big time if you are not on Google. We cannot emphasize more on the importance of being on Google. Picture this, there is someone out there looking for your products or services on Google and they happen to land on your website. Your job will just be to convert them. This is pretty easy compared to you hawking your products or services to people who’ve gone so socialize on social media.

Being on Google is important but Social media is equally important. It comes in handy especially when web visitors are happy with a product or service that you offer and they want to share it with their friends or simply want to leave a comment or review. Some clients also prefer inboxing you on Facebook or tweeting you whenever they need support. Some would want to see more of your product photos on Instagram while others would prefer ordering your products or services through WhatsApp. It is for this reason that the websites we design are Social Media friendly.</p>
</div>}

{Man && <div className={styles.ss} data-aos="fade-up-right">
<h3  >App Development</h3>
<h6>We offer affordable App development services</h6>
<Image src={ob} alt="what we do" className={styles.ime}  width={600} height={300} />
<p>If you are looking for a top web design company in Nairobi, Kenya then we are pleased to inform you that your search has come to an end.

Mine Softwares is a web design company in Nairobi, Kenya that offers custom web design services and helps businesses project the right image on the web.

If you are just starting out, we will take you through the process of registering a domain name for your business or organization, setting up your personalized corporate emails, getting you a brand identity which involves logo design , letterheads and business cards. This ensures that by the time we have finished designing your website, you are ready to do business.

The website that we will design for you will be easily be opened by any device from a desktop computer, laptop, tab to the most basic phone. By the way, did you know that over 75% of internet visitors in Kenya and across the world visit the internet using their mobile phones?

Our websites are usually fully optimized and rank highly on search engines like Google. This will help you increase sales as many customers needing your products and services are out there Googling. You are missing out big time if you are not on Google. We cannot emphasize more on the importance of being on Google. Picture this, there is someone out there looking for your products or services on Google and they happen to land on your website. Your job will just be to convert them. This is pretty easy compared to you hawking your products or services to people who’ve gone so socialize on social media.

Being on Google is important but Social media is equally important. It comes in handy especially when web visitors are happy with a product or service that you offer and they want to share it with their friends or simply want to leave a comment or review. Some clients also prefer inboxing you on Facebook or tweeting you whenever they need support. Some would want to see more of your product photos on Instagram while others would prefer ordering your products or services through WhatsApp. It is for this reason that the websites we design are Social Media friendly.</p>
</div>}
{Iot && <div className={styles.ss} data-aos="fade-up-right">
<h3>App Development</h3>
<h6>We offer affordable App development services</h6>
<Image src={ob} alt="what we do" className={styles.ime}  width={600} height={300} />
<p>If you are looking for a top web design company in Nairobi, Kenya then we are pleased to inform you that your search has come to an end.

Mine Softwares is a web design company in Nairobi, Kenya that offers custom web design services and helps businesses project the right image on the web.

If you are just starting out, we will take you through the process of registering a domain name for your business or organization, setting up your personalized corporate emails, getting you a brand identity which involves logo design , letterheads and business cards. This ensures that by the time we have finished designing your website, you are ready to do business.

The website that we will design for you will be easily be opened by any device from a desktop computer, laptop, tab to the most basic phone. By the way, did you know that over 75% of internet visitors in Kenya and across the world visit the internet using their mobile phones?

Our websites are usually fully optimized and rank highly on search engines like Google. This will help you increase sales as many customers needing your products and services are out there Googling. You are missing out big time if you are not on Google. We cannot emphasize more on the importance of being on Google. Picture this, there is someone out there looking for your products or services on Google and they happen to land on your website. Your job will just be to convert them. This is pretty easy compared to you hawking your products or services to people who’ve gone so socialize on social media.

Being on Google is important but Social media is equally important. It comes in handy especially when web visitors are happy with a product or service that you offer and they want to share it with their friends or simply want to leave a comment or review. Some clients also prefer inboxing you on Facebook or tweeting you whenever they need support. Some would want to see more of your product photos on Instagram while others would prefer ordering your products or services through WhatsApp. It is for this reason that the websites we design are Social Media friendly.</p>
</div>}
        </div>
        </>
    )
}

export default Servicesm;
