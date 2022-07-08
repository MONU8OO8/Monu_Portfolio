import Link from "next/link";
import React from "react";
import { HiAcademicCap } from 'react-icons/hi';
import { Gi3DGlasses } from 'react-icons/gi';
import Image from "next/image";
import heroImage from "../public/assets/heroImage.jpg";
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
            <p className="py-4 max-w-2xl mx-auto">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque alias debitis obcaecati fuga ullam voluptatum illum laborum at laboriosam? Dicta officiis libero alias eligendi voluptate.
            </p>
            <p className="py-4 max-w-2xl mx-auto">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus qui hic saepe quod consequatur fugit quas optio expedita, repudiandae id illum itaque. Enim, dolore voluptatem!
            </p>

            <div className="flex flex-col py-4 max-w-2xl mx-auto ">
              <h3 className="flex text-red-500 text-lg"> <HiAcademicCap className="text-2xl my-1 mr-2" />  Education </h3>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur, aliquam.</p>
            </div>

            <div className="flex flex-col py-4 max-w-2xl mx-auto ">
              <h3 className="flex text-red-500 text-lg"> <Gi3DGlasses className="text-2xl my-1 mr-2" />  Interests </h3>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur, aliquam.</p>
            </div>
          </div>

          {/* </div> */}



        </div>

        <div className="flex flex-wrap items-center justify-center gap-10">
          <Link href="/resume.pdf" download={true}>
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