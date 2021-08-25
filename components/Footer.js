import React from 'react'

function Footer() {
    return (
        <div>
            <div className="footer">
        <div className="heading">
          <h2>ABCDEF<sup>&trade;</sup></h2>
        </div>
        <div className="content">
          <div className="services">
            <h4>Services</h4>
            <p><a href="#">Mobile App development</a></p>
            <p><a href="#">Web development</a></p>
            <p><a href="#">IOT projects</a></p>
      
            <p><a href="#">Electrical installation</a></p>
            <p><a href="#">Coding classes</a></p>
          </div>
          <div className="social-media">
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
          
           
           
          </div>
          <div className="links">
            <h4>Quick links</h4>
            <p><a href="#">Home</a></p>
            <p><a href="#">About</a></p>
            <p><a href="#">Services</a></p>
            <p><a href="#">Contact</a></p>
          </div>
          <div className="details">
            <h4 className="address">Address</h4>
            <p>
              Locality :Kileleshwa <br />
              Street:Kindaruma road<br/>

              Building:Blue Violets Plaza One Three Three Three
            </p>
            <h4 className="mobile">Mobile</h4>
            <p><a href="#">+9112233445</a></p>
            <h4 className="mail">Email</h4>
            <p><a href="#">abcdef@gmail.com</a></p>
          </div>
        </div>
        <footer>
          <hr />
          &copy; 2021 MGrinders Technologies Pvt. Ltd.
        </footer>
      </div> 
        </div>
    )
}

export default Footer
