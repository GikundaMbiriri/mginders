
import Head from 'next/head'

import Image from 'next/image'
import jj from '../public/blog-1.jpg'
import 'bootstrap/dist/css/bootstrap.css'

import Link from 'next/link'
import Script from 'next/script'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import about from '../public/about-1.jpg';
import about1 from '../public/about-2.jpg';
import about2 from '../public/blog-3.jpg';
import ImageContainer from '../components/TextOnImage';
import PersonIcon from '@material-ui/icons/Person';
function Navbar() {


    return (
        <>
        <Head>
            
           
             </Head>
        <div className="navh">
        <input type="checkbox" id="navh-check"/>
        <div className="navh-header">
          <div className="navh-title">
            M-GRINDERS
          </div>
        </div>
        <div className="navh-btn">
          <label htmlFor="navh-check">
            <span></span>
            <span></span>
            <span></span>
          </label>
        </div>
        
        <div className="navh-links">
          <a href="//github.io/jo_geek" >Github</a>
          <a href="http://stackoverflow.com/users/4084003/" >Stackoverflow</a>
          <a href="https://in.linkedin.com/in/jonesvinothjoseph" >LinkedIn</a>
          <a href="https://codepen.io/jo_Geek/" >Codepen</a>
          <a href="https://jsfiddle.net/user/jo_Geek/" >JsFiddle</a>
        </div>
      </div>
      <div className="test">
        <div className="beba">
          <h2>
            The best Tech Solution in your Town.
          </h2>
          <div className="hrule">

          </div>
          <div className="htext">
            Lorem id dkfk best way to trennr in a company setup so that we acquire the best in thios world of programming that we make it till the end.
          </div>
          <button className="btn btn-success">
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
          <PersonIcon className="hh"/>
          <div className="beb">
          <h2>Satisfaction Guaranteed</h2>
          <div className="hte">
          Lorem id dkfk best way to trennr in a company setup so that we acquire the best in thios world of programming that we make it till the end.

          </div>
        
          </div>
          <div className="dd">
          <button className="btn btn-success">
            Find Out More
          </button>
          </div>
          </div>
          <div className="industry">
            <div className="hind">Industry We Offer</div>
            <div className="hdiv">
            
              <Image src={about1} alt="what we do" className="im" width={500} height={100}/>
            
              <div className="desc">
              Lorem id dkfk best way to trennr in a company setup so that we acquire the best in thios world of programming that we make it till the end.

              </div>
            </div>
          </div>
     </>
    )
}


export default Navbar