import Link from "next/link";
import React from "react";
import { HiAcademicCap } from 'react-icons/hi';
import { Gi3DGlasses } from 'react-icons/gi';
import { BiMusic } from 'react-icons/bi';
import { MdExpandMore } from "react-icons/md";
import game from "../public/assets/game.gif";
import mern from "../public/assets/mern.png";
import leetcode from "../public/assets/leetcode.png";
import hello from "../public/assets/hello.gif";
import music from "../public/assets/music.gif";
import pubg from "../public/assets/pubg.gif";
import rise from "../public/assets/rise.gif";
import code from "../public/assets/code.gif";
import code1 from "../public/assets/code1.gif";
import degree from "../public/assets/degree.gif";
import dev from "../public/assets/dev.gif";
import college from "../public/assets/college.jpg";
import Image from "next/image";
import style from '../styles/about.module.css'
import Head from "next/head";
import { useState } from "react";
import { render } from "react-dom";
import "react-responsive-modal/styles.css";
import { Modal } from "react-responsive-modal";

// import resume from "../public/assets/resume.pdf";
const styles = {
  fontFamily: "sans-serif",
  textAlign: "center"
};
const bg = {
  overlay: {
    background: "rgba(2, 2, 2, 0.9)"
  },
  content: {
    border: '1px solid #ccc',
    borderRadius: '8px'
  },
  modal: {
    background: "transparent",
    color: "green",
    // border: '2px solid black',
    borderRadius: '8px',
    boxShadow: '10px 10px 5px green',
    fontWeight: 'bold',
    fontFamily: 'Arial, Helvetica, sans-serif',
    textShadow: '-1px 0 black, 0 1px black, 1px 0 black, 0 -1px black'
  }
};

