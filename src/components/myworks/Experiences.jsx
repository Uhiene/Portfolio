import { FaLaptop } from "react-icons/fa";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import ReusableMotion from "../reuseableComponents/ReusableMotion";

const Experiences = () => {
  return (
    <div className="p-6 lg:p-24">
      <ReusableMotion delay={3} duration={1.5} className="mb-10">
        <h2 className="uppercase text-xs lg:text-base tracking-[5px] font-light text-white font-sans">
          Expertise
        </h2>
        <p className="font-serif font-medium text-2xl lg:text-5xl text-white mt-4 lg:mt-8 leading-tight">
         Frontend Developer, React Expert, NextJs, Tutor, Technical Writer
        </p>
      </ReusableMotion>
      <VerticalTimeline lineColor="#5B5B5C">
        <VerticalTimelineElement
          className="vertical-timeline-element--work font-sans"
          // contentStyle={{background:"#8A8A8B"}}
          date="2022-2024"
          dateClassName="text-gray-100"
          iconStyle={{ background: "#E5B979", color: "#fff" }}
          icon={<FaLaptop />}
        >
          <h3 className="vertical-timeline-element-title font-medium text-lg ">
            Frontend Developer & Project Manager{" "}
          </h3>
          <h4 className="vertical-timeline-element-subtitle font-extralight text-gray-950">
            Dapp Mentors LLC | Port Harcourt, Nigeria (Hybrid)
          </h4>
          <h4 className="vertical-timeline-element-subtitle text-base font-light mt-2 text-gray-950">
            Built Web3 user interfaces with React and Next.js, integrated
            backend APIs into responsive frontends, and managed project
            timelines while leading cross-functional teams to meet milestones.
          </h4>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work font-sans text-gray-300"
          contentStyle={{
            background: "transparent",
            border: "1px solid #E5B979",
          }}
          contentArrowStyle={{ borderRight: "7px solid  #E5B979" }}
          date="2022-2023"
          iconStyle={{ background: "#E5B979", color: "#fff" }}
          icon={<FaLaptop />}
        >
          <h3 className="vertical-timeline-element-title font-medium text-lg">
            Frontend Developer
          </h3>
          <h4 className="vertical-timeline-element-subtitle">
            Sate Consult | Accra Ghanna (Remote)
          </h4>
          <p>
            Developed web interfaces with React, JavaScript, and Tailwind CSS,
            conducted usability testing to enhance user experience, and
            collaborated with senior developers to deliver SEO-friendly
            solutions.
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work font-sans "
          date="2022-2022"
          dateClassName="text-gray-100"
          iconStyle={{ background: "#E5B979", color: "#fff" }}
          icon={<FaLaptop />}
        >
          <h3 className="vertical-timeline-element-title font-medium text-lg">
            Web Developer Intern
          </h3>
          <h3 className="vertical-timeline-element-title">
            White Creativity | Port Harcourt, Nigeria (On-site)
          </h3>
          <h4 className="vertical-timeline-element-subtitle">
            Developed responsive websites, collaborated with teams, and
            implemented client-focused solutions using modern web technologies.
          </h4>
        </VerticalTimelineElement>
      </VerticalTimeline>
      <ReusableMotion delay={3} duration={1.5} className="mt-14">
        <h2 className="uppercase text-xs lg:text-base tracking-[5px] font-light text-white font-sans">
          Education
        </h2>
        <p className="font-serif font-medium text-2xl lg:text-5xl text-white mt-4 leading-tight">
         University of Port Harcourt
        </p>
        <p className="font-sans text-lg text-white">
        Bachelor's Degree in Computer Science 2018 - 2024
        </p>
      </ReusableMotion>
    </div>
  );
};

export default Experiences;
