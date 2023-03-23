import React from "react";
import heroImage from "../public/assets/heroImage.jpeg";
import { MdExpandMore } from "react-icons/md";
import Typical from 'react-typical'
import code2 from "../public/assets/code2.gif";
import Image from "next/image";
import Link from "next/link";

const HomePage = () => {
  return (
    <div id="home" className="h-screen w-full text-center">
      <div className="flex flex-col justify-center items-center bg-back1 bg-cover bg-center bg-no-repeat h-full w-full">
        <div className="min-h-30% max-h-30% rounded-3xl drop-shadow-[linear-gradient(152deg,_#fff,_#00bfd8_42%,_#0083f5)] bg-opacity-60 bg-slate-900 bg-cover bg-center bg-no-repeat  md:w-2/4 w-3/4  mx-auto  h-30% h-#0% mt-16 pt-4 p-4 flex flex-col justify-around items-center">
          {/* <div className="min-h-screen max-h-screen bg-cover bg-center bg-no-repeat max-w-screen-xl mx-auto w-full h-full pt-24 p-4 flex flex-col justify-around items-center"> */}
          <div className="w-44 h-44 mx-auto overflow-hidden rounded-full">
            <Image className="rounded-full " objectFit="cover" src={heroImage} alt="About" />

          </div>

          <h5 className="uppercase font-bold mt-4">
            <span className="text-white md:text-xl  text-xs">
              Hello, I{"'"}M <span className="text-red-500">Monu Kumar</span>
              {/* <Image objectFit="cover" src="https://media.giphy.com/media/WUlplcMpOCEmTGBtBW/giphy.gif" alt="About" /> */}
            </span>
            <div className="flex justify-center items-center mt-4 w-full">
              <span className="font-bold font-sans text-white text-sm md:text-3xl text-left mb-5">
                {" "}
                <h5>
                  {" "}
                  <Typical
                    loop={Infinity}
                    steps={[
                      "Full Stack Dev 😤",
                      1000,
                      "Enthusiastic for web3🌐",
                      1000,
                      "MERN Stack Dev 🎶",
                      1000,
                      "Gamer 😎",
                      1000,
                    ]}
                  />

                </h5>
              </span>
            </div>

          </h5>


          <div className="flex flex-row justify-center items-center">
            {/* <div className="w-24 h-24  mx-auto">
              <Image objectFit="fill" src={time} alt="About" width={150}
                height={150} />
            </div> */}
            <p className="text-white md:text-xl text-xs mx-auto">
              Passionate about Coding and Development
            </p>
            <div className="w-24 h-24 mx-auto">
              <Image objectFit="fill" src={code2} alt="About" width={150}
                height={150} />
            </div>
          </div>
          {/* <h3 className="md:text-xl text:xs text-center font-bold bg-[linear-gradient(10deg,#dc2626,#fee2e2,#A7B334)] bg-clip-text text-transparent">
        Passionate about Coding and Development
        </h3> */}


        </div>
        <Link href="/#About">
          <div className="group flex items-center justify-center my-8 bg-red-500 hover:bg-white hover:text-custom-blue text-white px-6 py-3 font-bold uppercase rounded-full tracking-wider cursor-pointer">
            know more
            <span className="-rotate-90 duration-100 ease-in group-hover:rotate-0">
              <MdExpandMore size={25} />
            </span>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default HomePage;
