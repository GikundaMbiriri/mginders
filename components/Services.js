import app from '../public/app.jpg'
import iot from '../public/iot.jpg'
import teach from '../public/teach.png'
import ec from '../public/ec.jpg'
import Image from 'next/image'

function Services() {
    var hhh = 400;
    return (
        <div className="industry">
        <div className="hind">Services We Offer</div>
        <div className="hdiv">

          

          <div className="desc">
            <h2>Electrical Installation.</h2>
            Lorem id dkfk best way to trennr in a company setup so that we acquire the best in thios world of programming that we make it till the end.

          </div>
          <Image src={ec} alt="what we do" className="ime" width={500} height={hhh} />
        </div>
        <div className="hdiv">

         

          <div className="desc">
            <h2>Web And Mobile Development.</h2>
            Lorem id dkfk best way to trennr in a company setup so that we acquire the best in thios world of programming that we make it till the end.

          </div>
          <Image src={app} alt="what we do" className="ime" width={500} height={hhh} />
        </div>
        <div className="hdiv">

         

          <div className="desc">
            <h2>IOT Projects.</h2>
            Lorem id dkfk best way to trennr in a company setup so that we acquire the best in thios world of programming that we make it till the end.

          </div>
          <Image src={iot} alt="what we do" className="ime" width={500} height={hhh} />
        </div>
        <div className="hdiv">

         

          <div className="desc">
            <h2>Coding Classes.</h2>
            Lorem id dkfk best way to trennr in a company setup so that we acquire the best in thios world of programming that we make it till the end.

          </div>
          <Image src={teach} alt="what we do" className="ime" width={500} height={hhh} />
        </div>
      </div>
    )
}

export default Services
