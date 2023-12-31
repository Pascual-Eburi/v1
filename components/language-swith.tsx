"use client";

import { Fragment, useEffect, useState } from "react";
import { Menu, Transition } from "@headlessui/react";
import Image from "next/image";
import { Languages } from "@/lib/data/languajes";
import type { Language } from "@/lib/types";
import Link from "next/link";
import { useLanguageContext } from "@/context/languageContext";

export default function LanguageSwith() {
  const { lng, t } = useLanguageContext("languages");
  const [mounted, setMounted] = useState(false);

  const fallBackLanguage = Languages[0] as Language;
  const initialLanguage: Language | undefined = Languages.find(
    (option) => option.abbr === lng
  );

  const [language, setLanguage] = useState<Language>(
    initialLanguage ?? fallBackLanguage
  );

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return;
  }
  return (
    <div className="fixed bottom-5 left-[3rem] ">
      <Menu as="div" className="relative inline-block text-left">
        <div>
          <Menu.Button className="group shadow-2xl bg-opacity-80 backdrop-blur-[0.5rem] border rounded-full bg-white border-white border-opacity-40 dark:bg-slate-800 dark:border-slate-800 px-5 py-1 flex items-center gap-2  outline-none focus:scale-110 hover:scale-95 active:scale-105 transition cursor-pointer text-xs">
            <Image
              width="90"
              height="90"
              src={language.img}
              alt={language.name}
              className="w-[1rem] h-[1rem] object-cover"
            />
            {language.abbr.toLocaleUpperCase()}
          </Menu.Button>
        </div>

        <Transition
          as={Fragment}
          enter="transition ease-out duration-100"
          enterFrom="transform opacity-0 scale-95"
          enterTo="transform opacity-100 scale-100"
          leave="transition ease-in duration-75"
          leaveFrom="transform opacity-100 scale-100"
          leaveTo="transform opacity-0 scale-95"
        >
          <Menu.Items className="absolute right-0 -top-[5.2rem] !z-10 mt-2 w-max origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none dark:bg-gray-700">
            <div className="py-1">
              {Languages.filter((l) => lng !== l.abbr).map((lang, index) => (
                <Fragment key={index}>
                  <Menu.Item>
                    {({ active }) => (
                      <Link
                        onClick={() => {
                          setLanguage(lang);
                        }}
                        href={`/${lang.abbr}`}
                        className={`flex items-center hover:bg-gray-100 gap-2 px-4 py-2 text-xs text-gray-700 dark:text-white/80 dark:hover:bg-white/10 dark:focus:bg-white/10 ${
                          lang.name === language.name && "bg-gray-800 font-bold"
                        }`}
                      >
                        <Image
                          width="90"
                          height="90"
                          src={lang.img}
                          alt={lang.name}
                          className={`w-[1rem] h-[1rem] object-cover`}
                        />

                        <span>{t(lang.abbr)} </span>
                      </Link>
                    )}
                  </Menu.Item>
                </Fragment>
              ))}
            </div>
          </Menu.Items>
        </Transition>
      </Menu>
    </div>
  );
}
