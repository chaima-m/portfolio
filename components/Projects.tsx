import React from "react";
import { PROJECTS, OTHER_WORK } from "@/constant";
import SectionHeading from "./SectionHeading";

const cardClass =
  "glass hover-lift press h-full flex flex-col rounded-3xl p-6 hover:-translate-y-1 hover:border-purple-400/60";

const Projects: React.FC<{}> = () => {
  return (
    <section id="projects" className="scroll-mt-24 w-full px-6">
      <div className="mx-auto w-full max-w-[1000px]">
        <SectionHeading title="PROJECTS" />

        <div className="grid gap-5 md:grid-cols-2">
          {PROJECTS.map((p) => {
            const body = (
              <>
                <div className="flex items-start justify-between gap-3">
                  <p className="text-white font-semibold text-lg leading-snug tracking-[-0.01em]">
                    {p.title}
                  </p>
                  {p.featured && (
                    <span className="shrink-0 text-xs rounded-full px-3 py-1 bg-gradient-to-r from-purple-600 to-pink-500 text-white">
                      Featured
                    </span>
                  )}
                </div>
                <p className="text-gray-400 text-xs mt-1">{p.date}</p>
                <p className="text-gray-300 text-sm leading-relaxed mt-3 flex-1">
                  {p.description}
                </p>
                <div className="flex flex-wrap gap-2 mt-4">
                  {p.tags.map((t) => (
                    <span
                      key={t}
                      className="rounded-full text-gray-200 py-1 px-3 border border-white/10 text-xs"
                    >
                      {t}
                    </span>
                  ))}
                </div>
                {p.github && (
                  <p className="text-sm mt-4 font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">
                    View on GitHub &rarr;
                  </p>
                )}
              </>
            );

            return p.github ? (
              <a
                key={p.title}
                href={p.github}
                target="_blank"
                rel="noopener noreferrer"
                className="block"
              >
                <div className={cardClass}>{body}</div>
              </a>
            ) : (
              <div key={p.title} className="block">
                <div className="glass h-full flex flex-col rounded-3xl p-6">{body}</div>
              </div>
            );
          })}
        </div>

        <div className="glass rounded-3xl p-6 mt-5">
          <p className="text-white font-semibold tracking-[-0.01em]">Other work</p>
          <div className="flex flex-wrap gap-2 mt-4">
            {OTHER_WORK.map((w) => (
              <span key={w} className="rounded-full text-gray-200 py-1 px-3 border border-white/10 text-sm">
                {w}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
