/* eslint-disable react-hooks/exhaustive-deps */
"use client";
import { motion } from "framer-motion";
import SectionHeading from "../section-heading";
import useSectionInView from "@/lib/hooks/useSectionInView";
import { useLanguageContext } from "@/context/languageContext";

export default function About() {
  const { t } = useLanguageContext("about");
  // check when component is in view to set active class to his link
  const { ref } = useSectionInView({ section: "About", threshold: 0.75 });

  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>
        <span className="text-indigo-400 block text-center text-sm">
          {t("top-heading")}
        </span>
        {t("title")}
      </SectionHeading>
      <p className="mb-3">
        <span dangerouslySetInnerHTML={{ __html: t("first-contact") }} />
        <span dangerouslySetInnerHTML={{ __html: t("after-studies") }} />
        <span
          dangerouslySetInnerHTML={{
            __html: t("favorite-part-of-programming"),
          }}
        />
        <span
          dangerouslySetInnerHTML={{
            __html: t("why-i-love-programming"),
          }}
        />
        <span
          dangerouslySetInnerHTML={{
            __html: t("core-stack"),
          }}
        />
        <span
          dangerouslySetInnerHTML={{
            __html: t("i-am-familiar-with"),
          }}
        />
        <span
          dangerouslySetInnerHTML={{
            __html: t("looking-for"),
          }}
        />

        {/*         I had my first contact with programming when I was studying a degree in{" "}
        <span className="font-medium">
          computer science and business management{" "}
        </span>
        . After that, I decided to pursue my passion for programming and web
        development <span className="font-medium">by learning on my own</span>.{" "}
        <span className="italic">My favorite part of programming</span> is the
        problem-solving aspect. I <span className="underline">love</span> the
        feeling of finally figuring out a solution to a problem. And also, I've
        always loved the fact that I can take an idea in my head and turn it
        into something real through code. My core stack is{" "}
        <span className="font-medium">
          PHP, Python, React, Vue, MySQL and PostgreSQL.
        </span>
        I am also familiar with TypeScript and Java. I am always looking to
        learn new technologies. I am currently looking for a{" "}
        <span className="font-medium">full-time position</span> as a web
        developer (Front o Back). */}
      </p>
    </motion.section>
  );
}
