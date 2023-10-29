"use client";
import type { ProjectProps } from "@/lib/types";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";

export default function Project({
  title,
  description,
  tags,
  imageUrl,
  links,
}: ProjectProps) {
  const ref = useRef<HTMLLIElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0 1", "1.33 1"],
  });

  const scaleProgess = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
  const opacityProgess = useTransform(scrollYProgress, [0, 1], [0.6, 1]);

  return (
    <motion.li
      ref={ref}
      /*        style={{
        scale: scaleProgess,
        opacity: opacityProgess,
      }} */
      className="project group [&:not(:last-of-type)]:mb-[100px] relative grid gap-[10px] grid-rows-6 grid-cols-12 items-center  "
    >
      <div className="project-content relative /* col-[1/7] row-[1/-1] */ group-odd:col-[1/7] group-odd:text-left group-even:col-[7/-1] group-even:text-right">
        <div className="project-label font-mono dark:text-teal-400 text-blue-950">Featured Project</div>
        <h4 className="project-title text-[1.6rem] mt-[10px] ml-[0] mb-[30px] dark:text-[#eee] text-gray-700 font-bold">{title}</h4>
        <div className="project-details text-[15px] text-[#eee] leading-[1.5]">
          <p className="relative p-[25px] z-[2] text-[18px] transition-all duration-[0.25s] ease-[cubic-bezier(0.645,0.045,0.355,1)] rounded-[4px] bg-purple-200 dark:bg-[#112240] text-[#a8b2d1] ">
            {description}
          </p>
          <ul className="flex mt-[10px]">
            {tags.map((tag, index) => (
              <li 
                  className="mr-[20px] text-[#aaa] font-mono"
                  key={index}>{tag}</li>
            ))}
          </ul>
          <div className="project-links flex items-center relative mt-[10px] text-[#ccd6f6] group-odd:justify-start group-odd:ml-0 group-odd:mr-[10px] group-even:justify-end end group-even:mr-[10px] group-even:ml-0 ">
            {links.map((link, index) => (
              <a
                key={index}
                href={link.url}
                aria-label={`${link.name} Link`}
                target="_blank"
                title={link.name}
                rel="noopener noreferrer"
                className="text-2xl rounded-full focus:scale-[1.15] hover:scale-[1.15] active:scale-105 transition cursor-pointer borderBlack hover:opacity-[.5] "
              >
                {link.icon}
              </a>
            ))}

          </div>
        </div>
      </div>

      <div className="project-img relative z-[-1] bg-violet-100 rounded-[2px] row-[1/-1] group-odd:col-[6/-1] group-even:col-[1/-6] before:content-[''] before:abosolute before:w-full before:h-full before:top-0 before:left-0 before:right-0 before:bottom-0 before:z-[3] before:bg-[#0a192f] before:mix-blend-screen before:rounded-[2px] bg-gradient-to-r from-[#fbe2e3]  to-[#dbd7fb] dark:from-[#946263] dark:to-[#676394] ">
        <Image
          alt="Project I worked on"
          src={imageUrl}
          className="max-w-full w-full align-middle rounded-[2px] relative mix-blend-multiply grayscale-[100] contrast-[1]"
        />
      </div>
    </motion.li>
  );
}
