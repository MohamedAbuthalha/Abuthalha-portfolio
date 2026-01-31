import React from "react";

export default function Footer() {
  return (
    <div className="bg-[#0D1C44] px-5 lg:px-28 py-3 lg:py-6 flex items-center justify-between mt-16">
      {/* Logo */}
      <img
        className="h-5 lg:h-9"
        src="/Abuthalha-portfolio/assets/blue.png"
        alt="Mohamed Abuthalha Logo"
      />

      <div className="text-white/70 lg:font-semibold lg:text-sm font-normal text-[10px] text-right lg:space-y-3">
        <p>© 2026 Personal Portfolio</p>
        <p>Made by Mohamed Abuthalha</p>
      </div>
    </div>
  );
}
