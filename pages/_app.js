import '../styles/globals.css'
import Navbar from "../components/Navbar";
import style from '../styles/about.module.css'

function MyApp({ Component, pageProps }) {
  return <>
   <Navbar />
   <Component {...pageProps} />
   </>
  
}

export default MyApp
