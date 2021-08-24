
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
import about2 from '../public/blog-3.jpg';
import ImageContainer from '../components/TextOnImage';
import PersonIcon from '@material-ui/icons/Person';
import pic from '../public/business-man.png';
import aboutus from '../public/about.jpg'
function Navbar() {
  useEffect(() => {
    AOS.init({
      duration : 2000
    });
  }, []);
  var hhh = 400;


  return (
    <>

      <Head>
      <Script src="https://kit.fontawesome.com/36f635d60e.js" crossorigin="anonymous"/>

      </Head>
      <div className="navh">
        <input type="checkbox" id="navh-check" />
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
        <div className="beba" data-aos="flip-left"
     data-aos-easing="ease-out-cubic"
     data-aos-duration="2000">
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
       
      
        <PersonIcon className="hh" style={{ fontSize: 150 }}/>
        <div className="beb">
          <h2>Satisfaction Guaranteed</h2>
          <div className="hte">
            We understand the complexities of modern markets and translate them into real business solutions for automotive, financial, insurance, pharma & life sciences,

          </div>

        </div>
        <div className="dd">
        <button className="xvv" type="button">
            Find Out More
          </button>
        </div>
      </div>

      <div className="about">
        
        <div className="hdiva">
          <div className="dec">
            <h2>About us.</h2>
            <p>
            Lorem id dkfk best way to trennr in a company setup so that we acquire the best in thios world of programming that we make it till the end.
            Lorem id dkfk best way to trennr in a company setup so that we acquire the best in thios world of programming that we make it till the end.
            Lorem id dkfk best way to trennr in a company setup so that we acquire the best in thios world of programming that we make it till the end.
            </p>
          </div>
          <Image src={aboutus} alt="what we do" className="im" width={500} height={hhh} />


        </div>
      </div>
      <div className="industry">
        <div className="hind">Services We Offer</div>
        <div className="hdiv">

          <Image src={about1} alt="what we do" className="ime" width={500} height={hhh} />

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
        <Image src={about1} alt="what we do" className="im" width={500} height={hhh} />

      </div>
      <section className="text-center my-5">

        <h2 className="h1-responsive font-weight-bold my-5">Testimonials v.4</h2>

        <div className="row">

          <div id="multi-item-example" className="carousel testimonial-carousel slide carousel-multi-item mb-5" data-ride="carousel">

            <div className="controls-top">
              <a className="btn-floating light-blue darken-4" href="#multi-item-example" data-slide="prev"><i className="fas fa-chevron-left"></i></a>
              <a className="btn-floating light-blue darken-4" href="#multi-item-example" data-slide="next"><i className="fas fa-chevron-right"></i></a>
            </div>

            <ol className="carousel-indicators">
              <li data-target="#multi-item-example" data-slide-to="0" className="active light-blue darken-4"></li>
              <li data-target="#multi-item-example" data-slide-to="1" className="light-blue darken-4"></li>
              <li data-target="#multi-item-example" data-slide-to="2" className="light-blue darken-4"></li>
            </ol>

            <div className="carousel-inner" role="listbox">

              <div className="carousel-item active">

                <div className="col-md-4">
                  <div className="testimonial">
                    <div className="avatar mx-auto">
                      <Image alt="mbisha" src={pic} className="rounded-circle img-fluid" />
                    </div>
                    <h4 className="font-weight-bold mt-4">Anna Deynah</h4>
                    <h6 className="blue-text font-weight-bold my-3">Web Designer</h6>
                    <p className="font-weight-normal"><i className="fas fa-quote-left pr-2"></i>Lorem ipsum dolor sit amet,
                      consectetur adipisicing elit. Quod eos id officiis hic tenetur.</p>
                    <div className="grey-text">
                      <i className="fas fa-star"> </i>
                      <i className="fas fa-star"> </i>
                      <i className="fas fa-star"> </i>
                      <i className="fas fa-star"> </i>
                      <i className="fas fa-star-half-alt"> </i>
                    </div>
                  </div>
                </div>

                <div className="col-md-4 clearfix d-none d-md-block">
                  <div className="testimonial">
                    <div className="avatar mx-auto">
                      <Image alt="mbisha" src={pic} className="rounded-circle img-fluid" />
                    </div>
                    <h4 className="font-weight-bold mt-4">John Doe</h4>
                    <h6 className="blue-text font-weight-bold my-3">Web Developer</h6>
                    <p className="font-weight-normal"><i className="fas fa-quote-left pr-2"></i>Ut enim ad minima veniam,
                      quis
                      nostrum exercitationem ullam corporis laboriosam.</p>
                    <div className="grey-text">
                      <i className="fas fa-star"> </i>
                      <i className="fas fa-star"> </i>
                      <i className="fas fa-star"> </i>
                      <i className="fas fa-star"> </i>
                      <i className="fas fa-star"> </i>
                    </div>
                  </div>
                </div>

                <div className="col-md-4 clearfix d-none d-md-block">
                  <div className="testimonial">
                    <div className="avatar mx-auto">
                      <Image alt="mbisha" src={pic} className="rounded-circle img-fluid" />
                    </div>
                    <h4 className="font-weight-bold mt-4">Abbey Clark</h4>
                    <h6 className="blue-text font-weight-bold my-3">Photographer</h6>
                    <p className="font-weight-normal"><i className="fas fa-quote-left pr-2"></i>Quis autem vel eum iure
                      reprehenderit qui in ea voluptate velit esse quam nihil molestiae.</p>
                    <div className="grey-text">
                      <i className="fas fa-star"> </i>
                      <i className="fas fa-star"> </i>
                      <i className="fas fa-star"> </i>
                      <i className="fas fa-star"> </i>
                      <i className="far fa-star"> </i>
                    </div>
                  </div>
                </div>

              </div>

              <div className="carousel-item">

                <div className="col-md-4">
                  <div className="testimonial">
                    <div className="avatar mx-auto">
                      <Image alt="mbisha" src={pic} className="rounded-circle img-fluid" />
                    </div>
                    <h4 className="font-weight-bold mt-4">Blake Dabney</h4>
                    <h6 className="blue-text font-weight-bold my-3">Web Designer</h6>
                    <p className="font-weight-normal"><i className="fas fa-quote-left pr-2"></i>Ut enim ad minima veniam,
                      quis
                      nostrum exercitationem ullam corporis laboriosam.</p>
                    <div className="grey-text">
                      <i className="fas fa-star"> </i>
                      <i className="fas fa-star"> </i>
                      <i className="fas fa-star"> </i>
                      <i className="fas fa-star"> </i>
                      <i className="fas fa-star-half-alt"> </i>
                    </div>
                  </div>
                </div>

                <div className="col-md-4 clearfix d-none d-md-block">
                  <div className="testimonial">
                    <div className="avatar mx-auto">
                      <Image alt="mbisha" src={pic} className="rounded-circle img-fluid" />
                    </div>
                    <h4 className="font-weight-bold mt-4">Andrea Clay</h4>
                    <h6 className="blue-text font-weight-bold my-3">Front-end developer</h6>
                    <p className="font-weight-normal"><i className="fas fa-quote-left pr-2"></i>Lorem ipsum dolor sit amet,
                      consectetur adipisicing elit. Quod eos id officiis hic tenetur quae.</p>
                    <div className="grey-text">
                      <i className="fas fa-star"> </i>
                      <i className="fas fa-star"> </i>
                      <i className="fas fa-star"> </i>
                      <i className="fas fa-star"> </i>
                      <i className="fas fa-star"> </i>
                    </div>
                  </div>
                </div>

                <div className="col-md-4 clearfix d-none d-md-block">
                  <div className="testimonial">
                    <div className="avatar mx-auto">
                      <Image alt="mbisha" src={pic} className="rounded-circle img-fluid" />
                    </div>
                    <h4 className="font-weight-bold mt-4">Cami Gosse</h4>
                    <h6 className="blue-text font-weight-bold my-3">Phtographer</h6>
                    <p className="font-weight-normal"><i className="fas fa-quote-left pr-2"></i>At vero eos et accusamus et
                      iusto odio dignissimos ducimus qui blanditiis praesentium.</p>
                    <div className="grey-text">
                      <i className="fas fa-star"> </i>
                      <i className="fas fa-star"> </i>
                      <i className="fas fa-star"> </i>
                      <i className="fas fa-star"> </i>
                      <i className="far fa-star"> </i>
                    </div>
                  </div>
                </div>

              </div>

              <div className="carousel-item">

                <div className="col-md-4">
                  <div className="testimonial">
                    <div className="avatar mx-auto">
                      <Image alt="mbisha" src={pic} className="rounded-circle img-fluid" />
                    </div>
                    <h4 className="font-weight-bold mt-4">Bobby Haley</h4>
                    <h6 className="blue-text font-weight-bold my-3">Web Developer</h6>
                    <p className="font-weight-normal"><i className="fas fa-quote-left pr-2"></i>Lorem ipsum dolor sit amet,
                      consectetur adipisicing elit. Quod eos id officiis hic tenetur quae.</p>
                    <div className="grey-text">
                      <i className="fas fa-star"> </i>
                      <i className="fas fa-star"> </i>
                      <i className="fas fa-star"> </i>
                      <i className="fas fa-star"> </i>
                      <i className="fas fa-star"> </i>
                    </div>
                  </div>
                </div>

                <div className="col-md-4 clearfix d-none d-md-block">
                  <div className="testimonial">
                    <div className="avatar mx-auto">
                      <Image alt="mbisha" src={pic} className="rounded-circle img-fluid"/>
                    </div>
                    <h4 className="font-weight-bold mt-4">Elisa Janson</h4>
                    <h6 className="blue-text font-weight-bold my-3">Marketer</h6>
                    <p className="font-weight-normal"><i className="fas fa-quote-left pr-2"></i>At vero eos et accusamus et
                      iusto odio dignissimos ducimus qui blanditiis praesentium.</p>
                    <div className="grey-text">
                      <i className="fas fa-star"> </i>
                      <i className="fas fa-star"> </i>
                      <i className="fas fa-star"> </i>
                      <i className="fas fa-star"> </i>
                      <i className="fas fa-star-half-alt"> </i>
                    </div>
                  </div>
                </div>

                <div className="col-md-4 clearfix d-none d-md-block">
                  <div className="testimonial">
                    <div className="avatar mx-auto">
                      <Image alt="mbisha" src={pic} className="rounded-circle img-fluid" />
                    </div>
                    <h4 className="font-weight-bold mt-4">Rob Jacobs</h4>
                    <h6 className="blue-text font-weight-bold my-3">Front-end developer</h6>
                    <p className="font-weight-normal"><i className="fas fa-quote-left pr-2"></i>Ut enim ad minima veniam,
                      quis
                      nostrum exercitationem ullam corporis laboriosam.</p>
                    <div className="grey-text">
                      <i className="fas fa-star"> </i>
                      <i className="fas fa-star"> </i>
                      <i className="fas fa-star"> </i>
                      <i className="fas fa-star"> </i>
                      <i className="far fa-star"> </i>
                    </div>
                  </div>
                </div>

              </div>

            </div>

          </div>

        </div>

      </section>

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
          &copy; 2021 MGrinders Technologies Pvt. Ltd.
        </footer>
      </div>
    </>
  )
}


export default Navbar