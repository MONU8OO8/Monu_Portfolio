import React from "react";

import html from "../public/assets/experience/html.png";
import css from "../public/assets/experience/css.png";
import javascript from "../public/assets/experience/javascript.png";
import reactImage from "../public/assets/experience/react.png";
import nextjs from "../public/assets/experience/nextjs.png";
import tailwind from "../public/assets/experience/tailwind.png";
import mongodb from "../public/assets/experience/mongodb.png";
import node from "../public/assets/experience/node.png";
import express from "../public/assets/experience/express.png";
import cpp from "../public/assets/experience/cpp.png";
import python from "../public/assets/experience/python.png";
import gamer from "../public/assets/experience/gamer.png";
import Image from "next/image";

const Experience = () => {
  const experiences = [
    {
      id: 1,
      title: "HTML",
      src: html,
    },
    {
      id: 2,
      title: "CSS",
      src: css,
    },
    {
      id: 3,
      title: "JavaScript",
      src: javascript,
    },
    {
      id: 4,
      title: "React",
      src: reactImage,
    },
    {
      id: 5,
      title: "Next JS",
      src: nextjs,
    },
    {
      id: 6,
      title: "Tailwind",
      src: tailwind,
    },
    {
      id: 7,
      title: "Mongo DB",
      src: mongodb,
    },
    {
      id: 8,
      title: "Node JS",
      src: node,
    },
    {
      id: 9,
      title: "Express",
      src: express,
    },
    {
      id: 10,
      title: "C++",
      src: cpp,
    },
    {
      id: 11,
      title: "Python",
      src: python,
    },
    {
      id: 12,
      title: "Gamer",
      src: gamer,
    },
  ];

  return (
    <div id="experience" className="w-full">
      <div className="max-w-screen-xl mx-auto px-8 py-16 text-center md:text-left">
        <div className="flex flex-col justify-end items-center w-full">
        <h2 className="text-2xl md:text-5xl tracking-wider uppercase text-red-500 font-bold">
          experience
        </h2>
        <p className="py-4 max-w-2xl">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae, assumenda maxime numquam consequatur atque iure nesciunt provident esse eveniet obcaecati dolore hic unde dolorum odio!
        </p>
        </div>
        

        <div className="grid lg:grid-cols-4 grid-cols-2 gap-8">
          {experiences.map(({ id, title, src }) => (
            <div
              key={id}
              className="flex flex-col lg:flex-row gap-10 lg:gap-0 items-center justify-between p-6 shadow-lg rounded-xl hover:scale-105 ease-in duration-300
              odd:shadow-lime-400 even:shadow-blue-400"
            >
              <Image src={src} width="64px" height="64px" alt={title} />
              <h3 className="font-light text-xs md:text-sm">{title}</h3>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Experience;