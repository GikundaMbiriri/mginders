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
import HourglassEmptyIcon from '@material-ui/icons/HourglassEmpty';
import GestureIcon from '@material-ui/icons/Gesture';
import CodeIcon from '@material-ui/icons/Code';
import DoneOutlineIcon from '@material-ui/icons/DoneOutline';
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
<p>
M-Grinders Technologies LTD was started in 2021 to offer the best tech solutions to businesses and individuals in Kenya and across.
<br/>
We are focused on bringing innovative ideas that make it easier for our clients to run their Businesses.Our team of creative developers work 24 hours in a day to ensure that they deliver quality work.Our Clients satisfaction is our main goal and we endeavour to deliver that daily.
</p>
        </div>
        </div>
        <div className={styles.ccc}>
<div className={styles.sidea}>
<div className="wrapper">
  <div className="containe">
    <h2>What We Do </h2>
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
As Team M-Grinders Kenya, we are driven by 4 Pillars:
<ul>
<li>The Desire to lead in the tech market</li>
<li>Creativity- creative ideas and teams</li>
<li>Research & Innovation - we do research on upcoming Technologies</li>
<li>Passion & Hardwork - this is what fuels us</li>
</ul>

</div>}

</div>
<div >
<div className={styles.juu} onClick={fstory}>

<h2><span>+</span> Your Success - Our Business.</h2>
</div>
{story && <div className={styles.story1}>
At M-Grinders Technologies LTD, we offer tech solutions to our clients.We make it easier for our clients to manage their businesses.We offer services to organisations,institutions,companies and individuals.

</div>}

</div>
<div >
<div className={styles.juu} onClick={fstor}>

<h2><span>+</span> Why You will want to work with us</h2>
</div>
{stor && <div className={styles.story1}>
Not just amazing projects.We are a family with our clients and we follow up with them to ensure that our solutions are serving them properly.
<br/>
We also offer technical consultation and advice to our clients for free.

</div>
}
</div>
<div >
<div className={styles.juu} onClick={fsto}>

<h2><span>+</span> How we work</h2>
</div>
{sto && <div className={styles.story1}>
We get to listen to your problem , we give you the options , and you get to choose the best.From there , our team of developers start working on your project and the solution is delivered on time.


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
      showThumbs={false} stopOnHover={true} interval={3000}>
                <div className={styles.beba}>
                    <HourglassEmptyIcon className={styles.ic} style={{fontSize:70}} />
                  <h6 className={styles.hea}>Step 1</h6>
                  <h6 className={styles.he}>Brainstorming</h6>
                  <p className={styles.text}>Our team of developers listen to your problem and brainstorm on the best solutions to your problem.</p>
                </div>
                 <div className={styles.beba}>
                    <GestureIcon className={styles.ic} style={{fontSize:70}} />
                  <h6 className={styles.hea}>Step 2</h6>
                  <h6 className={styles.he}>Sketching</h6>
                  <p className={styles.text}>The UI team then comes up with prototypes and demo samples for the clients and developers to work with</p>
                </div>
                  <div className={styles.beba}>
                    <CodeIcon className={styles.ic} style={{fontSize:70}} />
                  <h6 className={styles.hea}>Step 3</h6>
                  <h6 className={styles.he}>Design and Development</h6>
                  <p className={styles.text}>Once the prototype is approved, the developers team is assigned and required to come up with a working solution for the prototype</p>
                </div>
                 <div className={styles.beba}>
                    <QuestionAnswerIcon className={styles.ic} style={{fontSize:70}} />
                  <h6 className={styles.hea}>Step 4</h6>
                  <h6 className={styles.he}>Testing </h6>
                  <p className={styles.text}>Once the development process is complete the client and the developers go through the project to look for any bugs and fix them</p>
                </div>
                 <div className={styles.beba}>
                    <DoneOutlineIcon className={styles.ic} style={{fontSize:70}} />
                  <h6 className={styles.hea}>Step 5</h6>
                  <h6 className={styles.he}>Launch</h6>
                  <p className={styles.text}>After approval by the client, the project is then launched.</p>
                </div>
            </Carousel>
            </div>
        </>
    )
}

export default Aboutm
