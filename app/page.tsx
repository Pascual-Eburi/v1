import Intro from "@/components/sections/intro";
import SectionDivider from "@/components/section-divider";
import About from "@/components/sections/about"
import Projects from "@/components/sections/projects";
import Skills from "@/components/sections/skills";
import Experiences from "@/components/sections/experiences";
import Contact from "@/components/sections/contact";


export default function Home() {
  return (
    <main className="flex flex-col items-center px-4">
        <Intro />
        <SectionDivider />
        <About />
        <Projects />
         <Skills /> 
        <Experiences />
        <Contact />
    </main>
  )
}
