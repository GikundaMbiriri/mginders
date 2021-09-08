import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'
import styles from '../styles/nav.module.css'
import gh from '../public/daro.jpg'
function Nav() {
  const [ham, setHam] = useState('hamburger');
  const [navl, setNavl] = useState('nav-links');
  const [nl, setNl] = useState('l');
  function handleClicks() {
    if (navl === 'nav-links') {
      setNavl('nav-links open')
    }
    else {
      setNavl('nav-links')
    }
    if (nl === 'l') {
      setNl('fade')
    }
    else {
      setNl('')
    }
    if (ham === 'hamburger') {
      setHam('hamburger toggle')
    }
    else {
      setHam('hamburger')
    }
  }
  console.log(ham)
  console.log(navl)
  console.log(nl)
  return (
    <>
      <nav>
        <div className="logo">
          <Image src={gh} alt="Logo Image" />
        </div>
        <div className={ham} onClick={handleClicks}>
          <div className="line1"></div>
          <div className="line2"></div>
          <div className="line3"></div>
        </div>
        <ul className={navl}>
          <li className={nl}><a className="on" >Home</a></li>
          <li className={nl}><a >Solutions</a></li>
          <li className={nl}><a >Products</a></li>
          <li className={nl}><a >Services</a></li>
          <li className={nl}><a >Contact Us</a></li>
          <li className={nl}><button className="login-button" >Login</button></li>
          <li className={nl}><button className="join-button" >Join</button></li>
        </ul>
      </nav>
    </>
  )
}

export default Nav
