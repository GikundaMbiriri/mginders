
import Link from 'next/link'
function Nav() {
    return (
 
             <div className="navh">
        <input type="checkbox" id="navh-check" />
        <div className="navh-header">
          <div className="navh-title">
           <span className="m"> M</span>-<span className="g" >GRINDERS</span>
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
        <Link href="/home">
          <a>Home</a>
        </Link>
        <Link href="/about">
          <a>About</a>
        </Link>
        <Link href="/services">
          <a>Services</a>
        </Link>
        <Link href="/home">
          <a>Classes</a>
        </Link>
        <Link href="/home">
          <a>Contact</a>
        </Link>
         
          
        </div>
      </div> 
       
    )
}

export default Nav
