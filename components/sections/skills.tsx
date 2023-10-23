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
import { convertToLower } from "@/lib/utils";

export default function Skills() {
    // check when component is in view to set active class to his link
    const {ref} = useSectionInView({section: "Skills", threshold: 0.75});

  const skills_keys = Object.keys(skills) as SkillTabName[];
  const initial_tab_active: SkillTabName = "FrontEnd";
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
    <motion.section ref={ref} className="mb-28 max-w-[53rem] scroll-mt-28 text-center sm:mb-30 " id="skills"
    initial={{ opacity: 0, y: -100 }}
              animate={{ opacity: 1, y: 0 }}
              
              >
      <SectionHeading> Tools and technologies </SectionHeading>
      <div className="p-10 md:flex md:gap-3">
        <ul className="text-center md:text-left flex md:flex-col gap-0 md:gap-0 md:basis-1/4 text-gray-400 relative font-mono font-medium capitalize">
          {skills_keys &&
            skills_keys.map((name, index) => (
              <li
                onClick={() => {
                  setActiveTab(name);
                }}
                key={name}
                className={clsx("cursor-pointer p-3 relative font-semibold text-sm md:text-base", {
                  "text-gray-900 dark:text-white": name == activeTab,
                })}
              >
                <span>{name} </span>

                <span
                  className={clsx(
                    "rounded-full absolute left-0 bottom-0 md:top-0 w-full h-1 md:w-1 md:h-full z-10",
                    {
                      "bg-gray-900 dark:bg-white": name === activeTab,
                      "bg-gray-100 dark:bg-gray-600": name != activeTab,
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
              <ul className="flex flex-wrap justify-center gap-3 md:gap-4 text-md text-gray-500">
                {currentContent &&
                  currentContent.map((skill, index) => (
                    <motion.li
                        initial={{ opacity: 0, y: -10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: false }}
                        transition={{ duration: 0.75, delay: index * 0.05 }}
                      key={index}
                      className="bg-white borderBlack text-center flex justify-center flex-col items-center rounded-xl font-mono shadow-sm px-3 py-2 md:px-6 md:py-2 dark:bg-white/10 dark:text-white/80"
                    >
                      {" "}
                      <Image 
                      alt={skill.name} 
                      src={`/img/logos/${convertToLower(skill.name)}.png`} 
                      width={250}
                      height={250}
                      quality="95"
                      className="h-14 w-14 object-cover mb-2 aspect-square"
                      />
                      <span className="m-t-2 text-xs md:text-sm">{skill.name}</span>
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
