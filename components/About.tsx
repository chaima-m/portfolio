import React from "react";
import SectionHeading from "./SectionHeading";

const About: React.FC<{}> = () => {
  return (
    <section id="about" className="scroll-mt-24 w-full px-6">
      <div className="mx-auto w-full max-w-[900px]">
        <SectionHeading title="ABOUT ME" />

        <p className="text-gray-300 text-center leading-relaxed">
          I&#39;m a final-year AI &amp; Data Science engineering student at ENSIA
          (Algiers) who builds and ships production-oriented AI systems:
          on-premise LLM deployments, RAG assistants and containerized
          microservice platforms on Docker and Kubernetes.
          <br />
          <br />
          I have solid foundations in Python, NLP, deep learning and
          reinforcement learning, plus Java/Spring Boot backend experience, and
          I&#39;m comfortable on both Linux (advanced Ubuntu, shell, server
          setup) and Windows. I&#39;m open to junior AI / ML / Data / DevOps
          engineering roles, freelance or part-time, remote or on-site.
        </p>

        <div className="mt-10 grid gap-4 md:grid-cols-2 w-full">
          <div className="glass rounded-3xl p-6">
            <p className="text-white font-semibold">Education</p>
            <p className="text-gray-200 text-sm mt-2">
              Engineering Degree, Artificial Intelligence &amp; Data Science
            </p>
            <p className="text-gray-400 text-sm mt-1">
              ENSIA, National Higher School of AI, Algiers &middot; Sep 2022 – Jun 2027
            </p>
          </div>
          <div className="glass rounded-3xl p-6">
            <p className="text-white font-semibold">Achievement &amp; Languages</p>
            <p className="text-gray-200 text-sm mt-2">
              Winner, Smart Cities Ideathon, Alger ESHRA (Feb 2025)
            </p>
            <p className="text-gray-400 text-sm mt-1">
              Arabic: Native &middot; French: C1 &middot; English: B2/C1
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
