import styles from '../styles/About.module.css';


function About() {
    return (
        <>
         <div className={styles.about}>
             <h2>Company Profile</h2>
             <div>
             MGrinders Technologies was formed in August 2021 to take advantage of increasing opportunities in the Information Communication Technology (ICT) industry.
             </div>
<div className={styles.mission}>
    <h2>Mission</h2>
    <ul>
        <li>Be the best in the industry Be the best in the industry </li>
        <li>Be the best in the industry</li>
        <li>Be the best in the industry</li>
        <li>Be the best in the industry</li>
    </ul>
</div>
<div className={styles.vision}>
    <h2>Vision</h2>
    <div>To be among the best ICT firms providing Web Based Applications, Unified network security, 
        data services and value added services to the internet community in Kenya and beyond.</div>
</div>
             </div>   
        </>
    )
}

export default About
