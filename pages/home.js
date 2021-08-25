
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
      <div className="industry">
        <div className="hind">Services We Offer</div>
        <div className="hdiv">

          

          <div className="desc">
            <h2>Electrical Installation.</h2>
            Lorem id dkfk best way to trennr in a company setup so that we acquire the best in thios world of programming that we make it till the end.

          </div>
          <Image src={ec} alt="what we do" className="ime" width={500} height={hhh} />
        </div>
        <div className="hdiv">

         

          <div className="desc">
            <h2>Web And Mobile Development.</h2>
            Lorem id dkfk best way to trennr in a company setup so that we acquire the best in thios world of programming that we make it till the end.

          </div>
          <Image src={app} alt="what we do" className="ime" width={500} height={hhh} />
        </div>
        <div className="hdiv">

         

          <div className="desc">
            <h2>IOT Projects.</h2>
            Lorem id dkfk best way to trennr in a company setup so that we acquire the best in thios world of programming that we make it till the end.

          </div>
          <Image src={iot} alt="what we do" className="ime" width={500} height={hhh} />
        </div>
        <div className="hdiv">

         

          <div className="desc">
            <h2>Coding Classes.</h2>
            Lorem id dkfk best way to trennr in a company setup so that we acquire the best in thios world of programming that we make it till the end.

          </div>
          <Image src={teach} alt="what we do" className="ime" width={500} height={hhh} />
        </div>
      </div>
      <Carousel>
                <div>
                    <Image src={teach} alt="d,d,," />
                    <p className="legend">Legend 1</p>
                </div>
                <div>
                    <Image src={teach} alt="d,d,," />
                    <p className="legend">Legend 2</p>
                </div>
                <div>
                    <Image src={teach} alt="d,d,," />
                    <p className="legend">Legend 3</p>
                </div>
            </Carousel>
       
     

      <div className="footer">
        <div className="heading">
          <h2>ABCDEF<sup>&trade;</sup></h2>
        </div>
        <div className="content">
          <div className="services">
            <h4>Services</h4>
            <p><a href="#">Mobile App development</a></p>
            <p><a href="#">Web development</a></p>
            <p><a href="#">IOT projects</a></p>
      
            <p><a href="#">Electrical installation</a></p>
            <p><a href="#">Coding classes</a></p>
          </div>
          <div className="social-media">
            <h4>Social</h4>
            <p>
              <a href="https://www.linkedin.com/in/sanket-bodke-995b5b205/"
              ><i className="fab fa-linkedin"></i> Linkedin</a
              >
            </p>
            <p>
              <a href="https://twitter.com/Sanket46171296"
              ><i className="fab fa-twitter"></i> Twitter</a
              >
            </p>
          
           
           
          </div>
          <div className="links">
            <h4>Quick links</h4>
            <p><a href="#">Home</a></p>
            <p><a href="#">About</a></p>
            <p><a href="#">Services</a></p>
            <p><a href="#">Contact</a></p>
          </div>
          <div className="details">
            <h4 className="address">Address</h4>
            <p>
              Locality :Kileleshwa <br />
              Street:Kindaruma road<br/>

              Building:Blue Violets Plaza One Three Three Three
            </p>
            <h4 className="mobile">Mobile</h4>
            <p><a href="#">+9112233445</a></p>
            <h4 className="mail">Email</h4>
            <p><a href="#">abcdef@gmail.com</a></p>
          </div>
        </div>
        <footer>
          <hr />
          &copy; 2021 MGrinders Technologies Pvt. Ltd.
        </footer>
      </div>
    </>
  )
}


export default Home