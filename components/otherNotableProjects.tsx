"use client";
import React, { useState, useRef } from "react";
import { OtherNotableProjects as otherNotableProjects } from "@/lib/data/projects";
import SectionHeading from "./section-heading";
import NotableProject from "./notableProject";
import ShowProjectsButton from "./show-projects-btn";

export default function OtherNotableProjects() {
  //const [showMore, setShowMore] = useState(true);
  const listRef = useRef<HTMLUListElement | null>(null);
  const showMoreBtnRef = useRef<HTMLButtonElement | null>(null);
  const projectsPerPage = 2;
  const initialShow = otherNotableProjects.slice(0, projectsPerPage);

  const [visibleProjects, setVisibleProjects] = useState(initialShow);
  let lastItem = null;

  const handleShowMore = () => {
    const currentPage = visibleProjects.length / projectsPerPage;
    const nextProjects = otherNotableProjects.slice(
      currentPage * projectsPerPage,
      (currentPage + 1) * projectsPerPage
    );

    if (nextProjects.length <= 0) {
      return;
    }
    setVisibleProjects((prevProjects) => [...prevProjects, ...nextProjects]);

    lastItem = document.querySelectorAll("#otherProjects > li");
    console.log(lastItem);
    if (showMoreBtnRef.current) {
      showMoreBtnRef.current.scrollIntoView({ behavior: "smooth" });
    }
    //setShowMore(false);
  };

  const handleShowLess = () => {
    const initialShow = otherNotableProjects.slice(0, projectsPerPage);
    setVisibleProjects(initialShow);
    setTimeout(() => {
      if (listRef.current) {
        listRef.current.scrollIntoView({ behavior: "smooth" });
      }
    }, 300);
    return;
    //setShowMore(true);
  };

  return (
    <div className="mt-[6rem] max-w-[53rem] mx-auto">
      <SectionHeading>
        <span className="text-[#CC7AFF] block text-center text-sm">other</span>
        Notable Projects
      </SectionHeading>
      <ul
        ref={listRef}
        className="scroll-mt-[8rem] list-none p-0 mt-[60px] mb-[50px] mx-0 grid grid-cols-[repeat(auto-fill,_minmax(300px,_1fr))] gap-[15px] relative lg:grid-cols-[repeat(auto-fill,_minmax(350px,_1fr))"
        id="otherProjects"
      >
        {visibleProjects.map((project, i) => (
          <React.Fragment key={i}>
            <NotableProject {...project} />
          </React.Fragment>
        ))}
      </ul>

      {visibleProjects.length < otherNotableProjects.length ? (
        <ShowProjectsButton
          buttonRef={showMoreBtnRef}
          onClick={handleShowMore}
          showMore={true}
        />
      ) : (
        <ShowProjectsButton
          buttonRef={null}
          onClick={handleShowLess}
          showMore={false}
        />
      )}
    </div>
  );
}
