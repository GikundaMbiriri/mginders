
import "aos/dist/aos.css";
import HomeIcon from '@material-ui/icons/Home';
import PhoneIcon from '@material-ui/icons/Phone';
import EmailIcon from '@material-ui/icons/Email';
import styles from '../styles/Ccard.module.css'
function Ccard({im}) {
  
    return (
        <div className={styles.scs}>
        <div className={styles.ccc}>
        <HomeIcon style={{fontSize:70}} className={styles.fd}/>
        <div className={styles.ssd}>
        4th Floor, Blue Violets Plaza,
Kindaruma Road ( off Ngong Road)
        </div>
        </div>

<div className={styles.rt}/>

<div className={styles.ccc}>
        <PhoneIcon style={{fontSize:70}} className={styles.fd}/>
        <div className={styles.ssd}>
       <p>+254713799975</p>
        </div>
        </div>

<div className={styles.rt}/>

        <div className={styles.ccc}>
        <EmailIcon style={{fontSize:70}} className={styles.fd}/>
        <div className={styles.ssd}>
        gikunda.dev@gmail.com
        </div>
        </div>
        <div className={styles.rt}/>
        </div>
    )
}

export default Ccard
