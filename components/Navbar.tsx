"use client";

import React from "react";
import { PROFILE } from "@/constant";

const links = [
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
];

const Navbar: React.FC<{}> = () => {
  return (
    <header className="w-full h-[65px] fixed top-0 z-50 px-4 md:px-10 bg-[rgba(17,17,17,0.55)] backdrop-blur-xl backdrop-saturate-150">
      <div className="w-full max-w-[1200px] h-full flex flex-row items-center justify-between mx-auto">
        <a
          title="Chaima Mekhloufi"
          href="#top"
          className="text-white font-semibold text-xl tracking-[-0.02em]"
        >
          Chaima
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-pink-400">
            .
          </span>
        </a>

        <div className="flex flex-row items-center gap-6">
          <nav className="hidden md:flex gap-6 text-gray-300 text-sm">
            {links.map((l) => (
              <a key={l.href} href={l.href} className="hover:text-white transition-colors">
                {l.label}
              </a>
            ))}
          </nav>
          <a
            href="#contact"
            className="press bg-white/10 hover:bg-white/20 rounded-xl text-white text-sm py-2 px-5"
          >
            Contact
          </a>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
