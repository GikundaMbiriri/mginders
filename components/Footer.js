import Link from 'next/link'
import 'bootstrap/dist/css/bootstrap.css'
import styles from '../styles/Footer.module.css'
import TwitterIcon from '@material-ui/icons/Twitter';
import FacebookIcon from '@material-ui/icons/Facebook';
import { LinkedIn } from '@material-ui/icons';
import InstagramIcon from '@material-ui/icons/Instagram';
function Footer() {
    return (
        
      <div className={styles.sitefooter}>
      <div className="container">
        <div className="row">
          <div className="col-sm-12 col-md-6">
            <h6>Our Mission</h6>
            <p className="text-justify">Our mission is to make the world a better place by creating reliable tech solutions to the problems that are in our society.We also aim at raising more tech talent by training passionate learners into tech.</p>
          </div>

          <div className="col-xs-6 col-md-3">
            <h6>Our solutions</h6>
            <ul className={styles.footerlinks}>
              <li>Web  Development</li>
              <li>App Development</li>
              <li>IOT Projects</li>
              <li>Management Systems</li>
         
             
            </ul>
          </div>

          <div className="col-xs-6 col-md-3">
            <h6>Quick Links</h6>
            <ul className={styles.footerlinks}>
              <li> <Link href="/"><a>Home</a></Link></li>
             <li> <Link href="/aboutm"><a>About</a></Link></li>
             <li>   <Link href="/servicesm"><a>Services</a></Link></li>
           
              <li><Link href="/contact-us"><a>Contact us</a></Link></li>
            
            </ul>
          </div>
        </div>
        <hr/>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-md-8 col-sm-6 col-xs-12">
            <p className={styles.copyrighttext}>Copyright &copy; 2021 All Rights Reserved by 
         <a href="#"> MGrinders</a>.
            </p>
          </div>

          <div className="col-md-4 col-sm-6 col-xs-12">
            <ul className={styles.socialicons}>
              <li><a className={styles.facebook} href="#"><FacebookIcon/></a></li>
              <li><a className= {styles.twitter}  href="#"><TwitterIcon/></a></li>
              <li><a className= {styles.dribbble}  href="#"><InstagramIcon/></a></li>
              <li><a className= {styles.linkedin}  href="#"><LinkedIn/></a></li>   
            </ul>
          </div>
        </div>
      </div>
</div>
    
    )
}

export default Footer
