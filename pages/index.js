import Contact from "../components/Contact";
import Experience from "../components/Experience";
import HomePage from "../components/HomePage";
import About from "../components/About";
import Portfolio from "../components/Portfolio";
import Head from 'next/head'
// import Script from 'next/script';

export default function Home() {
  return (
    <>
      <div>
        <Head>
          <title>Monu{"'"}s-Personal-Website</title>
          <link rel="icon" href="/assets/heroImage.jpeg" />
          {/* <link rel="icon" href="" /> */}
        </Head>
        {/* <Script src=
          "path/to/particles.min.js"
        /> */}
      </div>
      <div className="text-white font-poppins bg-black">
        <HomePage />
        <About />
        <Portfolio />
        <Experience />
        <Contact />
        
      </div>
    </>

  );
}
