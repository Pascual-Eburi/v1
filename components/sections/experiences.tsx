"use client";
import "react-vertical-timeline-component/style.min.css"; 

import React from "react";
import { experiencesData } from "@/lib/data/experiences";
import SectionHeading from "../section-heading";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import useSectionInView from "@/lib/hooks/useSectionInView";
import { useThemeContext } from "@/context/theme-context";


export default function Experiences() {
  const { theme } = useThemeContext();
  const {ref} = useSectionInView({section: "Experience", threshold: 0.75});
  return (
    <section id="experience"  ref={ref} className="scroll-mt-28 mb-28 sm:mb-40">
      <SectionHeading> My Experiences</SectionHeading>
      <VerticalTimeline lineColor="">
        {experiencesData.map((item, index) => (
          <React.Fragment key={index}>
            <VerticalTimelineElement
            className=""
              contentStyle={{
                background:
                  theme === "light" ? "#f3f4f6" : "rgba(255, 255, 255, 0.05)",
                boxShadow: "none",
                border: "1px solid rgba(0, 0, 0, 0.05)",
                textAlign: "left",
                padding: "1.3rem 2rem",
              }}
              contentArrowStyle={{
                borderRight:
                  theme === "light"
                    ? "0.4rem solid #9ca3af"
                    : "0.4rem solid rgba(255, 255, 255, 0.05)",
              }}
              date={item.date}
              icon={item.icon}
              iconStyle={{
                background:
                  theme === "light" ? "white" : "rgba(255, 255, 255, 0.02)",
                fontSize: "1.5rem",
                zIndex: 1,
                /* boxShadow: theme === "light" 
                  ? "inherit" 
                  : "0px 36px 89px rgb(0 0 0/4%),0px 23.3333px 52.1227px rgba(0,0,0,.03),0px 13.8667px 28.3481px rgba(0,0,0,.024),0px 7.2px 14.4625px rgb(0 0 0/2%),0px 2.93333px 7.25185px rgba(0,0,0,.016),0px 0.666667px 3.50231px rgba(0,0,0,.01);" */
              }}
            >
              <h3 className="font-semibold capitalize">{item.title}</h3>
              <p className="font-normal !mt-0">{item.location}</p>
              <p className="!mt-1 !font-normal text-gray-700 dark:text-white/75">
                {item.description}
              </p>
            </VerticalTimelineElement>
          </React.Fragment>
        ))}
      </VerticalTimeline>
    </section>
  );
}
