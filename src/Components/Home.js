import React, { useEffect } from "react";
import Ray from "./Images/Ray.png";
import Tail from "./Images/tailwind-css-icon.svg";
import Heroku from "./Images/heroku-icon.svg";
import Fire from "./Images/firebase.svg";
import MongoDB from "./Images/mongodb.svg";
import Netlify from "./Images/Netlify.svg";
import NextJS from "./Images/nextjs.svg";
import Postman from "./Images/postman-icon.svg";
import NodeJS from "./Images/nodejs.svg";
import Linux from "./Images/linux-icon.svg";
import Sanity from "./Images/sanity.svg";
import Python from "./Images/python.svg";
import Express from "./Images/expressjs.svg";
import {
  FaGithub,
  FaJsSquare,
  FaLinkedin,
  FaInstagram,
  FaRegEnvelope,
  FaHtml5,
  FaReact,
  FaCss3Alt,
  FaBootstrap,
  FaGitAlt,
  FaNpm,
  FaDocker,
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
      <h1 className="text-center text-6xl uppercase">Ray the Dev</h1>
      <div className="container w-full mx-auto flex flex-col-reverse md:flex-row items-center my-12 md:my-24">
        {/* Left Column */}
        <div
          data-aos="fade-down"
          data-aos-duration="1000"
          className="flex flex-col w-full lg:w-1/2 justify-center items-start pt-12 pb-24 px-6"
        >
          <h1 className="font-bold text-3xl my-4 self-center underline uppercase">
            Welcome To My Portfolio
          </h1>
          <p className="mb-4 text-center font-mono leading-loose tracking-wider hover:bg-white">
            I am a full stack software developer specializing in the{" "}
            <strong>MERN & JAMstack</strong> technologies. I really enjoy just
            learning new things and applying newfound knowledge in order to
            build new things. I believe no knowledge is useless, you just need
            to find where its most useful. This concept keeps me open minded and
            provides me the wherewithal to implement that into my skills as a
            developer.
          </p>
        </div>

        {/* Right Column */}
        <div className="w-full">
          <div
            data-aos="fade-up-left"
            data-aos-duration="1000"
            className="flex flex-col carder justify-center max-w-2xl mx-auto bg-white shadow-xl rounded-xl p-5"
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
                Full-Stack Developer
              </p>

              {/* Icons component */}
              <div className="flex align-center justify-center mt-4">
                <a
                  className="text-xl m-1 p-1 sm:m-2 sm:p-2 text-gray-800 hover:bg-gray-800 rounded-full hover:text-white transition-colors duration-300"
                  href="https://github.com/RaymondNwambuonwo"
                  rel="noreferrer"
                  target="_blank"
                >
                  <FaGithub />
                  <span className="sr-only">Github</span>
                </a>
                <a
                  className="text-xl m-1 p-1 sm:m-2 sm:p-2 text-blue-500 hover:bg-blue-500 rounded-full hover:text-white transition-colors duration-300"
                  href="https://www.linkedin.com/in/raymondnwambuonwo/"
                  rel="noreferrer"
                  target="_blank"
                >
                  <FaLinkedin />
                  <span className="sr-only">LinkedIn</span>
                </a>
                <a
                  className="text-xl m-1 p-1 sm:m-2 sm:p-2 hover:bg-white-500 rounded-full hover:text-white transition-colors duration-300"
                  href="https://www.instagram.com/raythedev_/"
                >
                  <FaInstagram />
                  <span className="sr-only">Instagram</span>
                </a>
                <a
                  className="text-xl m-1 p-1 sm:m-2 sm:p-2 text-teal-500 hover:bg-teal-500 rounded-full hover:text-white transition-colors duration-300"
                  href="mailto:raymondnwambuonwo@gmail.com"
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
      <h1 className="text-center text-6xl">Skills</h1>
      <div className="flex flex-wrap sm:flex-row align-center justify-center max-w-2xl mx-auto mt-8">
        <div
          data-aos="flip-left"
          data-aos-duration="3000"
          className="m-4 w-40 flex-none mx-auto text-center p-5 rounded-xl border-2 border-gray-300 hover:bg-yellow-600 hover:bg-opacity-60"
        >
          <FaHtml5
            className="text-4xl mx-auto inline-block"
            style={{ color: "coral" }}
          />
          <p className="text-xl font-semibold mt-4">HTML5</p>
        </div>
        <div
          data-aos="flip-left"
          data-aos-duration="3000"
          className="m-4 w-40 flex-none mx-auto text-center p-5 rounded-xl border-2 border-gray-300 hover:bg-blue-500"
        >
          <FaCss3Alt
            className="text-4xl mx-auto inline-block"
            style={{ color: "blue" }}
          />
          <p className="text-xl font-semibold mt-4">CSS</p>
        </div>
        <div
          data-aos="flip-right"
          data-aos-duration="3000"
          className="m-4 w-40 flex-none mx-auto text-center p-5 rounded-xl border-2 border-gray-300 hover:bg-yellow-400"
        >
          <FaJsSquare
            className="text-4xl mx-auto inline-block"
            style={{ color: "yellow" }}
          />
          <p className="text-xl font-semibold mt-4">JavaScript</p>
        </div>
        <div
          data-aos="flip-up"
          data-aos-duration="3000"
          className="m-4 w-40 flex-none mx-auto text-center p-5 rounded-xl border-2 border-gray-300 hover:bg-indigo-700 hover:bg-opacity-60"
        >
          <FaBootstrap
            className="text-4xl mx-auto inline-block"
            style={{ color: "purple" }}
          />
          <p className="text-xl font-semibold mt-4">Bootstrap</p>
        </div>
        <div
          data-aos="flip-up"
          data-aos-duration="3000"
          className="m-4 w-40 flex-none mx-auto text-center p-5 rounded-xl border-2 border-gray-300 hover:bg-blue-200"
        >
          <FaReact
            className="text-4xl mx-auto inline-block"
            style={{ color: "skyblue" }}
          />
          <p className="text-xl font-semibold mt-4">ReactJS</p>
        </div>

        <div
          data-aos="flip-up"
          data-aos-duration="3000"
          className="m-4 w-40 flex-none mx-auto text-center p-5 rounded-xl border-2 border-gray-300 hover:bg-green-300"
        >
          <img className="mx-auto h-9 inline-block" src={Tail} alt="Tailwind" />
          <p className="text-xl font-semibold mt-4">Tailwind</p>
        </div>

        <div
          data-aos="flip-up"
          data-aos-duration="3000"
          className="m-4 w-40 flex-none mx-auto text-center p-5 rounded-xl border-2 border-gray-300 hover:bg-green-600"
        >
          <img className="mx-auto h-9 inline-block" src={NodeJS} alt="NodeJS" />
          <p className="text-lg font-semibold mt-4">NodeJS</p>
        </div>
        <div
          data-aos="flip-up"
          data-aos-duration="3000"
          className="m-4 w-40 flex-none mx-auto text-center p-5 rounded-xl border-2 border-gray-300 hover:bg-yellow-600"
        >
          <FaGitAlt
            className="text-4xl mx-auto inline-block"
            style={{ color: "#F1502F" }}
          />
          <p className="text-xl font-semibold mt-4">Git</p>
        </div>
        <div
          data-aos="flip-up"
          data-aos-duration="3000"
          className="m-4 w-40 flex-none mx-auto text-center p-5 rounded-xl border-2 border-gray-300 hover:bg-white"
        >
          <FaNpm
            className="text-4xl mx-auto inline-block"
            style={{ color: "#CC3534" }}
          />
          <p className="text-xl font-semibold mt-4">NPM</p>
        </div>
        <div
          data-aos="flip-up"
          data-aos-duration="3000"
          className="m-4 w-40 flex-none mx-auto text-center p-5 rounded-xl border-2 border-gray-300 hover:bg-gray-500"
        >
          <img className="mx-auto h-9 inline-block" src={Linux} alt="Linux" />
          <p className="text-xl font-semibold mt-4">Linux</p>
        </div>
        <div
          data-aos="flip-up"
          data-aos-duration="3000"
          className="m-4 w-40 flex-none mx-auto text-center p-5 rounded-xl border-2 border-gray-300 hover:bg-green-800"
        >
          <img
            className="mx-auto h-9 inline-block"
            src={MongoDB}
            alt="MongoDB"
          />
          <p className="text-xl font-semibold mt-4">MongoDB</p>
        </div>
        <div
          data-aos="flip-up"
          data-aos-duration="3000"
          className="m-4 w-40 flex-none mx-auto text-center p-5 rounded-xl border-2 border-gray-300 hover:bg-yellow-500"
        >
          <img className="mx-auto h-9 inline-block" src={Fire} alt="Firebase" />
          <p className="text-xl font-semibold mt-4">Firebase</p>
        </div>
        <div
          data-aos="flip-up"
          data-aos-duration="3000"
          className="m-4 w-40 flex-none mx-auto text-center p-5 rounded-xl border-2 border-gray-300 hover:bg-red-700"
        >
          <img className="mx-auto h-9 inline-block" src={Sanity} alt="Sanity" />
          <p className="text-xl font-semibold mt-4">Sanity</p>
        </div>
        <div
          data-aos="flip-up"
          data-aos-duration="3000"
          className="m-4 w-40 flex-none mx-auto text-center p-5 rounded-xl border-2 border-gray-300 hover:bg-indigo-500"
        >
          <img className="mx-auto h-9 inline-block" src={Heroku} alt="Heroku" />
          <p className="text-xl font-semibold mt-4">Heroku</p>
        </div>
        <div
          data-aos="flip-up"
          data-aos-duration="3000"
          className="m-4 w-40 flex-none mx-auto text-center p-5 rounded-xl border-2 border-gray-300 hover:bg-yellow-600"
        >
          <img
            className="mx-auto h-9 inline-block"
            src={Postman}
            alt="Postman"
          />
          <p className="text-xl font-semibold mt-4">Postman</p>
        </div>
        <div
          data-aos="flip-up"
          data-aos-duration="3000"
          className="m-4 w-40 flex-none mx-auto text-center p-5 rounded-xl border-2 border-gray-300 hover:bg-blue-500"
        >
          <img
            className="mx-auto h-9 inline-block"
            src={Netlify}
            alt="Netlify"
          />
          <p className="text-xl font-semibold mt-4">Netlify</p>
        </div>
        <div
          data-aos="flip-up"
          data-aos-duration="3000"
          className="m-4 w-40 flex-none mx-auto text-center p-5 rounded-xl border-2 border-gray-300 hover:bg-gray-400"
        >
          <img className="mx-auto h-9 inline-block" src={NextJS} alt="NextJS" />
          <p className="text-xl font-semibold mt-4">NextJS</p>
        </div>
        <div
          data-aos="flip-up"
          data-aos-duration="3000"
          className="m-4 w-40 flex-none mx-auto text-center p-5 rounded-xl border-2 border-gray-300 hover:bg-yellow-300"
        >
          <img className="mx-auto h-9 inline-block" src={Python} alt="Python" />
          <p className="text-xl font-semibold mt-4">Python</p>
        </div>
        <div
          data-aos="flip-up"
          data-aos-duration="3000"
          className="m-4 w-40 flex-none mx-auto text-center p-5 rounded-xl border-2 border-gray-300 hover:bg-white"
        >
          <FaDocker
            className="text-4xl mx-auto inline-block"
            style={{ color: "#0db7ed" }}
          />
          <p className="text-xl font-semibold mt-4">Docker</p>
        </div>
        <div
          data-aos="flip-up"
          data-aos-duration="3000"
          className="m-4 w-40 flex-none mx-auto text-center p-5 rounded-xl border-2 border-gray-300 hover:bg-gray-300"
        >
          <img
            className="mx-auto h-9 inline-block"
            src={Express}
            alt="Express"
          />
          <p className="text-xl font-semibold mt-4">ExpressJS</p>
        </div>
      </div>
    </div>
  );
}
