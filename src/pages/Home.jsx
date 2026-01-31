import React from "react";
import { motion } from "framer-motion";
import { IoLogoLinkedin, IoLogoInstagram } from "react-icons/io5";
import { BiLogoGmail } from "react-icons/bi";
import { BsGithub } from "react-icons/bs";
import { TypeAnimation } from "react-type-animation";

// ✅ IMPORT IMAGE FROM src/assets
import dp from "../assets/dp.png";

export default function Home() {
  return (
    <section className="mt-20" id="home">
      <div className="flex justify-between py-10 items-center px-5 lg:px-28 lg:flex-row flex-col-reverse">

        {/* LEFT CONTENT */}
        <motion.div
          className="lg:w-[55%]"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: "easeInOut" }}
        >
          <motion.div
            className="
              text-2xl lg:text-5xl flex flex-col mt-8 lg:mt-0
              gap-2 lg:gap-5 text-[#0D1C44]
            "
          >
            <h2>
              Hello,&nbsp;
              <TypeAnimation
                sequence={["I am Mohamed Abuthalha", 1500]}
                speed={20}
                style={{ fontWeight: 600 }}
                repeat={Infinity}
              />
            </h2>

            <h2>
              <span className="font-extrabold">Fullstack</span>{" "}
              <span
                className="text-white font-extrabold"
                style={{ WebkitTextStroke: "1px #1A4B9F" }}
              >
                Developer
              </span>
            </h2>
          </motion.div>

          <p className="text-[#71717A] text-sm lg:text-base mt-5">
            Final-year MCA student and Full Stack Developer with hands-on
            experience building scalable web applications using React, Node.js,
            Express, and MongoDB. Strong in frontend UI development and backend
            system design.
          </p>

          {/* SOCIAL LINKS */}
          <div className="flex items-center gap-x-5 mt-10 lg:mt-14">
            {[
              { Icon: BiLogoGmail, link: "mailto:abuthalha.dev@gmail.com" },
              { Icon: IoLogoLinkedin, link: "https://linkedin.com/in/mohamed-abuthalha-mca" },
              { Icon: BsGithub, link: "https://github.com/MohamedAbuthalha" },
              { Icon: IoLogoInstagram, link: "https://www.instagram.com/universeof_abu" },
            ].map(({ Icon, link }, index) => (
              <a
                key={index}
                href={link}
                target="_blank"
                rel="noopener noreferrer"
                className="
                  bg-white p-2 lg:p-3 rounded
                  border-2 border-[#0D1C44]
                  text-[#0D1C44]
                  hover:bg-[#1A4B9F] hover:text-white
                  transition-all
                "
              >
                <Icon className="w-4 h-4 lg:w-5 lg:h-5" />
              </a>
            ))}
          </div>
        </motion.div>

        {/* RIGHT PROFILE IMAGE */}
        <motion.div
          className="lg:w-[45%] w-full flex justify-center mb-8 lg:mb-0"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
        >
         <img
  src={dp}
  alt="Mohamed Abuthalha"
  className="w-64 h-64 lg:w-96 lg:h-96 rounded-full object-cover border-4 border-[#0D1C44] shadow-[0_0_40px_#4B89D4]"
/>

        </motion.div>

      </div>
    </section>
  );
}
