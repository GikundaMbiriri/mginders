
import Head from 'next/head'
import script from 'next/script'
import Image from 'next/image'



import Link from 'next/link'
import Script from 'next/script'
export default function about() {
    return (
        <body>
             <Head>
  <meta charset="utf-8"/>
  <meta content="width=device-width, initial-scale=1.0" name="viewport"/>
        <meta content="Consulting Website Template Free Download" name="keywords"/>
        <meta content="Consulting Website Template Free Download" name="description"/>
    <title>About Page</title>
    <link href="/favicon.ico" rel="icon"/>
    <link href="https://fonts.googleapis.com/css2?family=Lato&family=Oswald:wght@200;300;400&display=swap" rel="stylesheet"/>
    <link href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css" rel="stylesheet"/>
    <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.10.0/css/all.min.css" rel="stylesheet"/>
    <link href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css" rel="stylesheet"/>
    <link href="https://cdn.boomcdn.com/libs/owl-carousel/2.3.4/assets/owl.carousel.min.css" rel="stylesheet"/>
   
  </Head>
{/* tool bar start */}
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
                <Link href="/"><a  className="navbar-brand">Mgrinders</a></Link>
                <button type="button" className="navbar-toggler" data-toggle="collapse" data-target="#navbarCollapse">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse justify-content-between" id="navbarCollapse">
                    <div className="navbar-nav ml-auto">
                        <Link href="/" ><a className="nav-item nav-link active navbar-toggler" data-toggle="collapse" data-target="#navbarCollapse">Home</a></Link>
                        <Link href="/about" ><a className="nav-item nav-link">About</a></Link>
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
    )
}
