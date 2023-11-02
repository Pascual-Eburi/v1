"use client";

import { skills } from "@/lib/data/skills";
import SectionHeading from "../section-heading";
import { useEffect, useState } from "react";
import { clsx } from "clsx";
import { Skill, SkillTabName, Skills } from "@/lib/types";
import Image from "next/image";

import { motion } from "framer-motion";
import useSectionInView from "@/lib/hooks/useSectionInView";
import { convertToLower } from "@/lib/utils";

export default function Skills() {
  // check when component is in view to set active class to his link
  const { ref } = useSectionInView({ section: "Skills", threshold: 0.75 });

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
    <motion.section
      ref={ref}
      className="mb-28 max-w-[53rem] scroll-mt-28 text-center sm:mb-30 "
      id="skills"
      initial={{ opacity: 0, y: -100 }}
      animate={{ opacity: 1, y: 0 }}
    >
      <SectionHeading>
        <span className="text-teal-400 block text-center text-sm">
          Tools &amp;
        </span>
        technologies
      </SectionHeading>
      <div className="p-10 md:flex md:gap-3">
        <ul className="text-center md:text-right flex justify-center md:flex-col gap-0 md:gap-0 md:basis-1/4 text-gray-400 relative font-medium">
          {skills_keys &&
            skills_keys.map((name, index) => (
              <li
                onClick={() => {
                  setActiveTab(name);
                }}
                key={name}
                className={clsx(
                  "cursor-pointer p-3 relative font-bold text-[.7rem] m-0 dark:text-white/30",
                  {
                    "text-gray-900 dark:text-white/90 md:bg-gradient-to-r md:from-[transparent]  md:to-gray-100 md:dark:from-[transparent] md:dark:to-[#163769] ":
                      name == activeTab,
                  }
                )}
              >
                <span className="capitalize">{name} </span>

                <span
                  className={clsx(
                    "absolute right-0 bottom-0 md:top-0 w-full h-1 md:w-1 md:h-full z-10 m-0 p-0",
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
                      className="bg-white text-center flex justify-center flex-col items-center rounded-2xl font-mono shadow-sm border-2 dark:shadow-2xl  px-3 md:px-6 py-2  md:py-2 dark:bg-[#141528]/70 dark:text-white/80 dark:hover:bg-[#1d1e35] dark:border-4 border-dashed dark:border-[#1d1e35] transition duration-100 hover:scale-105"
                    >
                      {" "}
                      <Image
                        alt={skill.name}
                        src={`/img/logos/${convertToLower(skill.name)}.png`}
                        width={250}
                        height={250}
                        quality="95"
                        priority={true}
                        className={`h-14 w-14 object-contain mb-2 aspect-square !max-w-[40px] !max-h-[40px] ${convertToLower(
                          skill.name
                        )}-logo`}
                      />
                      <span className=" m-t-2 text-xs md:text-sm">
                        {skill.name}
                      </span>
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
