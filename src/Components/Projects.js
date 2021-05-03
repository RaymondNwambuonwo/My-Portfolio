import React, { useEffect, useState } from "react";
import sanityClient from "../client.js";

export default function Projects() {
  const [projectData, setProjectData] = useState(null);

  useEffect(() => {
    sanityClient
      .fetch(
        `*[_type == "project"]| order(_createdAt desc){
      title,
      date,
      place,
      description,
      project,
      link,
      tags,
      projectType,
      mainImage{
              asset->{
                _id,
                url
              },
              alt
          }
    }`
      )
      .then((data) => {
        setProjectData(data);
        console.log(data);
      })
      .catch(console.error);
  }, []);

  return (
    <main className="p-12">
      <section className="container md:mx-auto">
        <h1 className="text-5xl flex mb-5 justify-center cursive">Projects</h1>
        <section className="flex flex-wrap flex-row gap-4 md:flex-col md:gap-6">
          {projectData &&
            projectData.map((project, index) => (
              <article
                className="relative rounded-lg shadow-xl bg-white p-10 md:p-16"
                key={index}
              >
                <h3 className="text-blue-800 text-center text-3xl font-bold mb-2 hover:text-red-700">
                  <a
                    href={project.link}
                    alt={project.title}
                    target="_blank"
                    rel="noreferrer"
                  >
                    {project.title}
                  </a>
                </h3>
                <div className="text-gray-500 text-xs text-center space-x-4">
                  <span
                    className="block h-64 relative rounded shadow leading-snug bg-yellow-50 border-l-8 border-red-600"
                    key={index}
                  >
                    <img
                      src={project.mainImage.asset.url}
                      alt={project.mainImage.alt}
                      className="w-full h-full rounded-r object-scale-down"
                    />
                  </span>
                  <h4 className="text-3xl font-mono text-gray-900 underline">
                    Project Description
                  </h4>
                  <p className="my-6 text-lg text-gray-700 font-mono leading-relaxed">
                    {project.description}
                  </p>
                  <h6 className="text-2xl font-mono text-gray-900 underline">
                    Technologies Used:
                  </h6>
                  <p className="my-6 text-lg text-black font-mono font-bold leading-relaxed">
                    {project.tags}
                  </p>
                  <a
                    href={project.link}
                    rel="noopener noreferrer"
                    target="_blank"
                    className="text-red-500 font-bold hover:underline hover:text-red-400 text-xl"
                  >
                    <span role="img" aria-label="right pointer">
                      👉🏾 View The Project
                    </span>
                  </a>
                </div>
              </article>
            ))}
        </section>
      </section>
    </main>
  );
}
