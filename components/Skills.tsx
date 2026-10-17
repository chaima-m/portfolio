import React from "react";
import { SKILLS, PROFILE } from "@/constant";
import SectionHeading from "./SectionHeading";

const Skills: React.FC<{}> = () => {
  return (
    <section id="skills" className="scroll-mt-24 w-full px-6">
      <div className="mx-auto w-full max-w-[900px]">
        <SectionHeading title="SKILLS" />

        <div className="glass rounded-3xl p-6 md:p-8">
          <div className="grid gap-6 sm:grid-cols-2">
            {SKILLS.map((s) => (
              <div key={s.group}>
                <p className="text-white font-semibold tracking-[-0.01em]">{s.group}</p>
                <div className="flex flex-wrap gap-2 mt-3">
                  {s.items.map((i) => (
                    <span
                      key={i}
                      className="rounded-full text-gray-200 py-1 px-3 border border-white/10 text-sm"
                    >
                      {i}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <p className="text-sm text-gray-400 mt-6">
            The full list is in my{" "}
            <a
              href={PROFILE.cv}
              target="_blank"
              rel="noopener noreferrer"
              className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400 font-semibold"
            >
              CV
            </a>
            .
          </p>
        </div>
      </div>
    </section>
  );
};

export default Skills;