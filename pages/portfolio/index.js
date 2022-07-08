import React from "react";
import dsa from "../../public/assets/portfolio/dsa.jpg";
import nextjs from "../../public/assets/portfolio/nextjs.png";
import todolist from "../../public/assets/portfolio/todolist.jpg";
import reactnews from "../../public/assets/portfolio/reactnews.jpg";
import dancing from "../../public/assets/portfolio/dancing.webp";
import nextseries from "../../public/assets/portfolio/nextseries.jpg";
import textconvert from "../../public/assets/portfolio/textconvert.jpg";
import Baked from "../../public/assets/portfolio/Baked.jpg";
import TailBoot from "../../public/assets/portfolio/TailBoot.jpg";
import { MdExpandMore } from "react-icons/md";
import { BiChevronLeft } from "react-icons/bi";
import Link from "next/link";
import Image from "next/image";

export const getStaticProps = async () => {
    const portfolios = [
        {
            id: 1,
            title: "react News app",
            imageSrc: reactnews,
            url: "react-News",
        },
        {
            id: 2,
            title: "react todolist",
            imageSrc: todolist,
            url: "todolist",
        },
        {
            id: 3,
            title: "next js app",
            imageSrc: nextjs,
            url: "use-state-hook",
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


    return {
        props: { portfolios },
    };
};

const PortfoliosRoute = ({ portfolios }) => {
    return (
        <div id="portfolio" className="w-full bg-custom-blue">
            <div className="max-w-screen-xl mx-auto pt-24 p-4 text-center md:text-left">
                <Link href="/#portfolio">
                    <div className="flex  text-center md:text-left my-8 text-white hover:text-red-500 font-bold capitalize cursor-pointer">
                        <BiChevronLeft size={25} /> back
                    </div>
                </Link>
                <h2 className="text-2xl md:text-5xl tracking-wider uppercase text-red-500 font-bold pb-16">
                    portfolio
                </h2>

                <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-8">
                    {portfolios.map(({ id, title, imageSrc, url }) => (
                        <Link key={id} href={`/portfolio/${url}`}>
                            <div className="cursor-pointer group shadow-md text-white shadow-red-500 overflow-hidden rounded-md">
                                <Image
                                    src={imageSrc}
                                    alt={title}
                                    className="rounded-md duration-200 hover:scale-110" />

                                <h2 className="text-center text-base capitalize my-4 font-light duration-200 group-hover:underline underline-offset-4">
                                    {title}
                                </h2>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default PortfoliosRoute;