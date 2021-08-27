import Link from 'next/link'

function Footer() {
    return (
        
            <div className="footer">
        <div className="heading">
          <h2>MGrinders<sup>&trade;</sup></h2>
        </div>
        <div className="content">
          {/* <div className="services">
            <h4>Services</h4>
            <p><a href="#">Mobile App development</a></p>
            <p><a href="#">Web development</a></p>
            <p><a href="#">IOT projects</a></p>
      
            <p><a href="#">Electrical installation</a></p>
            <p><a href="#">Coding classes</a></p>
          </div> */}
          {/* <div className="social-media">
            <h4>Social</h4>
            <p>
              <a href="https://www.linkedin.com/in/sanket-bodke-995b5b205/"
              ><i className="fab fa-linkedin"></i> Linkedin</a
              >
            </p>
            <p>
              <a href="https://twitter.com/Sanket46171296"
              ><i className="fab fa-twitter"></i> Twitter</a
              >
            </p>
          
           
           
          </div> */}
          {/* <div className="links">
            <h4>Quick links</h4>
            <p><Link href="/home"><a >Home</a></Link></p>
            <p><Link href="/about"><a >About</a></Link></p>
            <p><Link href="/services"><a >Services</a></Link></p>
            <p><Link href="/home"><a >Classes</a></Link></p>
            <p><Link href="/home"><a >Contact</a></Link></p>
       
          </div> */}
          <div className="details">
            <h4 className="address">Address</h4>
            <p>
              <span className="ww">Locality</span> :Kileleshwa <br />
              <span className="ww">Street</span>:Kindaruma road<br/>

              <span className="ww">Building</span>:Blue Violets Plaza One Three Three Three
            </p>
            <h4 className="mobile">Mobile</h4>
            <p><a href="#">0713799975</a></p>
            <h4 className="mail">Email</h4>
            <p><a href="#">gikunda.dev@gmail.com</a></p>
          </div>
        </div>
        <footer>
          <hr />
          &copy; 2021 MGrinders Technologies Pvt. Ltd.
        </footer>
      </div> 
    
    )
}

export default Footer
