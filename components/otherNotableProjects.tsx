"use client";

import React, { useState } from "react";
import { OtherNotableProjects as otherNotableProjects } from "@/lib/data/projects";
import SectionHeading from "./section-heading";
import NotableProject from "./notableProject";

export default function OtherNotableProjects() {
  const [showMore, setSetMore] = useState(false);
  const GRID_LIMIT = 2;
  const initialShow = otherNotableProjects.slice(0, GRID_LIMIT);
  const projectsToShow = showMore ? otherNotableProjects : initialShow;
  return (
    <div className="mt-[6rem] max-w-[53rem] mx-auto">
      <SectionHeading>
        <span className="text-[#CC7AFF] block text-center text-sm">
          {" "}
          other{" "}
        </span>
        Notable Projects
      </SectionHeading>
      <ul className="list-none p-0 mt-[60px] mb-[50px] mx-0 grid  grid-cols-[repeat(auto-fill,_minmax(300px,_1fr))] gap-[15px] relative lg:grid-cols-[repeat(auto-fill,_minmax(350px,_1fr))] ">
        {projectsToShow.map((project, i) => (
          <React.Fragment key={i}>
            <NotableProject {...project} />
          </React.Fragment>
        ))}
      </ul>

      <button
        onClick={() => setSetMore(!showMore)}
        type="button"
        className=" mx-auto group bg-white px-6 py-2 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-95 active:scale-105 transition cursor-pointer border-2 dark:bg-transparent border-sky-600 border-solid text-[13px] "
      >
        Show {showMore ? "Less" : "More"}
      </button>
    </div>
  );
}
