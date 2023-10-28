/* eslint-disable react-hooks/exhaustive-deps */
"use client";

import React from "react"
import { projectsData } from "@/lib/data/projects";
import SectionHeading from "../section-heading";
import Project from "../project";
import useSectionInView from "@/lib/hooks/useSectionInView";

export default function Projects (){
    // check when component is in view to set active class to his link
    const {ref} = useSectionInView({section: "Projects", threshold: 0.45});

    return (
        <section ref={ref} id="projects" className="scroll-mt-28 mb-28">
            <SectionHeading> My Projects </SectionHeading>
            <ul className="project-container">
                {projectsData.map((project, index) => (
                    <React.Fragment key={index}>
                        <Project {...project} />
                    </React.Fragment>
                ))}
            </ul>
        </section>
    );
}