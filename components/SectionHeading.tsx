import React from "react";

const SectionHeading: React.FC<{ title: string }> = ({ title }) => (
  <div className="flex flex-col items-center text-center pb-8">
    <h2 className="text-white font-semibold text-5xl md:text-6xl leading-[1.05] tracking-[-0.03em]">
      {title}
    </h2>
    <p className="mt-3 tracking-[0.5em] text-transparent font-light bg-clip-text bg-gradient-to-r from-purple-500 to-pink-400 text-sm">
      EXPLORE NOW
    </p>
  </div>
);

export default SectionHeading;
