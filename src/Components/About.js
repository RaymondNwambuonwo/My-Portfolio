import React, { useEffect } from "react";
import Ray from "./Images/Ray.png";
import AOS from "aos";

export default function About() {
  useEffect(() => {
    AOS.init({
      once: true,
    });
  });

  return (
    <>
      {/* First container: About Me */}
      <div className="flex items-center mx-auto">
        <div
          data-aos="fade-up"
          data-aos-duration="2000"
          className="browser-mockup bg-yellow-100 flex flex-auto m-6 md:px-0 md:m-12 w-1/2 rounded shadow-xl"
        >
          <div className="flex justify-center">
            <h1 className="uppercase text-center text-lg md:text-4xl tracking-loose underline">
              Chapter 1: Communications and Communicating
            </h1>
            {/* <h1 className="font-bold text-1xl md:text-sm my-4">Ray The Dev</h1> */}
            <p className="leading-loose text-center text-xs md:text-lg md:mb-4 md:mt-10 overflow-clip overflow-hidden ">
              My journey starts with me back in college, a communication major
              looking to get into the traditional media scene. I enjoyed making
              videos, working on the college television set, college radio, and
              everything in between. Although enjoyable, it was not long until
              find myself a college graduate unable to enter into the media
              field as I once hoped, not realizing the internet changed
              traditional media as we know it. I started to understand, although
              new at the time, apps like Tumblr, Twitter, YouTube, etc. enabled
              people to create and produce their own blogs, shows, news, etc. I
              found it exciting that media took on a new form, but was lost on
              how to use it along with my degree, given that when these apps
              were still fairly new. Nonetheless, this fork in the road brings
              me to the next chapter in my career, an educator.
            </p>
          </div>
        </div>
      </div>

      {/* Second Container */}
      <div className="flex items-center mx-auto">
        <div
          data-aos="fade-up"
          data-aos-duration="2000"
          className="browser-mockup bg-green-100 flex flex-auto m-6 md:px-0 md:m-12 w-1/2 rounded shadow-xl"
        >
          <div className="flex justify-center">
            <h1 className="uppercase text-center text-lg md:text-4xl tracking-loose underline">
              Chapter 2: Education is Key
            </h1>
            {/* <h1 className="font-bold text-1xl md:text-sm my-4">Ray The Dev</h1> */}
            <p className="leading-loose text-center text-xs md:mb-4 md:mt-10 md:text-lg overflow-clip overflow-hidden ">
              I decided to put the media dreams on hold and get into education.
              My entrance into education was through a program called City Year
              under AmeriCorps. In this program a year of service is required
              and during this year I was able to teach junior high school in New
              York City. From there I went on to teach second grade, which was a
              challenging but fun and rewarding experience that ignited not only
              a passion to share knowledge, but to learn.
            </p>
            <p className="leading-loose text-center text-xs md:text-lg overflow-clip overflow-hidden  ">
              I decided to get my Master of Science in Higher Education from the
              State University of New York College at Buffalo. Upon graduating I
              started out as an academic advisor with the University of
              Maryland. Although I liked helping the students while in that
              position, I felt stagnate and wanting more out of life and a
              career. So I made the most risky but greatest decision of my
              life...........become a software developer!
            </p>
          </div>
        </div>
      </div>

      {/* Third Column */}
      <div className="flex items-center mx-auto">
        <div
          data-aos="fade-up"
          data-aos-duration="2000"
          className="browser-mockup bg-red-200 flex flex-auto m-6 md:px-0 md:m-12 w-1/2 rounded shadow-xl"
        >
          <div className="flex justify-center">
            <h1 className="uppercase text-center text-lg md:text-4xl tracking-loose underline">
              Chapter 3: Develop Your Path!
            </h1>
            {/* <h1 className="font-bold text-1xl md:text-sm my-4">Ray The Dev</h1> */}
            <p className="leading-loose text-center text-xs md:text-lg md:mb-4 md:mt-10 overflow-clip overflow-hidden ">
              After working for the University of Maryland for a year, I decided
              I needed a change. I had a friend who was a software engineer and
              told me to look into it. Upon reading about the field, I found
              myself tumbling down a rabbit hole of information and
              opportunities. This led me to do the Software Engineering
              Immersive Program with General Assembly in Washington D.C. which
              ended up becoming the most insightful, beneficial, and greatest
              learning experience to date.
            </p>
            <p className="leading-loose text-center text-xs md:text-lg md:mb-4 md:mt-10 overflow-clip overflow-hidden ">
              My passion for software development comes from my aptitude for
              learning and being able to apply what I have learned instantly.
              Being able to take what was once a simple thought and bring it
              life is what simply fuels my interest in software development.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
