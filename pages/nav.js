
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

    var hhh=400;
 

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

          <div className="about">
          <div className="hind">About Us</div>
            <div className="hdiv">
            <div className="dec">
                <h2>Electrical Installation.</h2>
              Lorem id dkfk best way to trennr in a company setup so that we acquire the best in thios world of programming that we make it till the end.

              </div>
              <Image src={about1} alt="what we do" className="im" width={500} height={hhh}/>
            
             
            </div>
          </div>
          <div className="industry">
            <div className="hind">Services We Offer</div>
            <div className="hdiv">
            
              <Image src={about1} alt="what we do" className="im" width={500} height={hhh}/>
            
              <div className="desc">
                <h2>Electrical Installation.</h2>
              Lorem id dkfk best way to trennr in a company setup so that we acquire the best in thios world of programming that we make it till the end.

              </div>
            </div>
          </div>
          <div className="ins">
            <div className="bb">
<h2>Insights to help you do what you do better, faster and more profitably.</h2>
We understand the complexities of modern markets and translate them into real business solutions for automotive, financial, insuranc.
<br></br>
<button className="btn btn-success">Learn More</button>
            </div>
            <Image src={about1} alt="what we do" className="im" width={500} height={hhh}/>

          </div>
          <div className="footer">
      <div className="heading">
        <h2>ABCDEF<sup>&trade;</sup></h2>
      </div>
      <div className="content">
        <div className="services">
          <h4>Services</h4>
          <p><a href="#">App developmen</a></p>
          <p><a href="#">Web development</a></p>
          <p><a href="#">DevOps</a></p>
          <p><a href="#">Web designing</a></p>
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
          <p>
            <a href="https://github.com/sanketbodke"
              ><i className="fab fa-github"></i> Github</a
            >
          </p>
          <p>
            <a href="https://codepen.io/sanketbodke"
              ><i className="fab fa-codepen"></i> Codepen</a
            >
          </p>
          <p>
            <a href="https://www.instagram.com/imsanketbodke/?hl=en"
              ><i className="fab fa-instagram"></i> Instagram</a
            >
          </p>
        </div>
        <div className="links">
          <h4>Quick links</h4>
          <p><a href="#">Home</a></p>
          <p><a href="#">About</a></p>
          <p><a href="#">Blogs</a></p>
          <p><a href="#">Contact</a></p>
        </div>
        <div className="details">
          <h4 className="address">Address</h4>
          <p>
            Lorem ipsum dolor sit amet consectetur <br />
            adipisicing elit. Cupiditate, qui!
          </p>
          <h4 className="mobile">Mobile</h4>
          <p><a href="#">+9112233445</a></p>
          <h4 className="mail">Email</h4>
          <p><a href="#">abcdef@gmail.com</a></p>
        </div>
      </div>
      <footer>
        <hr />
        &copy; 2021 ABCDEF Technologies Pvt. Ltd.
      </footer>
    </div>
     </>
    )
}


export default Navbar