import React from "react";
import { TbExternalLink } from "react-icons/tb";
import { motion } from "framer-motion";

// Image is in public/assets, so we use direct path
const projects = [
  {
    id: 1,
    title: "Hospital Management System – Smart Triage & Auto Doctor Assignment",
    description:
      "A backend-first hospital management system built with Node.js, Express, and MongoDB. Features include JWT authentication, role-based access control, rule-based medical triage, priority-based patient handling, and automatic doctor assignment based on specialization and workload. Designed to mimic real-world hospital workflows and built to be AI-ready.",
    image: "/Abuthalha-portfolio/assets/dr.jpg", // ✅ include repo folder
    link: "https://github.com/MohamedAbuthalha/abuthalha-final",
  },
];


export default function Projects() {
  return (
    <div
      className="bg-[#0D1C44] px-5 lg:px-28 py-8 my-8 lg:py-16 lg:my-16"
      id="projects"
    >
      <h2 className="text-2xl lg:text-4xl text-center text-white">
        My{" "}
        <span className="font-extrabold text-[#4B89D4]">Projects</span>
      </h2>

      <div className="lg:mt-16 mt-8 space-y-8 lg:space-y-16 lg:pb-6 pb-3">
        {projects.map((project) => (
          <motion.div
            key={project.id}
            className="flex justify-between items-center flex-col lg:flex-row"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              type: "spring",
              stiffness: 80,
              damping: 10,
            }}
            viewport={{ once: true }}
          >
            {/* Project Image */}
            <div className="lg:w-[500px] w-full rounded-2xl overflow-hidden">
              <img
                className="w-full h-full hover:scale-105 transition-all duration-500 cursor-pointer object-cover"
                src={project.image}
                alt={project.title}
              />
            </div>

            {/* Project Details */}
            <div className="lg:w-1/2 lg:space-y-6 space-y-4">
              <h2 className="font-extrabold text-[#4B89D4] mt-5 lg:mt-0 text-3xl lg:text-5xl">
                {String(project.id).padStart(2, "0")}
              </h2>

              <p className="font-bold text-white text-xl lg:text-3xl">
                {project.title}
              </p>

              <p className="font-light text-sm/6 lg:text-base text-[#71717A]">
                {project.description}
              </p>

              <a
                href={project.link}
                className="text-[#4B89D4] hover:text-white transition-colors mt-3 block w-fit"
                target="_blank"
                rel="noopener noreferrer"
              >
                <TbExternalLink size={23} />
              </a>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
