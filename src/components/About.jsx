import React from "react";
import { motion } from "framer-motion";
import dp from "../assets/dp.png";

export default function About() {
  return (
    <section className="mt-24 lg:mt-32 px-5 lg:px-28" id="about">
      <div className="flex justify-between flex-col lg:flex-row items-center gap-10">

        {/* LEFT – PROFILE IMAGE */}
        <motion.div
          className="lg:w-1/2 w-full flex justify-center"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ type: "spring", stiffness: 80, damping: 10 }}
          viewport={{ once: true }}
        >
          <img
            src={dp}
            alt="Mohamed Abuthalha"
            className="
              w-64 h-64 lg:w-96 lg:h-96 rounded-full object-cover
              border-4 border-[#0D1C44]
              shadow-[0_0_35px_#4B89D4]
            "
          />
        </motion.div>

        {/* RIGHT – CONTENT */}
        <motion.div
          className="lg:w-1/2 w-full"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{
            type: "spring",
            stiffness: 80,
            damping: 10,
            delay: 0.2,
          }}
          viewport={{ once: true }}
        >
          <h2 className="lg:text-4xl text-2xl mt-4 lg:mt-0 text-[#0D1C44]">
            About <span className="font-extrabold text-[#1A4B9F]">Me</span>
          </h2>

          <p className="text-[#71717A] text-sm/6 lg:text-base mt-5 lg:mt-10">
            I’m a fresher full-stack developer who enjoys working on both frontend
            and backend, from building clean, responsive UIs to designing solid
            backend logic and APIs.
          </p>

          <p className="text-[#71717A] text-sm/6 lg:text-base mt-3 lg:mt-5">
            I focus on developing practical skills aligned with company
            requirements and continuously upskill to adapt to new tools and
            technologies.
          </p>

          <p className="text-[#71717A] text-sm/6 lg:text-base mt-3 lg:mt-5">
            Outside of coding, I enjoy designing with Canva and Figma, chess, and
            volleyball.
          </p>
        </motion.div>

      </div>
    </section>
  );
}
