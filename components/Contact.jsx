import Image from "next/image";
import React from "react";
import Link from 'next/link';

// import contactus from "../public/assets/contact-us.jpg";
import spotify from "../public/assets/spotify.gif";
import { FaFacebook, FaGithub, FaTwitter, FaLinkedin, FaSpotify, FaInstagram } from "react-icons/fa";


const Contact = () => {
  return (
    <div id="contact" className="w-full">
      <div className="max-w-screen-xl mx-auto px-8 py-16 text-center md:text-center">
        <h2 className="text-2xl md:text-5xl tracking-wider uppercase text-red-500 font-bold">
          contact
        </h2>

        <div className="flex flex-col md:flex-row gap-8 shadow-xl rounded-md shadow-red-300 bg-custom-blue mt-4">
          <div className="w-full mt-10 md:w-1/2 h-full rounded-xl p-4">
            <div className="flex flex-col w-full justify-center items-center">
              <div className="w-3/4">
                <Image
                  className="rounded-2xl"
                  src={spotify}
                  alt="spotifygif"
                />
              </div>

              {/* <div className="flex mt-4 w-44 items-center justify-center rounded-full shadow-md shadow-red-500 hover:scale-105 duration-200 p-3 cursor-pointer">
                <FaSpotify className="text-white" size={25} />
              </div> */}
            </div>


            <p className="pt-2 pb-8 mt-4">
              Have a question or want to work together?
            </p>

            <div className="grid grid-cols-2 mx-auto w-4/5 gap-10">
              {/* linkedin */}
              <Link href="https://www.linkedin.com/in/monu-kumar-3364a5209">
                <div className="flex items-center justify-center rounded-full shadow-md shadow-red-500 hover:scale-105 duration-200 p-3 cursor-pointer">
                  <FaLinkedin className="text-white" size={25} />
                </div>
              </Link>

              {/* twitter */}
              <Link href="https://twitter.com/MonuKum18058697">
                <div className="flex items-center justify-center rounded-full shadow-md shadow-red-500 hover:scale-105 duration-200 p-3 cursor-pointer">
                  <FaTwitter className="text-white" size={25} />
                </div>
              </Link>
              {/* facebook */}
              <Link href="https://www.facebook.com/profile.php?id=100024729394773">
                <div className="flex items-center justify-center rounded-full shadow-md shadow-red-500 hover:scale-105 duration-200 p-3 cursor-pointer">
                  <FaFacebook className="text-white" size={25} />
                </div>
              </Link>
              {/* github */}
              <Link href="https://github.com/MONU8OO8">
                <div className="flex items-center justify-center rounded-full shadow-md shadow-red-500 hover:scale-105 duration-200 p-3 cursor-pointer">
                  <FaGithub className="text-white" size={25} />

                </div>
              </Link>

              {/* spotify */}
              <Link href="#">
                <div className="flex items-center justify-center rounded-full shadow-md shadow-red-500 hover:scale-105 duration-200 p-3 cursor-pointer">
                  <FaSpotify className="text-white" size={25} />
                </div>
              </Link>
              {/* instagram */}
              <Link href="https://www.instagram.com/m0nukumarr/">
                <div className="flex items-center justify-center rounded-full shadow-md shadow-red-500 hover:scale-105 duration-200 p-3 cursor-pointer">
                  <FaInstagram className="text-white" size={25} />
                </div>
              </Link>
            </div>

          </div>

          {/* form stuff  */}
          <div className="w-full md:w-1/2 h-full rounded-xl p-4">
            <div className="p-4 text-left">
              <form
                action="https://getform.io/f/f89700c4-2d47-4651-9471-5d495d185693"
                method="POST"
                id="checkIt" type="text" >
                <div className="block gap-4 w-full py-2">
                  <div className="block m-auto w-full">
                    <div className="flex flex-col">
                      <label className="capitalize text-sm py-2 text-white font-light">
                        name
                      </label>
                      <input
                        type="text"
                        name="name"
                        id="name"
                        className="border-2 text-custom-blue rounded-lg p-3 flex focus:outline-none border-red-200"
                        required
                      />
                    </div>
                    <div className="flex flex-col">
                      <label className="capitalize text-sm py-2 text-white font-light">
                        phone
                      </label>
                      <input
                        type="text"
                        name="phone"
                        id="phone"
                        className="border-2 text-custom-blue rounded-lg p-3 flex focus:outline-none  border-red-200"
                        required
                        minLength="10"
                        maxLength="15"
                      />
                    </div>
                  </div>


                  <div className="flex flex-col col-span-2">
                    <label className="capitalize text-sm py-2 text-white font-light">
                      email
                    </label>
                    <input
                      typeof="email"
                      name="email"
                      className="border-2 text-custom-blue rounded-lg p-3 flex focus:outline-none border-red-200"
                      required
                    />
                  </div>
                  <div className="flex flex-col col-span-2">
                    <label className="capitalize text-sm py-2 text-white font-light">
                      message
                    </label>
                    <textarea
                      name="message"
                      rows="10"
                      className="border-2 text-custom-blue rounded-lg p-3 flex focus:outline-none border-red-200"
                    ></textarea>
                  </div>
                </div>

                <div className="flex items-center justify-center">
                  <button className="my-8 hover:border-red-500 border-2 border-red-200 text-white px-6 py-3 font-bold uppercase rounded-full tracking-wider cursor-pointer hover:scale-105 duration-200">
                    send message
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;