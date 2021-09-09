import '../styles/globals.css'
import '../styles/style.css'
import '../styles/Ts.css'
import '../styles/cont.css'
import '../styles/nav.css'
import '../styles/progress.css'
import "animate.css"
import Head from "next/head";
function MyApp({ Component, pageProps }) {
  return (
  	<>

    
      <Component {...pageProps} />
      </>
 
  )
}

export default MyApp
