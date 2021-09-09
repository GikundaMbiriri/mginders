import styles from '../styles/Whatsapp.module.css';
import ob from '../public/ob.jpg'
import sisi from '../public/sisi.png'
import Image from 'next/image';
import  { useEffect } from "react";
import AOS from 'aos';
import "aos/dist/aos.css";
import ReactWhatsapp from 'react-whatsapp';
import WhatsAppIcon from '@material-ui/icons/WhatsApp';

function Whatsapp() {
    
    return (
        <>
          <ReactWhatsapp number="+254713799975" message="Hello,Who are mgrinders" >
     <WhatsAppIcon className={styles.whatsapp} style={{fontSize:70}}/>
     </ReactWhatsapp>
        </>
    )
}

export default Whatsapp
