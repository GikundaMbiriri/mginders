
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
import Carou from '@/components/Carousel'
import Nav from '../components/Nav'
import What from '../components/What'
import Footer from '../components/Footer';
import Contact from '../components/Contact'
import Services from '../components/Services'
import Testimonial from '../components/Testimonial'
import About from '@/components/About';
import Typed from "react-typed";
function Home() {
  useEffect(() => {
    AOS.init({
      duration : 1000
    });
  }, []);
  var hhh = 400;


  return (
    <>

    
    <Nav/>
    <Carou/>
    <What/>
      <div className="test">
        <div className="beba" data-aos="flip-left"
     data-aos-easing="ease-out-cubic"
     data-aos-duration="2500">
          {/* <h2>
            Your best Tech solution
          </h2> */}
          {/* <div className="hrule">

          </div> */}
          <div className="htext">
          <Typed strings={["Bring your ideas to life!"]} typeSpeed={40} showCursor={false}>
            <h1 />
          </Typed>

            <br/>
         
            <Typed
            strings={[
              "We design ",
              "We develop ",
              "We install ",
            ]}
            typeSpeed={70}
            backSpeed={70}
            loop 
          /> amazing tech solutions.
     
          </div>
     

       
       
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
       
      
        <PersonIcon className="hh" style={{ fontSize: 150 }} />
        <div className="beb"  data-aos="fade-down">
          <h2 >Satisfaction Guaranteed</h2>
          <div className="hte" >
            We understand the complexities of modern markets and translate them into real business solutions for organisations, institutions,start-ups and enterprises.

          </div>

        </div>
      
      </div>

      <div className="about" data-aos="fade-up-right">
        
       <About/>
      </div>
     <Services/>

      <Testimonial/>
       {/* <Contact/> */}
     <Footer/>

     
    </>
  )
}


export default Home