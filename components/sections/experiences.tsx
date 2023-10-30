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
  const { ref } = useSectionInView({ section: "Experience", threshold: 0.75 });
  return (
    <section id="experience" ref={ref} className="scroll-mt-28 mb-28 sm:mb-40">
      <SectionHeading>
        <span className="text-purple-400 block text-center text-sm">My</span>
        Experiences
      </SectionHeading>
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
                background: theme === "light" ? "white" : "#1D2432", //"rgba(255, 255, 255, 0.02)",
                fontSize: "1.5rem",
                zIndex: 1,
                boxShadow:
                  theme === "light"
                    ? // boxShadow: 0 0 0 4px #fff, inset 0 2px 0 rgba(0,0,0,.08), 0 3px 0 4px rgba(0,0,0,.05)"
                      "0 0 0 4px #fff, inset 0 2px 0 rgba(0,0,0,.08), 0 3px 0 4px rgba(0,0,0,.05)"
                    : "0 0 0 4px #1D2432, inset 0 2px 0 #1D2432, 0 3px 0 4px #1D2432",
              }}
            >
              <h3 className="font-semibold capitalize">{item.title}</h3>
              <p className="font-normal !mt-0 italic text-gray-500 dark:text-white/25">
                {item.location}
              </p>
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
