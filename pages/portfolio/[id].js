import React from "react";
import dsa from "../../public/assets/portfolio/dsa.jpg";
import nextjs from "../../public/assets/portfolio/nextjs.png";
// import todolist from "../../public/assets/portfolio/todolist.jpg";
import weather from "../../public/assets/portfolio/weather.webp";
// import todolist2 from "../../public/assets/portfolio/todolist2.jpg";
import reactnews from "../../public/assets/portfolio/reactnews.jpg";
// import news2 from "../../public/assets/portfolio/news2.jpg";
import dancing from "../../public/assets/portfolio/dancing.webp";
import nextseries from "../../public/assets/portfolio/nextseries.jpg";
import textconvert from "../../public/assets/portfolio/textconvert.jpg";
import Baked from "../../public/assets/portfolio/Baked.jpg";
import TailBoot from "../../public/assets/portfolio/TailBoot.jpg";

import { FaGithub } from "react-icons/fa";
import { AiOutlineCaretRight } from "react-icons/ai";
import { BiChevronLeft } from "react-icons/bi";
import Link from "next/link";
import Image from "next/image";

const portfolios = [
  {
    id: 1,
    title: "react News app",
    imageSrc: reactnews,
    //   imageSrc1: reactnews,
    url: "react-News",
    demo: "https://bbcnews-react.vercel.app/"
  },
  {
    id: 2,
    title: "weather forecast",
    imageSrc: weather,
    //   imageSrc1: todolist,
    url: "weather",
    demo: "https://weatherforecast-nu.vercel.app/"

  },
  {
    id: 3,
    title: "next js app",
    imageSrc: nextjs,
    url: "use-state-hook",
    demo: "https://monu-personal-web-site.vercel.app/"
  },
  {
    id: 4,
    title: "DSA problems",
    imageSrc: dsa,
    url: "dsa files",
  },
  {
    id: 5,
    title: "dancing website",
    imageSrc: dancing,
    url: "react-parallax",
  },
  {
    id: 6,
    title: "Nextjs Series Blog",
    imageSrc: nextseries,
    url: "blog site",
  },
  {
    id: 7,
    title: "TextConverter",
    imageSrc: textconvert,
    url: "text-converter",
  },
  {
    id: 8,
    title: "Wake & Baked",
    imageSrc: Baked,
    url: "late night food",
  },
  {
    id: 9,
    title: "BootTail website",
    imageSrc: TailBoot,
    url: "BootTail websites",
  },
];


const getPortfolioFrom = (url) => portfolios.filter((p) => p.url === url)[0];

export async function getStaticPaths() {
  const paths = portfolios.map((p) => ({
    params: { id: p.url },
  }));

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const portfolio = getPortfolioFrom(params.id);

  return {
    props: { portfolio },
  };
}

const OnePortfolio = ({ portfolio: { title, imageSrc,demo } }) => {
  return (
    <div className="h-fit w-full text-center bg-custom-blue">
      <div className="max-w-screen-xl mx-auto w-full h-full pt-24 p-8 flex flex-col">
        <div className="flex">
          <Link href="/portfolio">
            <div className="flex items-center justify-center my-8 text-white hover:text-red-500 font-bold capitalize cursor-pointer">
              <BiChevronLeft size={25} /> back
            </div>
          </Link>
        </div>

        <h1 className="capitalize text-2xl md:text-5xl mt-2 mb-8 text-center md:text-left font-bold text-red-500 tracking-wider">
          {title}
        </h1>
        <div className="flex flex-wrap">
          <div className="relative w-96 h-56 mx-auto overflow-hidden my-8">
            <Image src={imageSrc} alt="bla" layout="fill" objectFit="cover" />
          </div>
          {/* <div className="relative w-96 h-56 mx-auto overflow-hidden my-8">
          <Image src={imageSrc1} alt="bla" layout="fill" objectFit="cover" />
        </div> */}
        </div>


        <h2 className="text-center text-red-500 md:text-left my-4 text-2xl font-bold">
          Description
        </h2>

        <p className="text-white">
          This is my website some pages from here you can visit my other websites projects and also you can see this website demo with demo button and you can also visit my github repositories. I build these websites using tools like React JS, Next JS, JavaScript, Bootstrap, Tailwind CSS, MongoDB etc.
        </p>

        <div className="flex flex-wrap items-center justify-center gap-10">
          <Link href={demo} target="_blank">
            <div className="group flex items-center justify-center my-8 bg-red-500 text-white px-6 py-3 font-bold uppercase rounded-md tracking-wider cursor-pointer">
              demo
              <span className="duration-200 ease-in">
                <AiOutlineCaretRight size={18} className="ml-2" />
              </span>
            </div>
          </Link>

          <Link href="https://github.com/MONU8OO8">
            <div className="group flex items-center justify-center my-8 bg-red-500 text-white px-6 py-3 font-bold uppercase rounded-md tracking-wider cursor-pointer">
              my portfolio
              <span className="duration-200 ease-in">
                <FaGithub size={18} className="ml-2" />
              </span>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default OnePortfolio;