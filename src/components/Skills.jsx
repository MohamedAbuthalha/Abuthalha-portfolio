import React from "react";
import { motion } from "framer-motion";
import {
  FaJs,
  FaReact,
  FaNodeJs,
  FaDatabase,
} from "react-icons/fa";
import { SiMongodb, SiExpress } from "react-icons/si";
import { RiNextjsFill, RiTailwindCssFill } from "react-icons/ri";

export default function Skills() {
  const skills = [
    { id: 1, name: "JavaScript", icon: <FaJs size={50} /> },
    { id: 2, name: "React.js", icon: <FaReact size={50} /> },
    { id: 3, name: "Next.js", icon: <RiNextjsFill size={50} /> },
    { id: 4, name: "Node.js", icon: <FaNodeJs size={50} /> },
    { id: 5, name: "Express.js", icon: <SiExpress size={50} /> },
    { id: 6, name: "MongoDB", icon: <SiMongodb size={50} /> },
    { id: 7, name: "Tailwind CSS", icon: <RiTailwindCssFill size={50} /> },
    { id: 8, name: "REST APIs", icon: <FaDatabase size={50} /> },
  ];

  return (
    <section id="skills" className="mt-24 lg:mt-32 pb-16">
      <div className="px-5 lg:px-28">

        <motion.h2
          className="text-2xl lg:text-4xl text-center text-[#0D1C44]"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          My <span className="font-extrabold text-[#1A4B9F]">Skills</span>
        </motion.h2>

        {/* Skill Cards */}
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-5 text-lg font-bold mt-10 lg:mt-16 place-items-center gap-y-8 lg:gap-y-12">
          {skills.map((skill) => (
            <motion.div
              key={skill.id}
              className="
                bg-white border-2 border-[#0D1C44]
                rounded p-3 h-36 w-36 lg:h-44 lg:w-44
                flex flex-col items-center justify-center gap-5
                cursor-pointer transition-all
                text-[#0D1C44]
                hover:bg-[#1A4B9F] hover:text-white
                hover:shadow-[0_0_30px_#4B89D4]
              "
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.5,
                ease: "easeOut",
                delay: skill.id * 0.08,
              }}
              viewport={{ once: true }}
            >
              {skill.icon}
              <p className="text-center">{skill.name}</p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
