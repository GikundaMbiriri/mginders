
import "aos/dist/aos.css";
import laravel from '../public/laravel.jpg'
import Image from 'next/image';
import ReactWhatsapp from 'react-whatsapp';
import styles from '../styles/Classes.module.css'
function Classes({im}) {
    var hhh = 200;
    return (
        <>
        <h2 className={styles.hh}>Available Classes</h2>
        <div className={styles.is}>
        <div className={styles.it}>
        <Image src={laravel} alt="what we do" className={styles.ime} width={500} height={hhh} />
        <h4>Course :</h4> Web Development<br/>
        <h4>Skills</h4> Html,CSS,JS,Laravel,Git.
        <ReactWhatsapp number="+254713799975" message="Hello World!!!" >register</ReactWhatsapp>
        </div>
        </div>
       </>
    )
}

export default Classes
