import Link from "next/link";
import React, { useEffect, useState } from "react";

import {
  FaBars,
  FaTimes,
  FaFacebook,
  FaGithub,
  FaTwitter,
  FaLinkedin,
  FaIntercom,
  FaInstagram,
  FaSpotify,
} from "react-icons/fa";

const Navbar = () => {
  const [navigation, setNavigation] = useState(false);
  const [pageScroll, setPageScroll] = useState(false);

  useEffect(() => {
    const sub = window.addEventListener("scroll", () =>
      setPageScroll(window.scrollY >= 90)
    );

    return sub;
  }, []);

  const links = [
    {
      id: 1,
      link: "home",
    },
    {
      id: 2,
      link: "About",

    },
    {
      id: 3,
      link: "portfolio",
    },
    {
      id: 4,
      link: "experience",
    },
    {
      id: 5,
      link: "contact",
    },
  ];

  return (
    <div
      className={`w-full h-20 z-10 fixed font-serif bg-custom-blue text-white duration-300 ease-in ${pageScroll && "bg-custom-blue text-[#fff]"
        }`}
    >
      <div className="flex justify-between items-center w-full h-full max-w-screen-xl mx-auto p-4">
        <Link href="/#home">
          <h1 className="text-3xl lg:text-4xl font-bold uppercase tracking-wider cursor-pointer">
            MONU
          </h1>
        </Link>

        <div>
          <ul className="hidden md:flex">
            {links.map(({ id, link }) => (
              <Link key={id} href={`/#${link}`}>
                <li className="ml-10 text-sm uppercase cursor-pointer duration-200 ease-out hover:text-red-400 hover:scale-105 tracking-wider">
                  {link}
                </li>
              </Link>
            ))}
          </ul>

          {!navigation && (
            <div
              className="md:hidden cursor-pointer"
              onClick={() => setNavigation(true)}
            >
              <FaBars size={30} />
            </div>
          )}
        </div>
      </div>

      <div
        className={
          navigation
            ? "md:hidden fixed left-0 top-0 w-full h-full bg-custom-blue/70 backdrop-blur"
            : ""
        }
      >
        <div
          className={
            navigation
              ? "fixed left-0 top-0 w-4/5 h-full bg-gradient-to-r from-red-600 to-red-600 text-white p-10 ease-in duration-500"
              : "fixed top-0 left-[-100%] p-10 h-full ease-in duration-500"
          }
        >
          <div>
            <div className="flex w-full items-center justify-between">
              <Link href="/#home">
                <h2
                  onClick={() => setNavigation(false)}
                  className="text-2xl font-bold uppercase tracking-wider cursor-pointer"
                >
                  MONU
                </h2>
              </Link>
              <div
                onClick={() => setNavigation(false)}
                className="p-3 cursor-pointer"
              >
                <FaTimes size={25} />
              </div>
            </div>
          </div>

          <div className="mt-24 flex flex-col h-fit gap-20">
            <ul className="uppercase">
              {links.map(({ id, link }) => (
                <Link key={id} href={`/#${link}`}>
                  <li
                    onClick={() => setNavigation(false)}
                    className="py-4 text-xl tracking-wider cursor-pointer"
                  >
                    {link}
                  </li>
                </Link>
              ))}
            </ul>

            <div>
              <div className="grid grid-cols-3 mx-auto w-full gap-3">
                <Link href="https://www.linkedin.com/in/monu-kumar-3364a5209">
                  <div className="flex items-center justify-center rounded-full shadow-md shadow-red-500 p-2 cursor-pointer">
                    <FaLinkedin size={20} />
                  </div>
                </Link>

                <Link href="https://twitter.com/MonuKum18058697">
                  <div className="flex items-center justify-center rounded-full shadow-md shadow-red-500 p-2 cursor-pointer">
                    <FaTwitter size={20} />
                  </div>
                </Link>

                <Link href="https://www.facebook.com/profile.php?id=100024729394773">
                  <div className="flex items-center justify-center rounded-full shadow-md shadow-red-500 p-2 cursor-pointer">
                    <FaFacebook size={20} />
                  </div>
                </Link>

                <Link href="https://github.com/MONU8OO8">
                  <div className="flex items-center justify-center rounded-full shadow-md shadow-red-500 p-2 cursor-pointer">
                    <FaGithub className="text-white" size={20} />
                  </div>
                </Link>

                <Link href="https://www.instagram.com/m0nukumarr/">
                  <div className="flex items-center justify-center rounded-full shadow-md shadow-red-500 p-2 cursor-pointer">
                    <FaInstagram className="text-white" size={20} />
                  </div>
                </Link>

                <Link href="#">
                  <div className="flex items-center justify-center rounded-full shadow-md shadow-red-500 p-2 cursor-pointer">
                    <FaSpotify className="text-white" size={20} />
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;