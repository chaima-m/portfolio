import React from "react";
import { EXPERIENCES } from "@/constant";
import SectionHeading from "./SectionHeading";

const Experience: React.FC<{}> = () => {
  return (
    <section id="experience" className="scroll-mt-24 w-full px-6">
      <div className="mx-auto w-full max-w-[900px]">
        <SectionHeading title="EXPERIENCE" />

        <div className="flex flex-col gap-6">
          {EXPERIENCES.map((exp) => (
            <div key={exp.role + exp.date} className="glass rounded-3xl p-6 md:p-8">
              <div className="flex flex-col md:flex-row md:items-baseline md:justify-between gap-1">
                <p className="text-white font-semibold text-lg tracking-[-0.01em]">
                  {exp.role}
                </p>
                <p className="text-gray-400 text-sm">
                  {exp.date} &middot; {exp.place}
                </p>
              </div>
              <p className="text-purple-300 text-sm mt-1">{exp.company}</p>

              <ul className="list-disc pl-5 text-gray-300 mt-4 flex flex-col gap-2 text-sm md:text-base leading-relaxed">
                {exp.points.map((p) => (
                  <li key={p}>{p}</li>
                ))}
              </ul>

              <div className="flex flex-wrap gap-2 mt-5">
                {exp.tags.map((t) => (
                  <span
                    key={t}
                    className="rounded-full text-gray-200 py-1 px-3 border border-white/10 text-xs"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
