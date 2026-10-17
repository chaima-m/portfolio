import React from "react";
import { PROFILE } from "@/constant";

const Footer: React.FC<{}> = () => (
  <footer className="w-full pb-10">
    <p className="text-gray-500 text-center text-xs px-6">
      &copy; {new Date().getFullYear()} Chaima Mekhloufi &middot; {PROFILE.location} &middot; Built with Next.js
    </p>
  </footer>
);

export default Footer;
