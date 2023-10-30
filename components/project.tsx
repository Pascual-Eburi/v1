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
      className="flex flex-col-reverse group [&:not(:last-of-type)]:mb-[100px] relative md:grid gap-[10px] md:grid-rows-6 md:grid-cols-12 items-center  shadow-2xl md:shadow-none"
    >
      <div className="flex flex-wrap flex-col relative md:row-[1/-1] md:group-odd:col-[1/7] text-left md:group-odd:text-left md:group-even:col-[7/-1] md:group-even:text-right px-8 pb-9 md:px-0 md:pb-0">
        <div className="md:block my-4 md:my-0 flex flex-row-reverse items-center justify-between">
          <div className="project-label font-mono text-teal-400">
            Featured Project
          </div>
          <h4 className="project-title text-[1.4rem] md:mt-[10px] ml-[0] md:mb-[30px] dark:text-white/80 text-gray-600 font-bold">
            {title}
          </h4>
        </div>
        <div className="project-details text-[15px] text-[#eee] leading-[1.5] ">
          <p className="relative md:p-[25px] mb-4 md:mb-0 z-[2] text-[16px] transition-all duration-[0.25s] ease-[cubic-bezier(0.645,0.045,0.355,1)] rounded-[4px] md:bg-gray-50 md:dark:bg-[#112240] dark:text-[#a8b2d1] text-gray-500 md:shadow-xl">
            {description}
          </p>
          <ul className="flex mt-[10px] flex-wrap">
            {tags.map((tag, index) => (
              <li
                className="mr-[20px] dark:text-[#aaa] text-gray-500 font-mono"
                key={index}
              >
                {tag}
              </li>
            ))}
          </ul>
          <div className="project-links flex items-center relative mt-[10px] dark:text-[#ccd6f6] text-slate-400 justify-end md:group-odd:justify-start md:group-odd:ml-0 md:group-odd:mr-[10px] md:group-even:justify-end md:group-even:mr-[10px] md:group-even:ml-0 ">
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
      </div>

      <div className="relative z-[-1] rounded-[2px] md:row-[1/-1] md:group-odd:col-[6/-1] md:group-even:col-[1/-6] before:content-[''] before:abosolute before:w-full before:h-full before:top-0 before:left-0 before:right-0 before:bottom-0 before:z-[3] before:bg-[#0a192f] before:mix-blend-screen before:rounded-[2px] bg-transparent  md:bg-gradient-to-r md:to-[#d5e2f6]  md:from-[#578cdb] md:dark:from-[#578cdb] md:dark:to-[#163769] group-hover:scale-100 transition duration-[0.1s] group-hover:to-[#fff] group-hover:from-white">
        <Image
          alt="Project I worked on"
          src={imageUrl}
          className="max-w-full w-full h-full align-middle aspect-video rounded-[2px] relative mix-blend-multiply md:grayscale-[100] contrast-[1] brightness-[90%] md:brightness-100 shadow-none group-hover:grayscale-0 "
        />
      </div>
    </motion.li>
  );
}
