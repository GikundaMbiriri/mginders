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
            <p className="text-justify">MGrinders <i>CODE WANTS TO BE SIMPLE </i> is an initiative  to help the upcoming programmers with the code. Scanfcode focuses on providing the most efficient code or snippets as the code wants to be simple. We will help programmers build up concepts in different programming languages that include C, C++, Java, HTML, CSS, Bootstrap, JavaScript, PHP, Android, SQL and Algorithm.</p>
          </div>

          <div className="col-xs-6 col-md-3">
            <h6>Our solutions</h6>
            <ul className={styles.footerlinks}>
              <li>Web And Mobile App Development</li>
              <li>IOT Projects</li>
              <li>Web Design</li>
              <li>Data Analysis</li>
              <li>Coding Classes</li>
             
            </ul>
          </div>

          <div className="col-xs-6 col-md-3">
            <h6>Quick Links</h6>
            <ul className={styles.footerlinks}>
              <li> <Link href="/"><a>Home</a></Link></li>
             <li> <Link href="/about"><a>About</a></Link></li>
             <li>   <Link href="/"><a>Services</a></Link></li>
           
              <li><Link href="/"><a>Coding Solutions</a></Link></li>
            
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
