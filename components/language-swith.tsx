"use client";

import { Fragment, useState } from "react";
import { Menu, Transition } from "@headlessui/react";
import { HiDownload } from "react-icons/hi";
import Image from "next/image";
import { CVLanguages } from "@/lib/data/languajes";

export default function LanguageSwith() {
    const initialLanguage = typeof navigator !== 'undefined' 
                            ? navigator.language.split('-')[0] 
                            : 'en';
    console.log( initialLanguage );
    //const [ language, setLanguage ] = useState( "en" );

  return (
    <div className="fixed bottom-5 left-5">
        <Menu as="div" className="relative inline-block text-left">
        <div>
            <Menu.Button className="group bg-white px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-95 active:scale-105 transition cursor-pointer borderBlack dark:bg-white/10">
            Download CV
            <HiDownload className="opacity-60 group-hover:translate-y-1 transition -mr-1 h-5 w-5 text-gray-400" />
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
            <Menu.Items className="absolute right-0 -top-[11rem] !z-10 mt-2 w-max origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none dark:bg-gray-700">
            <div className="py-1">
                {
                    CVLanguages.map( (lang, index) => (
                        <Fragment key={index}>
                            <Menu.Item>
                            {({ active }) => (
                            <a
                                href={`/docs/CV/${lang.abbr}/resume.pdf`}
                                download
                                className={
                                "flex items-center hover:bg-gray-100 gap-2 px-4 py-2 text-sm text-gray-700 dark:text-white/80 dark:hover:bg-white/10 dark:focus:bg-white/10"}
                            >
                                <Image
                                    width="90"
                                    height="90"
                                    src={lang.img}
                                    alt={lang.name}
                                    className="w-[2rem] h-[2rem] object-cover"
                                />
                            
                                <span>{lang.name} version </span>
                            </a>
                            )}
                        </Menu.Item> 
                        </Fragment>
                    ))
                }
            </div>
            </Menu.Items>
        </Transition>
        </Menu>

    </div>
  );
}
