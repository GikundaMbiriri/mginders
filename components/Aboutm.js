import styles from '../styles/Aboutm.module.css';
import ob from '../public/ob.jpg'
import sisi from '../public/geo.jpg'
import Image from 'next/image';
import  { useEffect } from "react";
import AOS from 'aos';
import "aos/dist/aos.css";

function Aboutm() {
  
    return (
        <>
        <div className={styles.banner}>
        <h2>About M-Grinders Tech Solutions LTD</h2>
        <h6>Home/About M-Grinders Tech Solutions Ltd</h6>

        </div>
        <div className={styles.about}>
        <Image src={sisi} alt="about"  className={styles.im} width={500} height={400} />
        <div className={styles.right} >
<h2>About M-Grinders tech solutions</h2>
<p>Oracom Web Solutions Ltd is a creative Web Design company in Kenya, Canada and Belgium. We stand out in the local and international market to be the best provider of Web Solutions with over 8 Years experience but always guided by Creative Teams of web developers working in both day and night shift arrangement. We are fully charged with the responsibility of developing Quality, Affordable, Effective, Efficient and Reliable Website Solutions to our ever growing wide category of clients.</p>
        </div>
        </div>
        <div className={styles.ccc}>
<div className={styles.sidea}>
<div className="wrapper">
  <div className="containe">
    <h2>Animated Skills </h2>
    <div className="skills">
      <div className="details">
        <span>HTML</span>
        <span>90%</span>
      </div>
      <div className="bar">
        <div id="html-bar"></div>
      </div>
    </div>
    <div className="skills">
      <div className="details">
        <span>CSS</span>
        <span>75%</span>
      </div>
      <div className="bar">
        <div id="css-bar"></div>
      </div>
    </div>
    <div className="skills">
      <div className="details">
        <span>Javascript</span>
        <span>72%</span>
      </div>
      <div className="bar">
        <div id="javascript-bar"></div>
      </div>
    </div>
    <div className="skills">
      <div className="details">
        <span>jQuery</span>
        <span>68%</span>
      </div>
      <div className="bar">
        <div id="jQuery-bar"></div>
      </div>
    </div>

  </div>
</div>
</div>
<div className={styles.sideb}>
<div className={styles.story}>
<h2>Our success story</h2>
<p>
As Team Oracom Kenya, we are driven by 4 Pillars;

The Desire to lead in the market with best online solutions
Creativity – creative minds and teams
Research & Innovation – we are also called the GES and Entrepreneurship Company
Passion & Hard work – drives us daily
</p>
</div>

</div>
        </div>
        
        </>
    )
}

export default Aboutm
