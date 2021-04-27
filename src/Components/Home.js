import React, { useEffect } from "react";
import Ray from "./Images/Ray.png";
import {
  FaGithub,
  FaJsSquare,
  FaLinkedin,
  FaTwitter,
  FaRegEnvelope,
  FaHtml5,
  FaReact,
  FaCss3Alt,
  FaBootstrap,
} from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css";

export default function Home() {
  useEffect(() => {
    AOS.init({
      once: true,
    });
  });

  return (
    //Hero
    <div>
      <div className="container w-full mx-auto flex flex-col-reverse md:flex-row items-center my-12 md:my-24">
        {/* Left Column */}
        <div
          data-aos="fade-down"
          data-aos-duration="1000"
          className="flex flex-col w-full lg:w-1/2 justify-center items-start pt-12 pb-24 px-6"
        >
          <p className="uppercase tracking-loose">Witty Tagline</p>
          <h1 className="font-bold text-3xl my-4">My Super App</h1>
          <p className="leading-normal mb-4">
            Enter your super app's description here... The key is to find the
            right length. Don't want it to be too long, but then don't want it
            to be too short so that it looks weird between the title and button
            below.
          </p>
          <button className="bg-transparent hover:bg-gray-900 text-gray-900 hover:text-white rounded shadow hover:shadow-lg py-2 px-4 border border-gray-900 hover:border-transparent">
            Super Button
          </button>
        </div>

        {/* Right Column */}
        <div className="w-full">
          <div
            data-aos="fade-up-left"
            data-aos-duration="1000"
            className="flex flex-col carder justify-center max-w-2xl mx-auto bg-white shadow-xl rounded-xl p-5"
            // className="w-full lg:w-1/2 lg:py-6 text-center flex flex-col justify-center carder shadow-xl rounded-xl p-5"
          >
            {/* image component */}
            <img
              className="max-w-xs md:max-w-lg mx-auto shadow-xl rounded-full"
              src={Ray}
              alt="Profile face"
            />

            {/* card component */}
            <div className="text-center mt-5">
              <p className="text-xl sm:text-2xl font-semibold text-gray-900">
                Raymond Nwambuonwo
              </p>
              <p className="text-xs sm:text-base text-gray-600 pt-2 pb-4 px-5 w-auto inline-block border-b-2">
                Front-End Developer/Designer
              </p>

              {/* Icons component */}
              <div className="flex align-center justify-center mt-4">
                <a
                  className="text-xl m-1 p-1 sm:m-2 sm:p-2 text-gray-800 hover:bg-gray-800 rounded-full hover:text-white transition-colors duration-300"
                  href="https://github.com/BraydenTW"
                >
                  <FaGithub />
                  <span className="sr-only">Github</span>
                </a>
                <a
                  className="text-xl m-1 p-1 sm:m-2 sm:p-2 text-blue-500 hover:bg-blue-500 rounded-full hover:text-white transition-colors duration-300"
                  href="https://github.com/BraydenTW"
                >
                  <FaLinkedin />
                  <span className="sr-only">Dribble</span>
                </a>
                <a
                  className="text-xl m-1 p-1 sm:m-2 sm:p-2 text-blue-500 hover:bg-blue-500 rounded-full hover:text-white transition-colors duration-300"
                  href="https://github.com/BraydenTW"
                >
                  <FaTwitter />
                  <span className="sr-only">Twitter</span>
                </a>
                <a
                  className="text-xl m-1 p-1 sm:m-2 sm:p-2 text-teal-500 hover:bg-teal-500 rounded-full hover:text-white transition-colors duration-300"
                  href="https://github.com/BraydenTW"
                >
                  <FaRegEnvelope />
                  <span className="sr-only">Email</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Skills Section */}
      <h1 className="text-center text-5xl">Skills</h1>
      <div className="flex flex-wrap sm:flex-row align-center justify-center max-w-2xl mx-auto mt-8">
        <div
          data-aos="flip-left"
          data-aos-duration="3000"
          className="m-4 w-40 flex-none mx-auto text-center p-5 rounded-xl border-2 border-gray-300 hover:bg-red-700 "
        >
          <FaHtml5 className="text-4xl mx-auto inline-block" />
          <p className="text-xl font-semibold mt-4">HTML5</p>
        </div>
        <div
          data-aos="flip-left"
          data-aos-duration="3000"
          className="m-4 w-40 flex-none mx-auto text-center p-5 rounded-xl border-2 border-gray-300"
        >
          <FaCss3Alt className="text-4xl mx-auto inline-block" />
          <p className="text-xl font-semibold mt-4">CSS</p>
        </div>
        <div
          data-aos="flip-right"
          data-aos-duration="3000"
          className="m-4 w-40 flex-none mx-auto text-center p-5 rounded-xl border-2 border-gray-300"
        >
          <FaJsSquare className="text-4xl mx-auto inline-block" />
          <p className="text-xl font-semibold mt-4">JavaScript</p>
        </div>
        <div
          data-aos="flip-up"
          data-aos-duration="3000"
          className="m-4 w-40 flex-none mx-auto text-center p-5 rounded-xl border-2 border-gray-300"
        >
          <FaBootstrap className="text-4xl mx-auto inline-block" />
          <p className="text-xl font-semibold mt-4">Bootstrap</p>
        </div>
        <div
          data-aos="flip-up"
          data-aos-duration="3000"
          className="m-4 w-40 flex-none mx-auto text-center p-5 rounded-xl border-2 border-gray-300"
        >
          <FaReact className="text-4xl mx-auto inline-block" />
          <p className="text-xl font-semibold mt-4">ReactJS</p>
        </div>
        <div
          data-aos="flip-up"
          data-aos-duration="3000"
          className="m-4 w-40 flex-none mx-auto text-center p-5 rounded-xl border-2 border-gray-300"
        >
          <FaReact className="text-4xl mx-auto inline-block" />
          <p className="text-xl font-semibold mt-4">ReactJS</p>
        </div>
        <div
          data-aos="flip-up"
          data-aos-duration="3000"
          className="m-4 w-40 flex-none mx-auto text-center p-5 rounded-xl border-2 border-gray-300"
        >
          <FaReact className="text-4xl mx-auto inline-block" />
          <p className="text-xl font-semibold mt-4">ReactJS</p>
        </div>
        <div
          data-aos="flip-up"
          data-aos-duration="3000"
          className="m-4 w-40 flex-none mx-auto text-center p-5 rounded-xl border-2 border-gray-300"
        >
          <FaReact className="text-4xl mx-auto inline-block" />
          <p className="text-xl font-semibold mt-4">ReactJS</p>
        </div>
      </div>
    </div>
  );
}
