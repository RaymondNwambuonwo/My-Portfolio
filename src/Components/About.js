import React from "react";
import Ray from "./Images/Ray.png";

export default function About() {
  return (
    <>
      {/* First container: About Me */}
      <div className="flex items-center mx-auto">
        <div className="browser-mockup flex flex-auto m-6 md:px-0 md:m-12 bg-white w-1/2 rounded shadow-xl">
          {/* Left Column */}
          <div className="flex flex-col w-full lg:w-1/2 justify-center items-start pt-12 pb-24 px-6">
            <p className="uppercase tracking-loose">Witty Tagline</p>
            <h1 className="font-bold text-1xl md:text-sm my-4">Ray The Dev</h1>
            <p className="leading-normal mb-4">
              I am a full stack developer specializing in the MERN & JAMstack
              technologies. I really enjoy just learning new things and applying
              newfound knowledge to building new things. I believe no knowledge
              is useless, you just need to find where its most useful. This
              concept keeps me open minded and provides me the wherewithal to
              implement that into my skills as a developer.
            </p>
          </div>

          <div className="w-full">
            <div className="grid grid-flow-col grid-cols-2 grid-rows-3 gap-4 md:grid-flow-col">
              <p className="leading-normal mb-4">
                I am a full stack developer specializing in the MERN & JAMstack
                technologies. I really enjoy just learning new things and
                applying newfound knowledge to building new things. I believe no
                knowledge is useless, you just need to find where its most
                useful. This concept keeps me open minded and provides me the
                wherewithal to implement that into my skills as a developer.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
