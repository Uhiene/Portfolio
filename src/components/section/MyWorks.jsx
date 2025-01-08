import React, { useState } from "react";
import { projects, articles, tutorials } from "../../store/projects";
import ProjectCard from "../myworks/ProjectCard";
import ReusableMotion from "../reuseableComponents/ReusableMotion";
import { motion } from "framer-motion";
import ArticleCard from "../myworks/ArticleCard";
import TutorialCard from "../myworks/Tutorialcard";

const TabButton = ({ label, activeTab, setActiveTab }) => (
  <button
    className={`py-2 px-4 ${activeTab === label ? "bg-gold text-white" : "bg-ash1 text-ash"} rounded font-sans text-base`}
    onClick={() => setActiveTab(label)}
  >
    {label.charAt(0).toUpperCase() + label.slice(1)}
  </button>
);

const ContentGrid = ({ items, Component, gridClass }) => (
  <motion.div
    className={`${gridClass} gap-5 lg:gap-10 mt-10 lg:mt-20`}
    initial="hidden"
    whileInView="show"
    viewport={{ once: false, amount: 0.3 }}
    variants={{
      hidden: { opacity: 0 },
      show: {
        opacity: 1,
        transition: {
          staggerChildren: 0.3,
        },
      },
    }}
  >
    {items.map((item, index) => (
      <motion.div
        key={item.id}
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.3 }}
        transition={{
          duration: 1,
          ease: "easeInOut",
          delay: index * 0.2,
        }}
      >
        <Component {...item} />
      </motion.div>
    ))}
  </motion.div>
);

const MyWorks = () => {
  const [activeTab, setActiveTab] = useState("works");

  const renderContent = () => {
    switch (activeTab) {
      case "works":
        return <ContentGrid items={projects} Component={ProjectCard} gridClass="grid grid-cols-2" />;
      case "articles":
        return <ContentGrid items={articles} Component={ArticleCard} gridClass="grid grid-cols-2 lg:grid-cols-5" />;
      case "tutorials":
        return <ContentGrid items={tutorials} Component={TutorialCard} gridClass="grid grid-cols-2 lg:grid-cols-5" />;
      default:
        return null;
    }
  };

  return (
    <section id="works" className="p-6 lg:p-16 lg:px-24 min-h-screen">
      <div>
        <ReusableMotion delay={3} duration={1.5}>
          <h2 className="uppercase text-xs lg:text-base tracking-[5px] font-light text-white font-sans">
            My Portfolio
          </h2>
          <p className="font-serif font-medium text-2xl lg:text-5xl text-white mt-4 leading-tight">
            Here are some of my favorite projects I have done lately. Feel free
            to explore my projects, articles, and tutorials.
          </p>
        </ReusableMotion>

        <div className="flex space-x-4 mt-8">
          <TabButton label="works" activeTab={activeTab} setActiveTab={setActiveTab} />
          <TabButton label="articles" activeTab={activeTab} setActiveTab={setActiveTab} />
          <TabButton label="tutorials" activeTab={activeTab} setActiveTab={setActiveTab} />
        </div>

        {renderContent()}
      </div>
    </section>
  );
};

export default MyWorks;
