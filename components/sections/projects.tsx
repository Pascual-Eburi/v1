/* eslint-disable react-hooks/exhaustive-deps */
"use client";
import React from "react";
import { FeaturedProjects } from "@/lib/data/projects";
import SectionHeading from "../section-heading";
import Project from "../project";
import useSectionInView from "@/lib/hooks/useSectionInView";
import OtherNotableProjects from "../otherNotableProjects";

export default function Projects() {
  // check when component is in view to set active class to his link
  const { ref } = useSectionInView({ section: "Projects", threshold: 0.2 });

  return (
    <section ref={ref} id="projects" className="scroll-mt-28 mb-28">
      <SectionHeading>
        <span className="text-[#CC7AFF] block text-center text-sm">
          {" "}
          Some of{" "}
        </span>
        My Projects
      </SectionHeading>

      <ul className="max-w-[1000px] mx-auto my-[50px] ">
        {FeaturedProjects &&
          FeaturedProjects.map((project, index) => (
            <React.Fragment key={index}>
              <Project {...project} />
            </React.Fragment>
          ))}
      </ul>

      <OtherNotableProjects />
    </section>
  );
}
