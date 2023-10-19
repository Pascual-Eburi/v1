"use client";

import { skills } from "@/lib/data/skills";
import SectionHeading from "../section-heading";
import { useEffect, useState } from "react";
import { clsx } from "clsx";
import { Skill, SkillTabName, Skills } from "@/lib/types";
import Image from "next/image";
import python from "@/lib/icons/python.png";

import { motion } from "framer-motion";
import useSectionInView from "@/lib/hooks/useSectionInView";

export default function Skills() {
    // check when component is in view to set active class to his link
    const {ref} = useSectionInView({section: "Skills", threshold: 0.75});

  const skills_keys = Object.keys(skills) as SkillTabName[];
  const initial_tab_active: SkillTabName = "Front-End";
  const [activeTab, setActiveTab] = useState<SkillTabName>(initial_tab_active);
  const [currentContent, setCurrentContent] = useState<Skill[]>(
    skills[activeTab]
  );

  useEffect(() => {
    if (activeTab) {
      const data = skills[activeTab];
      setCurrentContent(data);
    }
  }, [activeTab, currentContent]);

  return (
    <motion.section ref={ref} className="mb-28 max-w-[53rem] scroll-mt-28 text-center sm:mb-40 " id="skills"
    initial={{ opacity: 0, y: -100 }}
              animate={{ opacity: 1, y: 0 }}
              
              >
      <SectionHeading> Tools and technologies </SectionHeading>
      <div className="md:mb-10 md:mt-10 p-10 md:flex md:gap-3">
        <ul className="text-left flex md:flex-col gap-5 md:gap-0 md:basis-1/4 text-gray-400 relative font-mono font-medium capitalize">
          {skills_keys &&
            skills_keys.map((name, index) => (
              <li
                onClick={() => {
                  setActiveTab(name);
                }}
                key={name}
                className={clsx("cursor-pointer p-3 relative font-semibold", {
                  "text-gray-900": name == activeTab,
                })}
              >
                <span>{name} </span>

                <span
                  className={clsx(
                    "rounded-full absolute left-0 top-0 w-1 h-full z-10",
                    {
                      "bg-gray-900": name === activeTab,
                      "bg-gray-100": name != activeTab,
                    }
                  )}
                ></span>
              </li>
            ))}
        </ul>
        <div className="mt-5 md:mt-0 md:basis-3/4">
          {skills_keys.map((name, index) => (
            <motion.div
              key={name + index}
              className={clsx("py-4 px-1 transition", {
                hidden: activeTab != name,
              })}
                
                                
            >
              <ul className="flex flex-wrap justify-center gap-5 text-md text-gray-500">
                {currentContent &&
                  currentContent.map((skill, index) => (
                    <motion.li
                        initial={{ opacity: 0, y: -10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: false }}
                        transition={{ duration: 0.75, delay: index * 0.05 }}
                      key={index}
                      className="bg-white borderBlack text-center flex justify-center flex-col items-center rounded-xl font-mono shadow-sm px-6 py-2 dark:bg-white/10 dark:text-white/80"
                    >
                      {" "}
                      <Image alt={skill.name} src={python} />
                      <span className="m-t-2">{skill.name}</span>
                    </motion.li>
                  ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}
