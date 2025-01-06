import React from "react";
import { projects } from "../../store/projects";
import ProjectCard from "../myworks/ProjectCard";

const MyWorks = () => {
  return (
    <section id="works" className="p-6 lg:p-24">
      <div>
        <div>
          <h2 className="uppercase text-xs lg:text-base tracking-[5px] font-light text-white font-sans">Recent Works</h2>
          <p className="font-serif font-medium text-2xl lg:text-5xl text-white mt-4 lg:mt-8 leading-tight">
            Here are some of my favorite projects I have done lately. Feel free
            to check them out.
          </p>
        </div>
        <div className="grid grid-cols-2 gap-5 lg:gap-10 mt-28">
        {projects.map((project) => (
          <ProjectCard
            key={project.id}
            imageSrc={project.imageSrc}
            imageAlt={project.imageAlt}
            category={project.category}
            title={project.title}
            projectLink={project.projectLink}
          />
        ))}
        </div>
      </div>
    </section>
  );
};

export default MyWorks;
