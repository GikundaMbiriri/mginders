import Head from 'next/head'
import script from 'next/script'
import Image from 'next/image'



import Link from 'next/link'
import Script from 'next/script'
export default function Home() {
 
  return (

  <div>
  <Head>
  <meta charset="utf-8"/>
  <meta content="width=device-width, initial-scale=1.0" name="viewport"/>
        <meta content="Consulting Website Template Free Download" name="keywords"/>
        <meta content="Consulting Website Template Free Download" name="description"/>
    <title>Mgrinders site.</title>
    <link href="/favicon.ico" rel="icon"/>
    <link href="https://fonts.googleapis.com/css2?family=Lato&family=Oswald:wght@200;300;400&display=swap" rel="stylesheet"/>
    <link href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css" rel="stylesheet"/>
    <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.10.0/css/all.min.css" rel="stylesheet"/>
    <link href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css" rel="stylesheet"/>
    <link href="https://cdn.boomcdn.com/libs/owl-carousel/2.3.4/assets/owl.carousel.min.css" rel="stylesheet"/>
   
  </Head>
{/* tool bar start */}
<body>
 
  <div className="top-bar d-none d-md-block">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-8">
                        <div className="top-bar-left">
                            <div className="text">
                                <i className="far fa-clock"></i>
                                <h2>8:00 - 9:00</h2>
                                <p className="tex">Mon - Fri</p>
                            </div>
                            <div className="text">
                                <i className="fa fa-phone-alt"></i>
                                <h2>+123 456 7890</h2>
                                <p>For Appointment</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="top-bar-right">
                            <div className="social">
                                <a href=""><i className="fab fa-twitter"></i></a>
                                <a href=""><i className="fab fa-facebook-f"></i></a>
                                <a href=""><i className="fab fa-scriptedin-in"></i></a>
                                <a href=""><i className="fab fa-instagram"></i></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        {/* tool bar end */}


        {/* nav bar start */}
        <div className="navbar navbar-expand-lg bg-dark navbar-dark">
            <div className="container-fluid">
                <a href="index.html" className="navbar-brand">Confer</a>
                <button type="button" className="navbar-toggler" data-toggle="collapse" data-target="#navbarCollapse">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse justify-content-between" id="navbarCollapse">
                    <div className="navbar-nav ml-auto">
                        <Link href="/" ><a className="nav-item nav-link active navbar-toggler" data-toggle="collapse" data-target="#navbarCollapse">Home</a></Link>
                        <Link href="about.html" ><a className="nav-item nav-link">About</a></Link>
                        <Link href="feature.html" ><a className="nav-item nav-link">Service</a></Link>
                        <Link href="index.html" ><a className="nav-item nav-link active">Feature</a></Link>
                        <Link href="advisor.html" ><a className="nav-item nav-link">Advisor</a></Link>
               
                        <Link href="review.html" ><a className="nav-item nav-link" >Review</a></Link>
               
                 
                    
                        <div className="nav-item dropdown">
                        <Link href="/" ><a className="nav-link dropdown-toggle" data-toggle="dropdown">About</a></Link>
                          
                            <div className="dropdown-menu">
                            <Link href="review.html" ><a className="dropdown-item" >Review</a></Link>
                            <Link href="review.html" ><a className="dropdown-item" >Revw</a></Link>
                        
                                
                            </div>
                        </div>
                        <Link href="review.html" ><a className="nav-item nav-link" >Rew</a></Link>
                        
                       
                    </div>
                </div>
            </div>
        </div>
        {/* navbar end */}
        {/* CAROSEL START */}
        <div className="carousel">
            <div className="container-fluid">
                <div className="owl-carousel">
                    <div className="carousel-item">
                        <div className="carousel-img">
                            <Image src="/carousel-2.jpg" alt="Image" width={2000}
        height={2000}/>
                        </div>
                        <div className="carousel-text">
                            <h1>Fastest Way to Achieve Success</h1>
                            <p>
                                Lorem ipsum dolor sit amet elit. Phasellus ut mollis mauris. Vivamus egestas eleifend dui ac consequat at lectus in malesuada
                            </p>
                            <div className="carousel-btn">
                                <a className="btn" href=""><i className="fa fa-link"></i>Get Started</a>
                                <a className="btn btn-play" data-toggle="modal" data-src="https://www.youtube.com/embed/DWRcNpR6Kdc" data-target="#videoModal"><i className="fa fa-play"></i>Watch Video</a>
                            </div>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <div className="carousel-img">
                            <Image src="/three.jpg" alt="Image" width={2000}
        height={2000}/>
                        </div>
                        <div className="carousel-text">
                            <h1>Your Success Our Achievement</h1>
                            <p>
                                Morbi sagittis turpis id suscipit feugiat. Suspendisse eu augue urna. Morbi sagittis, orci sodales varius fermentum, tortor
                            </p>
                            <div className="carousel-btn">
                                <a className="btn" href=""><i className="fa fa-link"></i>Get Started</a>
                                <a className="btn btn-play" data-toggle="modal" data-src="https://www.youtube.com/embed/DWRcNpR6Kdc" data-target="#videoModal"><i className="fa fa-play"></i>Watch Video</a>
                            </div>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <div className="carousel-img">
                            <Image src="/carousel-2.jpg" alt="Image" width={2000}
        height={2000}/>
                        </div>
                        <div className="carousel-text">
                            <h1>Your Business Our Effort</h1>
                            <p>
                                Sed ultrices, est eget feugiat accumsan, dui nibh egestas tortor, ut rhoncus nibh ligula euismod quam. Proin pellentesque odio
                            </p>
                            <div className="carousel-btn">
                                <a className="btn" href=""><i className="fa fa-link"></i>Get Started</a>
                                <a className="btn btn-play" data-toggle="modal" data-src="https://www.youtube.com/embed/DWRcNpR6Kdc" data-target="#videoModal"><i className="fa fa-play"></i>Watch Video</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        {/* CAROSEL END */}
        {/* VIDEO MODEL */}
        <div className="modal fade" id="videoModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog" role="document">
                <div className="modal-content">
                    <div className="modal-body">
                        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>        
                   
                        <div className="embed-responsive embed-responsive-16by9">
                            <iframe className="embed-responsive-item" src="" id="video"  allowscriptaccess="always" allow="autoplay"></iframe>
                        </div>
                    </div>
                </div>
            </div>
        </div> 
        {/* END OF VIDEO MODEL */}
        
        {/* Fact Start */}
        <div className="fact">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-3 col-md-6">
                        <div className="fact-item">
                            <Image src="/icon-4.png" alt="Icon" width={500}
        height={500}/>
                            <h2>Qualified Team</h2>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6">
                        <div className="fact-item">
                            <Image src="/icon-1.png" alt="Icon" width={500}
        height={500}/>
                            <h2>Individual Approach</h2>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6">
                        <div className="fact-item">
                            <Image src="/icon-8.png" alt="Icon" width={500}
        height={500}/>
                            <h2>100% Success</h2>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6">
                        <div className="fact-item">
                            <Image src="/icon-6.png" alt="Icon" width={500}
        height={500}/>
                            <h2>100% Satisfaction</h2>
                        </div>
                    </div>
                </div>
            </div>
        </div>
         {/* Fact Start  */}
         {/* ABOUT START */}
         <div className="about">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-md-6">
                        <div className="about-img">
                            <div className="about-img-1">
                                <Image src="/mobile.jpg" alt="Image" width={500}
        height={500}/>
                            </div>
                            <div className="about-img-2">
                                <Image src="/web1.jpeg" alt="Image" width={500}
        height={500}/>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="section-header">
                            <p>Learn About Us</p>
                            <h2>25 Years Experience</h2>
                        </div>
                        <div className="about-text">
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec pretium mi. Curabitur facilisis ornare velit non vulputate. Aliquam metus tortor, auctor id gravida condimentum, viverra quis sem.
                            </p>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec pretium mi. Curabitur facilisis ornare velit non vulputate. Aliquam metus tortor, auctor id gravida condimentum, viverra quis sem. Curabitur non nisl nec nisi scelerisque maximus. Aenean consectetur convallis porttitor. Aliquam interdum at lacus non blandit.
                            </p>
                            <a className="btn" href="">Learn More</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
         {/* ABOUT END */}
         {/* SERVICE START */}
         <div className="service">
            <div className="container">
                <div className="section-header">
                    <p>Consulting Services</p>
                    <h2>Our Best Consulting Services</h2>
                </div>
                <div className="row">
                    <div className="col-lg-3 col-md-6">
                        <div className="service-item">
                            <Image src="/icon-1.png" alt="Icon"  width={500}
        height={500}/>
                            <h3>Web And Mobile Applications Development</h3>
                            <p>
                                We develop modern and competitive applications for our clients.
                                We use the latest technologies like Kotlin,React ,Laravel etc to meet our clients needs
                            </p>
                           
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6">
                        <div className="service-item">
                            <Image src="/icon-2.png" alt="Icon"  width={500}
        height={500}/>
                            <h3>Management Systems</h3>
                            <p>
                                We create Inventories and Management Systems for institutions,companies and organizations.
                                Our systems make monitoring and supervision easier. 
                            </p>
                            <a href="">Read More</a>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6">
                        <div className="service-item">
                            <Image src="/icon-3.png" alt="Icon"  width={500}
        height={500}/>
                            <h3>Web Design</h3>
                            <p>
                                Websites are one of the best ways to market your brand or start-up.
                                We got you covered by designing the best websites for you.
                            </p>
                            <a href="">Read More</a>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6">
                        <div className="service-item">
                            <Image src="/icon-4.png" alt="Icon"  width={500}
        height={500}/>
                            <h3>IOT Projects</h3>
                            <p>
                               With our well qualified team we design appropriate IOT solutions for your Organisation ,company,institution etc.

                            </p>
                            <a href="">Read More</a>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6">
                        <div className="service-item">
                            <Image src="/icon-5.png" alt="Icon"  width={500}
        height={500}/>
                            <h3>Data Analysis</h3>
                            <p>
                                Our Data Analysis team is well qualified.We analyse data for your institution ,company ,organisation etc and advise you accordingly
                            </p>
                            <a href="">Read More</a>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6">
                        <div className="service-item">
                            <Image src="/icon-6.png" alt="Icon"  width={500}
        height={500}/>
                            <h3>Electrical Installation.</h3>
                            <p>
                                Our Engineers will do all the Electrical Installation you need ranging from domestic to industrial installation.
                            </p>
                            <a href="">Read More</a>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6">
                        <div className="service-item">
                            <Image src="/icon-7.png" alt="Icon"  width={500}
        height={500}/>
                            <h3>CCTV Installation</h3>
                            <p>
                               WE install high quality CCTV solutions  for our clients.
                              We use HD cameras to ensure we deliver quality work.
                            </p>
                            <a href="">Read More</a>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6">
                        <div className="service-item">
                            <Image src="/icon-8.png" alt="Icon"  width={500}
        height={500}/>
                            <h3>Training</h3>
                            <p>
                                We offer programming courses in Web And Mobile App development.
                                We train using the latest technologies to ensure our students are competitive enough in the global market.
                            </p>
                            <a href="">Read More</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
         {/* SERVICE END */}
         {/* FEATURE START */}
         <div className="feature">
            <div className="container">
                <div className="row align-items-end">
                    <div className="col-md-6">
                        <div className="feature-img">
                            <Image src="/business-man.png" alt="Image" width={500}
        height={500}/>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="section-header">
                            <p>Our Feature</p>
                            <h2>Why Choose Us?</h2>
                        </div>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec pretium mi. Curabitur facilisis ornare velit non vulputate. Aliquam metus tortor, auctor id gravida condimentum, viverra quis sem. Curabitur non nisl nec nisi scelerisque maximus 
                        </p>
                        <div className="row counters">
                            <div className="col-6">
                                <i className="fa fa-user"></i>
                                <div className="counters-text">
                                    <h2 data-toggle="counter-up">100</h2>
                                    <p>Our Staffs</p>
                                </div>
                            </div>
                            <div className="col-6">
                                <i className="fa fa-users"></i>
                                <div className="counters-text">
                                    <h2 data-toggle="counter-up">200</h2>
                                    <p>Our Clients</p>
                                </div>
                            </div>
                            <div className="col-6">
                                <i className="fa fa-check"></i>
                                <div className="counters-text">
                                    <h2 data-toggle="counter-up">300</h2>
                                    <p>Completed Projects</p>
                                </div>
                            </div>
                            <div className="col-6">
                                <i className="fa fa-running"></i>
                                <div className="counters-text">
                                    <h2 data-toggle="counter-up">400</h2>
                                    <p>Running Projects</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
         {/* FEATURE END */}
         {/* TESTIMONIAL START */}
         <div className="testimonial">
            <div className="container">
                <div className="section-header">
                    <p>Testimonial Carousel</p>
                    <h2>100% Positive Customer Reviews</h2>
                </div>
                <div className="owl-carousel testimonials-carousel">
                    <div className="testimonial-item">
                        <Image src="/testimonial-1.jpg" alt="Image" width={500}
        height={500}/>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus ut mollis mauris. Vivamus egestas eleifend dui ac consequat
                        </p>
                        <h2>Client Name</h2>
                        <h3>Profession</h3>
                    </div>
                    <div className="testimonial-item">
                        <Image src="/testimonial-2.jpg" alt="Image" width={500}
        height={500}/>
                        <p>
                            Phasellus pellentesque tempus pretium. Quisque in enim sit amet purus venenatis porttitor sed non velit. Vivamus vehicula finibus
                        </p>
                        <h2>Client Name</h2>
                        <h3>Profession</h3>
                    </div>
                    <div className="testimonial-item">
                        <Image src="/testimonial-3.jpg" alt="Image" width={500}
        height={500}/>
                        <p>
                            Sed in lectus eu eros tincidunt cursus. Aliquam eleifend velit nisl. Sed et posuere urna, ut vestibulum massa. Integer quis magna
                        </p>
                        <h2>Client Name</h2>
                        <h3>Profession</h3>
                    </div>
                    <div className="testimonial-item">
                        <Image src="/testimonial-4.jpg" alt="Image" width={500}
        height={500}/>
                        <p>
                            Sed in lectus eu eros tincidunt cursus. Aliquam eleifend velit nisl. Sed et posuere urna, ut vestibulum massa. Integer quis magna
                        </p>
                        <h2>Client Name</h2>
                        <h3>Profession</h3>
                    </div>
                </div>
            </div>
        </div>
         {/* TESTIMONIAL END */}
         {/* TEAM START */}
         <div className="team">
            <div className="container">
                <div className="section-header">
                    <p>Meet Our Advisors</p>
                    <h2>Our Professional Consulting Team</h2>
                </div>
                <div className="row">
                    <div className="col-lg-3 col-md-6">
                        <div className="team-item">
                            <div className="team-img">
                                <Image src="/team-1.jpg" alt="Team Image"  width={500}
        height={500}/>
                            </div>
                            <div className="team-text">
                                <h2>Donald John</h2>
                                <p>Founder & CEO</p>
                                <div className="team-social">
                                    <a href=""><i className="fab fa-twitter"></i></a>
                                    <a href=""><i className="fab fa-facebook-f"></i></a>
                                    <a href=""><i className="fab fa-linkedin-in"></i></a>
                                    <a href=""><i className="fab fa-instagram"></i></a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6">
                        <div className="team-item">
                            <div className="team-img">
                                <Image src="/team-2.jpg" alt="Team Image"  width={500}
        height={500}/>
                            </div>
                            <div className="team-text">
                                <h2>Adam Phillips</h2>
                                <p>Chef Executive</p>
                                <div className="team-social">
                                    <a href=""><i className="fab fa-twitter"></i></a>
                                    <a href=""><i className="fab fa-facebook-f"></i></a>
                                    <a href=""><i className="fab fa-linkedin-in"></i></a>
                                    <a href=""><i className="fab fa-instagram"></i></a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6">
                        <div className="team-item">
                            <div className="team-img">
                                <Image src="/team-3.jpg" alt="Team Image"  width={500}
        height={500}/>
                            </div>
                            <div className="team-text">
                                <h2>Thomas Olsen</h2>
                                <p>Chef Advisor</p>
                                <div className="team-social">
                                    <a href=""><i className="fab fa-twitter"></i></a>
                                    <a href=""><i className="fab fa-facebook-f"></i></a>
                                    <a href=""><i className="fab fa-linkedin-in"></i></a>
                                    <a href=""><i className="fab fa-instagram"></i></a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6">
                        <div className="team-item">
                            <div className="team-img">
                                <Image src="/team-4.jpg" alt="Team Image"  width={500}
        height={500}/>
                            </div>
                            <div className="team-text">
                                <h2>James Alien</h2>
                                <p>Advisor</p>
                                <div className="team-social">
                                    <a href=""><i className="fab fa-twitter"></i></a>
                                    <a href=""><i className="fab fa-facebook-f"></i></a>
                                    <a href=""><i className="fab fa-linkedin-in"></i></a>
                                    <a href=""><i className="fab fa-instagram"></i></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
         {/* TEAM END */}
         {/* CONTACT START */}
         <div className="contact">
            <div className="container">
                <div className="section-header">
                    <p>Get In Touch</p>
                    <h2>Get In Touch For Any Query</h2>
                </div>
                <div className="row align-items-center">
                    <div className="col-md-5">
                        <div className="contact-info">
                            <div className="contact-icon">
                                <i className="fa fa-map-marker-alt"></i>
                            </div>
                            <div className="contact-text">
                                <h3>Our Head Office</h3>
                                <p>123 Street, New York, USA</p>
                            </div>
                        </div>
                        <div className="contact-info">
                            <div className="contact-icon">
                                <i className="fa fa-phone-alt"></i>
                            </div>
                            <div className="contact-text">
                                <h3>Call for Help</h3>
                                <p>+012 345 6789</p>
                            </div>
                        </div>
                        <div className="contact-info">
                            <div className="contact-icon">
                                <i className="fa fa-envelope"></i>
                            </div>
                            <div className="contact-text">
                                <h3>Email for Information</h3>
                                <p>info@example.com</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-7">
                        <div className="contact-form">
                            <div id="success"></div>
                            <form name="sentMessage" id="contactForm" noValidate="novalidate">
                                <div className="control-group">
                                    <input type="text" className="form-control" id="name" placeholder="Your Name" required="required" data-validation-required-message="Please enter your name" />
                                    <p className="help-block text-danger"></p>
                                </div>
                                <div className="control-group">
                                    <input type="email" className="form-control" id="email" placeholder="Your Email" required="required" data-validation-required-message="Please enter your email" />
                                    <p className="help-block text-danger"></p>
                                </div>
                                <div className="control-group">
                                    <input type="text" className="form-control" id="subject" placeholder="Subject" required="required" data-validation-required-message="Please enter a subject" />
                                    <p className="help-block text-danger"></p>
                                </div>
                                <div className="control-group">
                                    <textarea className="form-control" id="message" placeholder="Message" required="required" data-validation-required-message="Please enter your message"></textarea>
                                    <p className="help-block text-danger"></p>
                                </div>
                                <div>
                                    <button className="btn" type="submit" id="sendMessageButton">Send Message</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
         {/* CONTACT END */}
         {/* BLOG START */}
         <div className="blog">
            <div className="container">
                <div className="section-header">
                    <p>Consulting Blog</p>
                    <h2>Latest From Our Consulting Blog</h2>
                </div>
                <div className="owl-carousel blog-carousel">
                    <div className="blog-item">
                        <div className="blog-img">
                            <Image src="/blog-1.jpg" alt="Blog" width={500}
        height={500}/>
                        </div>
                        <div className="blog-content">
                            <h2 className="blog-title">Lorem ipsum dolor sit amet</h2>
                            <div className="blog-meta">
                                <i className="fa fa-list-alt"></i>
                                <a href="">Category</a>
                                <i className="fa fa-calendar-alt"></i>
                                <p>01-Jan-2045</p>
                            </div>
                            <div className="blog-text">
                                <p>
                                    Lorem ipsum dolor sit amet elit. Neca pretim miura bitur facili ornare velit non vulpte liqum metus tortor. Lorem ipsum dolor sit amet elit. Neca pretim miura bitur facili ornare velit non vulpte liqum metus tortor
                                </p>
                                <a className="btn" href="">Read More</a>
                            </div>
                        </div>
                    </div>
                    <div className="blog-item">
                        <div className="blog-img">
                            <Image src="/blog-2.jpg" alt="Blog" width={500}
        height={500}/>
                        </div>
                        <div className="blog-content">
                            <h2 className="blog-title">Lorem ipsum dolor sit amet</h2>
                            <div className="blog-meta">
                                <i className="fa fa-list-alt"></i>
                                <a href="">Category</a>
                                <i className="fa fa-calendar-alt"></i>
                                <p>01-Jan-2045</p>
                            </div>
                            <div className="blog-text">
                                <p>
                                    Lorem ipsum dolor sit amet elit. Neca pretim miura bitur facili ornare velit non vulpte liqum metus tortor. Lorem ipsum dolor sit amet elit. Neca pretim miura bitur facili ornare velit non vulpte liqum metus tortor
                                </p>
                                <a className="btn" href="">Read More</a>
                            </div>
                        </div>
                    </div>
                    <div className="blog-item">
                        <div className="blog-img">
                            <Image src="/blog-3.jpg" alt="Blog" width={500}
        height={500}/>
                        </div>
                        <div className="blog-content">
                            <h2 className="blog-title">Lorem ipsum dolor sit amet</h2>
                            <div className="blog-meta">
                                <i className="fa fa-list-alt"></i>
                                <a href="">Category</a>
                                <i className="fa fa-calendar-alt"></i>
                                <p>01-Jan-2045</p>
                            </div>
                            <div className="blog-text">
                                <p>
                                    Lorem ipsum dolor sit amet elit. Neca pretim miura bitur facili ornare velit non vulpte liqum metus tortor. Lorem ipsum dolor sit amet elit. Neca pretim miura bitur facili ornare velit non vulpte liqum metus tortor
                                </p>
                                <a className="btn" href="">Read More</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
         {/* BLOG END */}
      {/* FOOTER START */}
      <div className="footer">
            <div className="container">
                <div className="row">
                    <div className="col-lg-7">
                        <div className="row">
                            <div className="col-md-6">
                                <div className="footer-contact">
                                    <h2>Our Head Office</h2>
                                    <p><i className="fa fa-map-marker-alt"></i>123 Street, New York, USA</p>
                                    <p><i className="fa fa-phone-alt"></i>+012 345 67890</p>
                                    <p><i className="fa fa-envelope"></i>info@example.com</p>
                                    <div className="footer-social">
                                        <a href=""><i className="fab fa-twitter"></i></a>
                                        <a href=""><i className="fab fa-facebook-f"></i></a>
                                        <a href=""><i className="fab fa-youtube"></i></a>
                                        <a href=""><i className="fab fa-instagram"></i></a>
                                        <a href=""><i className="fab fa-linkedin-in"></i></a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="footer-link">
                                    <h2>Quick Links</h2>
                                    <a href="">Terms of use</a>
                                    <a href="">Privacy policy</a>
                                    <a href="">Cookies</a>
                                    <a href="">Help</a>
                                    <a href="">FQAs</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-5">
                        <div className="footer-newsletter">
                            <h2>Newsletter</h2>
                            <p>
                                Lorem ipsum dolor sit amet elit. Quisque eu lectus a leo dictum nec non quam. Tortor eu placerat rhoncus, lorem quam iaculis felis, sed lacus neque id eros.
                            </p>
                            <div className="form">
                                <input className="form-control" placeholder="Email goes here"/>
                                <button className="btn">Submit</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container copyright">
                <div className="row">
                    <div className="col-md-6">
                        <p>&copy; <a href="#">Your Site Name</a>, All Right Reserved.</p>
                    </div>
                    <div className="col-md-6">
                        <p>Designed By <Link href="https://htmlcodex.com"><a >HTML Codex</a></Link> </p>
                    </div>
                </div>
            </div>
        </div>
      {/* FOOTER END */}
      <Script src="https://code.jquery.com/jquery-3.4.1.min.js"/>
        <Script src="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/js/bootstrap.bundle.min.js"/>
        <Script src="https://cdnjs.cloudflare.com/ajax/libs/jquery-easing/1.4.1/jquery.easing.min.js"/>
        <Script src="https://cdn.boomcdn.com/libs/owl-carousel/2.3.4/owl.carousel.min.js"/>
        <Script src="https://cdnjs.cloudflare.com/ajax/libs/waypoints/3.0.0/jquery.waypoints.min.js"/>
        <Script src="https://cdnjs.cloudflare.com/ajax/libs/Counter-Up/1.0.0/jquery.counterup.min.js"/>
        
   
        <Script src="https://cdnjs.cloudflare.com/ajax/libs/jqBootstrapValidation/1.3.7/jqBootstrapValidation.min.js"/>
        {/* <Script src="contact.js"/> */}


        <Script src="/js/main.js"/>
        </body>
  </div>
  

)
}