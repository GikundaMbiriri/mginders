

function Nav() {
    return (
 
             <div className="navh">
        <input type="checkbox" id="navh-check" />
        <div className="navh-header">
          <div className="navh-title">
            M-GRINDERS
          </div>
        </div>
        <div className="navh-btn">
          <label htmlFor="navh-check">
            <span></span>
            <span></span>
            <span></span>
          </label>
        </div>

        <div className="navh-links">
          <a href="//github.io/jo_geek" >Home</a>
          <a href="http://stackoverflow.com/users/4084003/" >About</a>
          <a href="https://in.linkedin.com/in/jonesvinothjoseph" >Services</a>
          <a href="https://codepen.io/jo_Geek/" >Contact</a>
          
        </div>
      </div> 
       
    )
}

export default Nav
