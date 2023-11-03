import React from "react";
import { motion } from "framer-motion";
import type { OtherNotableProjectsProps } from "@/lib/types";
import { IconFolder } from "./icons";

export default function NotableProject({
  title,
  description,
  tags,
  links,
}: OtherNotableProjectsProps) {
  return (
    <motion.li
      initial={{ opacity: 0, y: -10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false }}
      transition={{ duration: 0.75, delay: 0.05 }}
      className="relative cursor-pointer"
    >
      <div className="group relative h-full flex flex-col items-start justify-between py-[2rem] px-[1.75rem] overflow-auto transition-all rounded-[4px] dark:hover:bg-[#112240] dark:bg-[#0a192f] bg-gray-50 shadow-sm dark:shadow-[0_10px_30px_-15px_rgba(2,12,27,0.7)]  hover:-translate-y-2.5  duration-75">
        <header>
          <div className="flex justify-between items-center mb-[30px]">
            <div className="text-sky-400 dark:text-sky-600  ">
              <IconFolder className="w-[40px] h-[40px]" />
            </div>
            <div className="dark:text-[#a8b2d1] text-slate-400 justify-end ">
              {links.map((link, index) => (
                <a
                  key={index}
                  href={link.url}
                  aria-label={`${link.name} Link`}
                  target="_blank"
                  title={link.name}
                  rel="noopener noreferrer"
                  className="text-2xl rounded-full focus:scale-[1.15] hover:scale-[1.15] active:scale-105 transition cursor-pointer hover:opacity-[.5] "
                >
                  {link.icon}
                </a>
              ))}
            </div>
          </div>
          <h3 className="mb-[10px] text-gray-700 dark:text-[#ccd6f6] text-[22px] font-sans font-medium  group-hover:text-sky-400  dark:group-hover:text-sky-600">
            <a href={links[0].url} target="_blank" rel="noopener noreferrer">
              {title}
            </a>
          </h3>
          <div className="dark:text-[#a8b2d1] text-gray-500 text-[17px] ">
            <p>{description}</p>
          </div>
        </header>
        <footer>
          <ul className="flex mt-[20px] flex-wrap gap-2">
            {tags.map((tag, index) => (
              <li
                className="dark:text-[#aaa] text-zinc-600 font-mono text-[12px] leading-[1.5] "
                key={index}
              >
                {tag}
              </li>
            ))}
          </ul>
        </footer>
      </div>
    </motion.li>
  );
}
