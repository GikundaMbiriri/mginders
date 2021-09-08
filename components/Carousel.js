
import ob from '../public/sasa.jpg'
import sisi from '../public/sasa.jpg'
import Image from 'next/image';
import  { useEffect } from "react";
import { Button, Typography } from '@material-ui/core';
import { makeStyles,ServerStyleSheets } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';
import AOS from 'aos';
import "aos/dist/aos.css";
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // requires a loader
import styles from '../styles/carousel.module.css';
import "animate.css"

function Carouse() {
    
    return (
        <>
           <Carousel
      autoPlay
      infiniteLoop
      showIndicators={false}
      showStatus={false}
      showThumbs={false}
    >
        <div className={styles.carrier}>

        <Image src={sisi} alt="kdjdj dj" className={styles.im} layout="responsive"
       objectFit="cover" width='100vw' height='70vh'/>
         <h6 className={styles.tt}>We are the best</h6>
       </div>
       <div className={styles.carrier}>

        <Image src={sisi} alt="kdjdj dj" className={styles.im} layout="responsive"
       objectFit="cover" width='100vw' height='70vh'/>
         <h6 className={styles.tt}>We are the best</h6>
       </div>
       <div className={styles.carrier}>

        <Image src={sisi} alt="kdjdj dj" className={styles.im} layout="responsive"
       objectFit="cover" width='100vw' height='70vh'/>
         <h6 className={styles.tt}>We are the best</h6>
       </div>
 </Carousel>
      <div className='animate__animated animate__pulse'>
        <div className={styles.content}>
          <div className={styles.yes} ><h6>
            <strong> We build your vision...</strong>
            </h6>
          </div>
          <Typography variant='h2' component='h2' style={{ margin: '5px' }}>
            <strong> Automation,Controls & Consulting</strong>
          </Typography>
          <div className='animate__animated animate__backInLeft'>
            <div
              style={{ color: 'white', textDecoration: 'none' }}
            >
           
              <Button variant='contained' className={styles.buttonContent}>
                <strong>GET QUOTE</strong>
              </Button>
          
            </div>
          </div>
        </div>
        <div className='animate__animated animate__zoomIn'>
          <Image
            alt='about'
            className={styles.image}
            style={{ objectFit: 'cover' }}
            src={sisi}
          />
        </div>
      </div>
      <div>
        <div className={styles.content}>
          <div
            style={{
              textAlign: 'left',
              marginLeft: '20%',
            }}
          >
            <Typography variant='h2' component='h2'>
              <strong> Automation</strong>
            </Typography>
            <Typography
              style={{ marginBottom: 50, marginTop: 50 }}
              variant='h6'
              component='h6'
            >
              <strong>
                PLC & HMI Programming,Variable Frequency Drive Installation &
                Commission
              </strong>
            </Typography>

            <div
              style={{ color: 'white', textDecoration: 'none' }}
            >
       
              <Button variant='contained' className={styles.buttonContent}>
                <strong>Learn More</strong>
              </Button>
          
            </div>
          </div>
        </div>
        <Image
          alt='automation'
          className={styles.image}
          style={{ objectFit: 'cover' }}
          src={ob}
        />
      </div>
      <div>
        <div className={styles.content}>
          <div
            style={{
              textAlign: 'left',
              marginLeft: '20%',
            }}
          >
            {' '}
            <Typography
              style={{ marginBottom: 50 }}
              variant='h2'
              component='h2'
            >
              <strong> Controls</strong>
            </Typography>
            <Typography variant='h6' component='h6'>
              <strong>
                {' '}
                Electrical Design,Product replacements,Retrofits &
                Upgrades,Support and Maintenance.
              </strong>
            </Typography>
            <div
              style={{ color: 'white', textDecoration: 'none' }}
              >
            

              <Button variant='contained' className={styles.buttonContent}>
                <strong>Learn More</strong>
              </Button>
              
            </div>
          </div>
        </div>
        <Image
          alt='controls'
          className={styles.image}
          style={{ objectFit: 'cover' }}
          src={sisi}
        />
      </div>
      <div>
        <div className={styles.content}>
          <div
            style={{
              textAlign: 'left',
              marginLeft: '20%',
              paddingRight: '10%',
            }}
          >
            <Typography
              style={{ marginBottom: 50 }}
              variant='h2'
              component='h2'
            >
              <strong> Instrumentation</strong>
            </Typography>

            <Typography variant='h6' component='h6'>
              <strong>Automation and instrumentation</strong>
            </Typography>

            <div
              style={{ color: 'white', textDecoration: 'none' }}
            >
         
              <Button variant='contained' className={styles.buttonContent}>
                <strong>Learn More</strong>
              </Button>
            
            </div>
          </div>
        </div>
        <Image
          alt='consultation'
          className={styles.image}
          style={{ objectFit: 'cover' }}
          src={sisi}
        />
      </div>

      <div>
        <div className={styles.content}>
          <div
            style={{
              textAlign: 'left',
              marginLeft: '20%',
            }}
          >
            <Typography
              style={{ marginBottom: 50 }}
              variant='h2'
              component='h2'
            >
              <strong> Consulting</strong>
            </Typography>

            <Typography variant='h6' component='h6'>
              <strong>
                Benefit from our expertise.We offer hourly consultation services
              </strong>
            </Typography>

            <div
              style={{ color: 'white', textDecoration: 'none' }}
            >
         
              <Button variant='contained' className={styles.buttonContent}>
                <strong>Learn More</strong>
              </Button>
          
            </div>
          </div>
        </div>
        <Image
          alt='consultation'
          className={styles.image}
          style={{ objectFit: 'cover' }}
          src={sisi}
        />
      </div>
    
    </>
    )
}
const useStyles = makeStyles((theme) => ({

 
  content: {
   
  },

  buttonContent: {
    
  },
}));
export default Carouse