const About = () => {
  const [open, setOpen] = useState(false);
  const [open2, setOpen2] = useState(false);
  const [open3, setOpen3] = useState(false);
  const [open4, setOpen4] = useState(false);
  const [open5, setOpen5] = useState(false);

  const onOpenModal = () => {
    setOpen(true);
  };

  const onCloseModal = () => {
    setOpen(false);
  };
  const onOpenModal2 = () => {
    setOpen2(true);
  };

  const onCloseModal2 = () => {
    setOpen2(false);
  };
  const onOpenModal3 = () => {
    setOpen3(true);
  };

  const onCloseModal3 = () => {
    setOpen3(false);
  };
  const onOpenModal4 = () => {
    setOpen4(true);
  };

  const onCloseModal4 = () => {
    setOpen4(false);
  };
  const onOpenModal5 = () => {
    setOpen5(true);
  };

  const onCloseModal5 = () => {
    setOpen5(false);
  };

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
            <div className="flex flex-row justify-center items-center">
              <div className="w-24 h-24  mx-auto">
                <Image objectFit="fill" src={hello} alt="About" width={150}
                  height={150} />
              </div>
              <p className="py-4 max-w-2xl md:text-base text-xs mx-auto">
                Software Developer with excellent problem-solving skills and ability to
                perform well in a team. passionate about coding and development.
              </p>
              <div className="w-24 h-24 mx-auto">
                <Image objectFit="fill" src={hello} alt="About" width={150}
                  height={150} />
              </div>
            </div>


            <div className="flex flex-col justify-center items-center">
              {/* mern */}
              <div className="text-center">

                <button onClick={onOpenModal4}>
                  <div className="w-32 h-32 md:w-52 md:h-52 mx-auto">
                    <Image objectFit="fill" src={dev} alt="About" width={200}
                      height={200} />
                  </div>
                  <h1>Work Experience</h1>
                </button>

                <Modal open={open4} onClose={onCloseModal4} center styles={bg}>
                  <div className="w-60 h-32 mx-auto">
                    <Image objectFit="fill" src={mern} alt="About" />
                  </div>
                  <h4>I am a MERN stack developer</h4>
                  <div className="w-52 h-52 rounded-full mx-auto">
                    <Image className="rounded-full " objectFit="fill" src={code1} alt="About" width={200}
                      height={200} />
                  </div>
                  <h4>Data structures and Algorithms</h4>
                </Modal>
              </div>
              {/* college */}
              <div className="flex flex-row justify-center items-center">
                <div className="text-center md:mr-20">

                  <button onClick={onOpenModal}>
                    <div className="w-28 h-28 md:w-52 md:h-52 rounded-full mx-auto">
                      <Image className="rounded-full " objectFit="fill" src={degree} alt="About" width={200}
                        height={200} />
                    </div>
                    <h1>college</h1>
                  </button>

                  <Modal open={open} onClose={onCloseModal} center styles={bg}>
                    <div className="w-60 h-44 mx-auto">
                      <Image objectFit="fill" src={college} alt="About" />
                    </div>
                    <h1 className="flex text-lg text-red-500 cursor-pointer">Indian Institute of Information Technology, Dharwad</h1>
                    <p>Bachelor of Engineering in Electronics and Communication Enigneering</p>


                  </Modal>
                </div>
                <div className="text-center">

                  <button onClick={onOpenModal5}>
                    <div className="w-28 h-28 md:w-52 md:h-52 rounded-full mx-auto">
                      <Image className="rounded-full " objectFit="fill" src={rise} alt="About" width={200}
                        height={200} />
                    </div>
                  </button>

                  <Modal open={open5} onClose={onCloseModal5} center styles={bg}>
                    <div className="w-32 h-32 md:w-52 md:h-52 rounded-full mx-auto">
                      <Image className="rounded-full " objectFit="fill" src={rise} alt="About" width={200}
                        height={200} />
                    </div>


                  </Modal>
                </div>
                <div className="text-center md:ml-20">

                  <button onClick={onOpenModal2}>
                    <div className="w-28 h-28 md:w-52 md:h-52 rounded-full mx-auto">
                      <Image className="rounded-full " objectFit="fill" src={code} alt="About" width={200}
                        height={200} />
                    </div>
                    <h1>Leetcode</h1>
                  </button>

                  <Modal open={open2} onClose={onCloseModal2} center styles={bg}>

                    <Link href="https://leetcode.com/Lucifer8008/">
                      <div className="w-52 h-28 mx-auto">
                        <Image objectFit="fill" src={leetcode} alt="About" width={300}
                          height={200} />
                      </div>
                    </Link>
                    <Link href="https://leetcode.com/Lucifer8008/">
                      <h3 className="flex text-lg text-red-500 cursor-pointer"> Leetcode Badges </h3></Link>

                    <div className="flex flex-row">
                      <Link href="https://leetcode.com/Lucifer8008/">
                        <img className="cursor-pointer" src="https://leetcode.com/static/images/badges/2022/gif/2022-annual-100.gif"
                          width="50" height="50" alt="leetcode" />
                      </Link>
                      <Link href="https://leetcode.com/Lucifer8008/">
                        <img className="cursor-pointer" src="https://leetcode.com/static/images/badges/2023/gif/2023-04.gif"
                          width="50" height="50" alt="leetcode" />
                      </Link>
                      <Link href="https://leetcode.com/Lucifer8008/">
                        <img className="cursor-pointer" src="https://leetcode.com/static/images/badges/2023/gif/2023-03.gif"
                          width="50" height="50" alt="leetcode" />
                      </Link>
                      <Link href="https://leetcode.com/Lucifer8008/">
                        <img className="cursor-pointer" src="https://leetcode.com/static/images/badges/2023/gif/2023-02.gif"
                          width="50" height="50" alt="leetcode" />
                      </Link>
                      <Link href="https://leetcode.com/Lucifer8008/">
                        <img className="cursor-pointer" src="	https://leetcode.com/static/images/badges/2023/gif/2023-01.gif"
                          width="50" height="50" alt="leetcode" />
                      </Link>
                      <Link href="https://leetcode.com/Lucifer8008/">
                        <img className="cursor-pointer" src="https://leetcode.com/static/images/badges/2022/gif/2022-12.gif"
                          width="50" height="50" alt="leetcode" />
                      </Link>
                      <Link href="https://leetcode.com/Lucifer8008/">
                        <img className="cursor-pointer" src="https://leetcode.com/static/images/badges/2022/gif/2022-11.gif"
                          width="50" height="50" alt="leetcode" />
                      </Link>
                      <Link href="https://leetcode.com/Lucifer8008/">
                        <img className="cursor-pointer" src="	https://leetcode.com/static/images/badges/2022/gif/2022-07.gif"
                          width="50" height="50" alt="leetcode" />
                      </Link>
                    </div>
                  </Modal>
                </div>

              </div>
              <div className="text-center">

                <button onClick={onOpenModal3}>
                  <div className="w-32 h-32 md:w-52 md:h-52 rounded-full mx-auto">
                    <Image className="rounded-full " objectFit="fill" src={game} alt="About" width={200}
                      height={200} />
                  </div>
                  Hobbies
                </button>

                <Modal open={open3} onClose={onCloseModal3} center styles={bg}>
                  <div className="w-52 h-52 rounded-full mx-auto">
                    <Image className="rounded-full " objectFit="fill" src={music} alt="About" width={200}
                      height={200} />
                  </div>
                  <h4>Listening music is something i can never compromise with, spotify pop songs charts is at times the best stress reliever</h4>
                  <div className="w-52 h-52 rounded-full mx-auto">
                    <Image className="rounded-full " objectFit="fill" src={pubg} alt="About" width={200}
                      height={200} />
                  </div>
                  <h4>I Like playing video games</h4>
                </Modal>
              </div>

            </div>


          </div>




        </div>

        <div className="flex flex-wrap items-center justify-center gap-10">
          <Link href="/#contact" download={true}>
            <div className="group flex items-center justify-center my-8 hover:border-red-500 border-2 text-white px-6 py-3 font-bold uppercase rounded-full tracking-wider cursor-pointer">
              Hire Me
              <span className="-rotate-90 duration-100 ease-in group-hover:rotate-0">
                <MdExpandMore size={25} />
              </span>
            </div>
          </Link>

          <a download href="/resume.pdf">
            <div className="group flex items-center justify-center my-8 hover:bg-white hover:text-custom-blue bg-red-500 text-white px-6 py-3 font-bold uppercase rounded-full tracking-wider cursor-pointer">

              Resume
              <span className="-rotate-90 duration-100 ease-in group-hover:rotate-0">
                <MdExpandMore size={25} />
              </span>
            </div>
          </a>
        </div>
      </div>


    </div>


  );
};

export default About;