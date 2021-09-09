import styles from '../styles/Aboutm.module.css';
import ob from '../public/ob.jpg'
import sisi from '../public/geo.jpg'
import Image from 'next/image';
import  { useEffect,useState } from "react";
import AOS from 'aos';
import "aos/dist/aos.css";
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import QuestionAnswerIcon from '@material-ui/icons/QuestionAnswer';
function Aboutm() {
const [story1,setStory1]=useState(true);
const [story,setStory]=useState(false);
const [stor,setStor]=useState(false);
const [sto,setSto]=useState(false);

function fstory1(){
    setStory1(true);
    setStory(false);
    setStor(false);
    setSto(false);

}
function fstory(){
    setStory1(false);
    setStory(true);
    setStor(false);
    setSto(false);
    
}
function fstor(){
    setStory1(false);
    setStory(false);
    setStor(true);
    setSto(false);
    
}
function fsto(){
    setStory1(false);
    setStory(false);
    setStor(false);
    setSto(true);
    
}
  
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
    <h2>Our  Skills </h2>
    <div className="skills">
      <div className="details">
        <span>Web Development</span>
        <span></span>
      </div>
      <div className="bar">
        <div id="html-bar" ></div>
      </div>
    </div>
    <div className="skills">
      <div className="details">
        <span>App Development</span>
        <span></span>
      </div>
      <div className="bar">
        <div id="css-bar"></div>
      </div>
    </div>
    <div className="skills">
      <div className="details">
        <span>Management Systems</span>
        <span></span>
      </div>
      <div className="bar" >
        <div id="javascript-bar"></div>
      </div>
    </div>
    <div className="skills">
      <div className="details">
        <span>IOT Projects</span>
        <span></span>
      </div>
      <div className="bar">
        <div id="jQuery-bar"></div>
      </div>
    </div>

  </div>
</div>
</div>
<div className={styles.sideb}>
<div >
<div className={styles.juu} onClick={fstory1}>

<h2><span>+</span> Our success story</h2>
</div>
{story1 && <div className={styles.story1}>
As Team Oracom Kenya, we are driven by 4 Pillars;
<ul>
<li>The Desire to lead in the market with best online solutions</li>
<li>The Desire to lead in the market with best online solutions</li>
<li>The Desire to lead in the market with best online solutions</li>
<li>The Desire to lead in the market with best online solutions</li>
</ul>

</div>}

</div>
<div >
<div className={styles.juu} onClick={fstory}>

<h2><span>+</span> Your Success - Our Business.</h2>
</div>
{story && <div className={styles.story1}>
As Team Oracom Kenya, we are driven by 4 Pillars;
<ul>
<li>The Desire to lead in the market with best online solutions</li>
<li>The Desire to lead in the market with best online solutions</li>
<li>The Desire to lead in the market with best online solutions</li>
<li>The Desire to lead in the market with best online solutions</li>
</ul>

</div>}

</div>
<div >
<div className={styles.juu} onClick={fstor}>

<h2><span>+</span> Why You will want to work with us</h2>
</div>
{stor && <div className={styles.story1}>
As Team Oracom Kenya, we are driven by 4 Pillars;
<ul>
<li>The Desire to lead in the market with best online solutions</li>
<li>The Desire to lead in the market with best online solutions</li>
<li>The Desire to lead in the market with best online solutions</li>
<li>The Desire to lead in the market with best online solutions</li>
</ul>

</div>
}
</div>
<div >
<div className={styles.juu} onClick={fsto}>

<h2><span>+</span> How we work</h2>
</div>
{sto && <div className={styles.story1}>
As Team Oracom Kenya, we are driven by 4 Pillars;
<ul>
<li>The Desire to lead in the market with best online solutions</li>
<li>The Desire to lead in the market with best online solutions</li>
<li>The Desire to lead in the market with best online solutions</li>
<li>The Desire to lead in the market with best online solutions</li>
</ul>

</div>}

</div>
</div>
        </div>
        <div className={styles.projects}>
        <h2>PROJECT PROCESS</h2>
         <Carousel autoPlay
      infiniteLoop
      showIndicators={false}
      showStatus={false}
      showThumbs={false} stopOnHover={true} interval={4000}>
                <div className={styles.beba}>
                    <QuestionAnswerIcon className={styles.ic} style={{fontSize:70}} />
                  <h6 className={styles.hea}>Step 1</h6>
                  <h6 className={styles.he}>Brainstorming</h6>
                  <p className={styles.text}>The Desire to lead in the market with best online solutionsThe Desire to lead in the market with best online solutionsThe Desire to lead in the market with best online solutions
                  The Desire to lead in the market with best online solutions</p>
                </div>
                 <div className={styles.beba}>
                    <QuestionAnswerIcon className={styles.ic} style={{fontSize:70}} />
                  <h6 className={styles.hea}>Step 1</h6>
                  <h6 className={styles.he}>Brainstorming</h6>
                  <p className={styles.text}>The Desire to lead in the market with best online solutionsThe Desire to lead in the market with best online solutionsThe Desire to lead in the market with best online solutions
                  The Desire to lead in the market with best online solutions</p>
                </div>
                  <div className={styles.beba}>
                    <QuestionAnswerIcon className={styles.ic} style={{fontSize:70}} />
                  <h6 className={styles.hea}>Step 1</h6>
                  <h6 className={styles.he}>Brainstorming</h6>
                  <p className={styles.text}>The Desire to lead in the market with best online solutionsThe Desire to lead in the market with best online solutionsThe Desire to lead in the market with best online solutions
                  The Desire to lead in the market with best online solutions</p>
                </div>
            </Carousel>
            </div>
        </>
    )
}

export default Aboutm
