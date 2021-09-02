import app from '../public/app.jpg'
import iot from '../public/iot.jpg'
import teach from '../public/teach.png'
import ec from '../public/ec.jpg'
import Image from 'next/image'
import webdesign from 'public/webdesign.jpg'
import webapps from 'public/ap.jpg'
import learn from 'public/learn.jpg'
import daro from 'public/daro.jpg'
import mobi from 'public/mobi.jpg'

function Services() {
    var hhh = 400;
    return (
        <div className="industry">
        <div className="hind"><h2>Services We Offer</h2></div>
        <div className="hdiv">

          

          <div className="desc">
            <h2>Web Design.</h2>
           We design amazing websites for our clients.Our websites are SEO friendly to give our clients a strong online presence.<br/>
           We use the latest technologies to make our websites responsive and load at lightning speeds.


          </div>
          <Image src={webdesign} alt="what we do" className="ime" width={500} height={hhh} />
        </div>
        <div className="hdiv">

         

          <div className="desc">
            <h2>Web And Mobile Development.</h2>
            We develop user-friendly applications for institutions,organisations ,ecommerce enterprises etc at affordable prices.<br/>
            Our applications come with secure admin dashboards to help the owners manage their businesses easily.
          </div>
          <Image src={mobi} alt="what we do" className="ime" width={500} height={hhh} />
        </div>
        <div className="hdiv">

         

          <div className="desc">
            <h2>Management Systems.</h2>
We develop management systems used in schools ,hospitals and other businesses to facilitate their daily activities.<br/>
We also help our clients store their data in secure databases and back it up in the cloud.
          </div>
          <Image src={iot} alt="what we do" className="ime" width={500} height={hhh} />
        </div>
        <div className="hdiv">

         

          <div className="desc">
            <h2>Coding Classes.</h2>
We run programming classes both physically and online .Currently ,we are offering classes in the following technologies:
<br/>
<span>Web Design:</span> <br/>HTML,CSS,Javascript
<br/>
<span>Frontend Development:</span><br/> Reactjs
<br/>
<span>Backend Development:</span><br/>Laravel,Nodejs,Django,Express Js
<br/>
<span>Mobile Development:</span><br/> Flutter,dart.
<br/>
<span>IOT:</span><br/>Arduino,Raspberry PI

          </div>
          <Image src={daro} alt="what we do" className="ime" width={500} height={hhh} />
        </div>
      </div>
    )
}

export default Services
