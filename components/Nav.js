import Image from 'next/image'
import Link from 'next/link'
import {useState} from 'react'
import styles from '../styles/nav.module.css'

function Nav() {
  const [ham,setHam]=useState('hamburger');
  const [navl,setNavl]=useState('nav-links');
const [nl,setNl]=useState('l');
    function handleClicks() {
    if (navl==='nav-links') {
      setNavl('nav-links open')
    }
    else{
      setNavl('nav-links')
    }
      if (nl==='l') {
      setNl('fade')
    }
    else{
      setNl('')
    }
      if (ham==='hamburger') {
      setHam('hamburger toggle')
    }
    else{
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
            <img src="logo.svg" alt="Logo Image"/>
        </div>
        <div className={ham} onClick={handleClicks}>
            <div className="line1"></div>
            <div className="line2"></div>
            <div className="line3"></div>
        </div>
        <ul className={navl}>
            <li className={nl}><a className="on" href="#">Home</a></li>
            <li className={nl}><a href="#">Solutions</a></li>
            <li className={nl}><a href="#">Products</a></li>
            <li className={nl}><a href="#">Services</a></li>
            <li className={nl}><a href="#">Contact Us</a></li>
            <li className={nl}><button className="login-button" href="#">Login</button></li>
            <li className={nl}><button className="join-button" href="#">Join</button></li>
        </ul>
    </nav>
       </>
    )
}

export default Nav
