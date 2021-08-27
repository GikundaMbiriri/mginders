import styles from '../styles/Contact.module.css';

function Contact() {
    return (
        <div className={styles.contact}>
            <h2>Get a quotation now</h2>
            <div className={styles.cont}>
                <div className={styles.left}>
                    <h3>Reach Us</h3>
                    <div className={styles.info}>
<h4>Email</h4>
<p>mgikunda.dev@gmail.com</p>
                    </div>
                    <div className={styles.info}>
<h4>Phone</h4>
<p>0713799975</p>
                    </div>
                    <div className={styles.info}>

                    </div>
                </div>
                <div className={styles.right}>
<input className={styles.fname} type="text" placeholder="Your name"/>
<input className={styles.lname} type="email" placeholder="Your Email"/><br/>
<input className={styles.con} type="text" placeholder="contact no"/><br/>
<input className={styles.con} type="text" placeholder="purpose of contact"/><br/>
<textarea rows="4" cols="50" defaultValue="Say something..." className={styles.tt}>

</textarea><br/>
{/* <button  className={styles.btn} >Submit</button> */}

                </div>
            </div>
        </div>
    )
}

export default Contact
