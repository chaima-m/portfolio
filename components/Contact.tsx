import React from "react";
import { PROFILE } from "@/constant";
import SectionHeading from "./SectionHeading";

const Contact: React.FC<{}> = () => {
  const btn = "press rounded-full font-semibold py-3 px-8";
  return (
    <section id="contact" className="scroll-mt-24 w-full px-6">
      <div className="mx-auto w-full max-w-[700px]">
        <SectionHeading title="CONTACT" />
        <div className="glass rounded-3xl p-8 text-center">
          <p className="text-white text-xl font-semibold tracking-[-0.01em]">
            Let&#39;s build something useful.
          </p>
          <p className="text-gray-300 mt-3 leading-relaxed">
            I&#39;m looking for junior AI / ML / Data / DevOps roles, freelance or
            part-time, remote or on-site. The fastest way to reach me is email.
          </p>
          <div className="mt-6 flex flex-wrap justify-center gap-3">
            <a href={`mailto:${PROFILE.email}`} className={`${btn} text-white bg-gradient-to-r from-purple-600 to-pink-500 hover:opacity-90`}>
              Email me
            </a>
            <a href={PROFILE.linkedin} target="_blank" rel="noopener noreferrer" className={`${btn} text-white border border-white/15 hover:bg-white/10`}>
              LinkedIn
            </a>
            <a href={PROFILE.github} target="_blank" rel="noopener noreferrer" className={`${btn} text-white border border-white/15 hover:bg-white/10`}>
              GitHub
            </a>
            <a href={PROFILE.cv} download className={`${btn} text-white border border-white/15 hover:bg-white/10`}>
              Download CV
            </a>
          </div>
          <p className="text-gray-400 text-sm mt-5">{PROFILE.email}</p>
        </div>
      </div>
    </section>
  );
};

export default Contact;
