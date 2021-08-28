
import Head from 'next/head'
import  { useEffect } from "react";
import Image from 'next/image'
import jj from '../public/blog-1.jpg'
import 'bootstrap/dist/css/bootstrap.css'
import AOS from 'aos';
import "aos/dist/aos.css";
import Link from 'next/link'
import Script from 'next/script'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import about from '../public/about-1.jpg';
import about1 from '../public/about-2.jpg';
import ec from '../public/ec.jpg'
import about2 from '../public/blog-3.jpg';
import ImageContainer from '../components/TextOnImage';
import PersonIcon from '@material-ui/icons/Person';
import pic from '../public/business-man.png';
import aboutus from '../public/about.jpg'
import app from '../public/app.jpg'
import iot from '../public/iot.jpg'
import teach from '../public/teach.png'
import Nav from '../components/Nav'
import Footer from '../components/Footer';
import Contact from '../components/Contact'
import Services from '../components/Services'
import Testimonial from '../components/Testimonial'
function Home() {
  useEffect(() => {
    AOS.init({
      duration : 1500
    });
  }, []);
  var hhh = 400;


  return (
    <>

    
    <Nav/>
      <div className="test">
        <div className="beba" data-aos="flip-left"
     data-aos-easing="ease-out-cubic"
     data-aos-duration="2500">
          <h2>
            Your best Tech solution
          </h2>
          <div className="hrule">

          </div>
          <div className="htext">
            We are MGrinders Technologies!We design ,develop and install amazing tech solutions.
            We also train and mentor passionate Tech Enthusiasts.
          </div>
          <button className="xv" type="button">
            Find Out More
          </button>

        </div>

        {/* <Carousel autoPlay={true} axis='vertical' autoFocus={true} centerMode={true} infiniteLoop={true} transitionTime={5000}>
              {images.map((em)=>(
<div className="tes" key={em.id}>
   <ImageContainer em={em.name}/>

</div>
              ))}
             
            
          </Carousel> */}
      </div>
      <div className="hbeba">
       
      
        <PersonIcon className="hh" style={{ fontSize: 150 }} data-aos="fade-down"
     data-aos-easing="linear"
     data-aos-duration="1000"/>
        <div className="beb" data-aos="fade-down"
     data-aos-easing="linear"
     data-aos-duration="800">
          <h2>Satisfaction Guaranteed</h2>
          <div className="hte">
            We understand the complexities of modern markets and translate them into real business solutions for automotive, financial, insurance, pharma & life sciences,

          </div>

        </div>
        <div className="dd" data-aos="fade-down"
     data-aos-easing="linear"
     data-aos-duration="500">
        <button className="xvv" type="button">
            Find Out More
          </button>
        </div>
      </div>

      <div className="about">
        
        <div className="hdiva">
          <div className="dec" data-aos="fade-right"
     data-aos-offset="300"
     data-aos-duration="800"
     data-aos-easing="ease-in-sine">
            <h2>About us.</h2>
            <p>
            Lorem id dkfk best way to trennr in a company setup so that we acquire the best in thios world of programming that we make it till the end.
            Lorem id dkfk best way to trennr in a company setup so that we acquire the best in thios world of programming that we make it till the end.
            Lorem id dkfk best way to trennr in a company setup so that we acquire the best in thios world of programming that we make it till the end.
            </p>
          </div>
          <Image src={aboutus} alt="what we do" className="im" width={500} height={hhh}  data-aos="fade-left"
     data-aos-anchor="#example-anchor"
     data-aos-offset="500"
     data-aos-duration="1000" />


        </div>
      </div>
     <Services/>

      <Testimonial/>
       {/* <Contact/> */}
     <Footer/>

     
    </>
  )
}


export default Home