import Link from "next/link";
import React from "react";
import { HiAcademicCap } from 'react-icons/hi';
import { Gi3DGlasses } from 'react-icons/gi';
import { BiMusic } from 'react-icons/bi';
import { MdExpandMore } from "react-icons/md";

const About = () => {
  return (
    <div id="About" className="w-full">
      <div className="max-w-screen-xl mx-auto px-8 py-16 text-center md:text-center">
        <h2 className="text-2xl md:text-5xl tracking-wider uppercase text-red-500 font-bold">
          About Me
        </h2>


        <div className="shadow-xl rounded-md shadow-red-300 my-8 px-8">
          {/* <div className="flex">
            <div className="bg-cover w-56 h-80 mt-10  mb-10 sm:hidden md:block">
              <Image className="rounded-lg sm:hidden md:block" objectFit="cover" src={heroImage} alt="me" />
            </div> */}

          <div className="mt-10 pb-10">
            <p className="py-4 max-w-2xl md:text-base text-xs mx-auto">
              Full stack web developer with background knowledge of MERN stacks, along with a knack of building applications with tailwind.
            </p>
            <div className="py-4 max-w-2xl md:text-base text-xs p-2 text-left mx-auto">

              ⚪ Full Stack web development
              <br />
              ⚪ Interactive Front End as per the design
              <br />
              ⚪ React and Next js
              <br />
              ⚪ Data Structures and Algorithms

            </div>

            <div className="flex flex-col py-4 max-w-2xl mx-auto ">
              <h3 className="flex text-red-500 text-lg"> <HiAcademicCap className="text-2xl my-1 mr-2" />  Education </h3>
              <p className="text-red-500 md:text-base text-xs text-left">Indian Institute of Information Technology, Dharwad.</p>
              <p className="text-left md:text-base text-xs">Bachelor of engineering in Electronics and Communication Engineering.</p>
            </div>

            <div className="flex flex-col py-4 max-w-2xl mx-auto ">
              <h3 className="flex text-red-500 text-lg"> <BiMusic className="text-2xl my-1 mr-2" />  Interests </h3>
              <p className="text-red-500 md:text-base text-xs text-left">Music</p>
              <p className="text-left md:text-base text-xs">Listening music is something i can never compromise with, Spotify pop songs charts is at times the best stress reliever.</p>
            </div>

            <div className="flex flex-col py-4 max-w-2xl mx-auto ">
              <h3 className="flex text-red-500 text-lg"> <Gi3DGlasses className="text-2xl my-1 mr-2" />  Interests </h3>
              <p className="text-red-500 md:text-base text-xs text-left">Gamer</p>
              <p className="text-left md:text-base text-xs">I like playing video games.</p>
            </div>
          </div>

          {/* </div> */}



        </div>

        <div className="flex flex-wrap items-center justify-center gap-10">
          <Link href="/#portfolio" download={true}>
            <div className="group flex items-center justify-center my-8 hover:border-red-500 border-2 text-white px-6 py-3 font-bold uppercase rounded-full tracking-wider cursor-pointer">
              Hire Me
              <span className="-rotate-90 duration-100 ease-in group-hover:rotate-0">
                <MdExpandMore size={25} />
              </span>
            </div>
          </Link>

          <Link href="/#contact">
            <div className="group flex items-center justify-center my-8 hover:bg-white hover:text-custom-blue bg-red-500 text-white px-6 py-3 font-bold uppercase rounded-full tracking-wider cursor-pointer">
              Resume
              <span className="-rotate-90 duration-100 ease-in group-hover:rotate-0">
                <MdExpandMore size={25} />
              </span>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default About;