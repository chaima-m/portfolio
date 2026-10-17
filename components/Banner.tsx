"use client";

import React from "react";
import Image from "next/image";
import { PROFILE, HIGHLIGHTS } from "@/constant";

const Banner: React.FC<{}> = () => {
  return (
    <div id="top" className="w-full flex items-center justify-center px-6 pt-[110px]">
      <div className="flex flex-col items-center text-center w-full max-w-[680px]">
        {/* Put your photo in /public/Me.png */}
        <Image
          priority
          src="/Me.png"
          height={220}
          width={220}
          alt="Chaima Mekhloufi"
          className="rounded-full object-cover border border-white/10"
        />

        <span className="mt-8 inline-flex items-center gap-2 rounded-full glass px-4 py-1.5 text-xs text-gray-200">
          <span className="h-2 w-2 rounded-full bg-emerald-400" />
          Open to junior AI / ML / Data / DevOps roles
        </span>

        <h1 className="mt-6 text-5xl md:text-7xl font-semibold text-white leading-[1.05] tracking-[-0.035em]">
          Chaima Mekhloufi
        </h1>

        <p className="mt-5 text-xl md:text-2xl font-medium text-gray-300 tracking-[-0.01em]">
          {PROFILE.title} &middot;{" "}
          <span className="text-transparent font-semibold bg-clip-text bg-gradient-to-r from-purple-500 to-pink-400">
            LLM &amp; RAG
          </span>
        </p>

        <p className="text-base text-gray-300 leading-relaxed mt-5 max-w-[560px]">
          Final-year AI &amp; Data Science engineering student at ENSIA. I build
          production-oriented AI systems: on-premise LLMs, RAG assistants and
          containerized microservice platforms on Docker &amp;.
        </p>

        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <a
            href={`mailto:${PROFILE.email}`}
            className="press rounded-full text-white font-semibold py-3 px-8 border border-white/60 hover:bg-white hover:text-black hover:border-white"
          >
            Contact Me
          </a>
          <a
            href={PROFILE.cv}
            download
            className="press rounded-full text-white font-semibold py-3 px-8 bg-gradient-to-r from-purple-600 to-pink-500 hover:opacity-90"
          >
            Download CV
          </a>
          <a
            href={PROFILE.github}
            target="_blank"
            rel="noopener noreferrer"
            className="press rounded-full text-white font-semibold py-3 px-8 border border-white/15 hover:bg-white/10"
          >
            GitHub
          </a>
        </div>

        <div className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-4 w-full">
          {HIGHLIGHTS.map((h) => (
            <div key={h.label} className="glass rounded-2xl p-4">
              <p className="text-2xl font-semibold text-white tracking-[-0.02em]">{h.value}</p>
              <p className="text-xs text-gray-400 mt-1 leading-snug">{h.label}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Banner;
