import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'

import gh from '../public/oracom.png'
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import YouTubeIcon from '@material-ui/icons/YouTube';
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
      setNl('l')
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
  function hand(){
    setHam('hamburger');
    setNavl('nav-links');
    setNl('l');
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
          <li className={nl}><Link href="/"><a className="anchor" onClick={hand} >Home</a></Link></li>
          <li className={nl}><Link href="/aboutm"><a className="anchor" onClick={hand} >About</a></Link></li>
          <li className={nl}><Link href="/servicesm"><a className="anchor" onClick={hand}  >Services</a></Link></li>
          <li className={nl}><Link href="/contact"><a className="anchor"  onClick={hand} >Contact Us</a></Link></li>
         <li className={nl}><Link href="/"><a ><FacebookIcon className="an" /></a></Link> <Link href="/"><a><TwitterIcon className="an"/></a></Link> <Link href="/"><a><YouTubeIcon className="an"/></a></Link></li>
        </ul>
      </nav>
    </>
  )
}

export default Nav
