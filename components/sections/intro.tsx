/* eslint-disable react-hooks/exhaustive-deps */
"use client";

import Image from "next/image";
import portraitPhoto from "@/public/img/portrait.jpg";

import { motion } from "framer-motion";
import { BsArrowRight, BsLinkedin } from "react-icons/bs";
import { FaGithubSquare } from "react-icons/fa";
import Link from "next/link";
import useSectionInView from "@/lib/hooks/useSectionInView";
import { useActiveSectionContext } from "@/context/activeSectionContext";
import DownloadCVButton from "../download-cv-btn";
import React from "react";
import { useLanguageContext } from "@/context/languageContext";

export default function Intro() {
  const { t } = useLanguageContext("intro");
  const { setActiveSection, setTimeOfLastClick } = useActiveSectionContext();
  const { ref } = useSectionInView({ section: "Home", threshold: 0.5 });

  return (
    <section
      ref={ref}
      id="home"
      className="mb-28 max-w-[50rem] text-center sm:mb-0 scroll-mt-[100rem]"
    >
      <div className="flex items-center justify-center">
        <div className="relative">
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              type: "tween",
              duration: 0.2,
            }}
          >
            <Image
              src={portraitPhoto}
              alt="Pascual portrait"
              width={300}
              height={300}
              quality="95"
              priority={true}
              className="h-24 w-24 rounded-full object-cover border-[0.35rem] border-white shadow-xl"
            />
          </motion.div>
          <motion.span
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              type: "spring",
              stiffness: 125,
              delay: 0.1,
              duration: 0.7,
            }}
            className="absolute bottom-0 right-0 text-4xl"
          >
            👋
          </motion.span>
        </div>
      </div>
      <motion.h1
        className="mb-10 mt-4 px-4 text-2xl font-medium !leading-[1.5] sm:text-4xl"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <span dangerouslySetInnerHTML={{ __html: t("greeting") }} />
        <span dangerouslySetInnerHTML={{ __html: t("role") }} />
        <span dangerouslySetInnerHTML={{ __html: t("passion") }} />
        <span dangerouslySetInnerHTML={{ __html: t("focus") }} />
      </motion.h1>

      <motion.div
        className="flex flex-col sm:flex-row items-center justify-center gap-2 px-4 text-lg font-medium"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.1,
        }}
      >
        <Link
          href="#contact"
          className="group bg-gray-900 text-white px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-95 hover:bg-gray-950 active:scale-105 transition"
          onClick={() => {
            setActiveSection("Contact");
            setTimeOfLastClick(Date.now());
          }}
        >
          {t("contact")}{" "}
          <BsArrowRight className="opacity-70 group-hover:translate-x-1 transition" />
        </Link>

        <DownloadCVButton />

        <div className="flex items-center justify-center gap-2">
          <a
            className="bg-white p-4 text-gray-700 hover:text-gray-950 flex items-center gap-2 rounded-full focus:scale-[1.15] hover:scale-[1.15] active:scale-105 transition cursor-pointer borderBlack dark:bg-white/10 dark:text-white/60"
            href="https://www.linkedin.com/in/pascualeburi/"
            target="_blank"
            aria-label="LinkedIn Profile"
            id="LinkedInProfile"
          >
            <BsLinkedin />
          </a>

          <a
            className="bg-white p-4 text-gray-700 flex items-center gap-2 text-[1.35rem] rounded-full focus:scale-[1.15] hover:scale-[1.15] hover:text-gray-950 active:scale-105 transition cursor-pointer borderBlack dark:bg-white/10 dark:text-white/60"
            href="https://github.com/Pascual-Eburi"
            target="_blank"
            aria-label="GitHub Profile"
          >
            <FaGithubSquare />
          </a>
        </div>
      </motion.div>
    </section>
  );
}
