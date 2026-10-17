import About from "@/components/About";
import Banner from "@/components/Banner";
import Experience from "@/components/Experience";
import Footer from "@/components/Footer";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Contact from "@/components/Contact";
import Reveal from "@/components/Reveal";

export default function Home() {
  return (
    <main className="relative z-10 w-full bg-[url('/LooperGroup2.png')] bg-no-repeat">
      <div className="flex flex-col items-center gap-24 w-full">
        <Banner />
        <Reveal className="w-full"><About /></Reveal>
        <Reveal className="w-full"><Experience /></Reveal>
        <Reveal className="w-full"><Projects /></Reveal>
        <Reveal className="w-full"><Skills /></Reveal>
        <Reveal className="w-full"><Contact /></Reveal>
        <Footer />
      </div>
    </main>
  );
}
