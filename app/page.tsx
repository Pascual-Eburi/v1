"use client";
import Intro from "@/components/sections/intro";
import SectionDivider from "@/components/section-divider";
import About from "@/components/sections/about";
import Projects from "@/components/sections/projects";
import Skills from "@/components/sections/skills";
import Contact from "@/components/sections/contact";
import { useEffect, useState } from "react";
import Loader from "@/components/loader";

export default function Home() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const hash = window.location.hash ?? "#home";
    /*     let activeSection = document.querySelector(
      `[href="${hash}"]`
    ) as HTMLAnchorElement;

    if (!activeSection) {
      activeSection = document.querySelector(
        ".activeSection"
      ) as HTMLAnchorElement;
    }

    activeSection.click(); */
    setMounted(true);
  }, []);

  if (!mounted) {
    return <Loader />;
  }
  return (
    <main className="flex flex-col items-center px-4">
      <Intro />
      <SectionDivider />
      <About />
      <Projects />
      <Skills />
      <Contact />
    </main>
  );
}
