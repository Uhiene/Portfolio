import React from "react";
import { projects } from "../../store/projects";
import ProjectCard from "../myworks/ProjectCard";
import ReusableMotion from "../reuseableComponents/ReusableMotion";
import { motion } from "framer-motion";

const MyWorks = () => {
  return (
    <section id="works" className="p-6 lg:p-24">
      <div>
        <ReusableMotion delay={3} duration={1.5}>
          <h2 className="uppercase text-xs lg:text-base tracking-[5px] font-light text-white font-sans">
            Recent Works
          </h2>
          <p className="font-serif font-medium text-2xl lg:text-5xl text-white mt-4 lg:mt-8 leading-tight">
            Here are some of my favorite projects I have done lately. Feel free
            to check them out.
          </p>
        </ReusableMotion>
        <motion.div
      className="grid grid-cols-2 gap-5 lg:gap-10 mt-16 lg:mt-28"
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.3 }} // Triggers when 30% of the element is in view
      variants={{
        hidden: { opacity: 0 },
        show: {
          opacity: 1,
          transition: {
            staggerChildren: 0.3, // Stagger animation for child elements
          },
        },
      }}
    >
      {projects.map((project, index) => (
        <motion.div
          key={project.id}
          initial={{ opacity: 0, y: 50 }} // Start off-screen and invisible
          whileInView={{ opacity: 1, y: 0 }} // Animate to visible and up position
          viewport={{ once: false, amount: 0.3 }} // Trigger when 30% of the element is in view
          transition={{
            duration: 1,
            ease: "easeInOut",
            delay: index * 0.2, // Stagger delay
          }}
        >
          <ProjectCard
            imageSrc={project.imageSrc}
            imageAlt={project.imageAlt}
            category={project.category}
            title={project.title}
            projectLink={project.projectLink}
          />
        </motion.div>
      ))}
    </motion.div>
      </div>
    </section>
  );
};

export default MyWorks;
