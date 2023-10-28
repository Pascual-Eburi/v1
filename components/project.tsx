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
      className="project"
    >
      <div className="project-content">
        <div className="project-label">Featured Project</div>
        <h4 className="project-title">{title}</h4>
        <div className="project-details">
          <p>{description}</p>
          <ul>
            {tags.map((tag, index) => (
              <li key={index}>{tag}</li>
            ))}
          </ul>
          <div className="project-links mt-3">
            {links.map((link, index) => (
              <a
                key={index}
                href={link.url}
                aria-label={`${link.name} Link`}
                target="_blank"
                title={link.name}
                rel="noopener noreferrer"
                className="text-2xl "
              >
                {link.icon}
              </a>
            ))}

          </div>
        </div>
      </div>

      <div className="project-img">
        <Image
          alt="Project I worked on"
          src={imageUrl}
          className="max-w-full w-full align-middle"
        />
      </div>
    </motion.li>
  );
}
