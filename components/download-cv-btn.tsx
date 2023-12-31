import { Fragment } from "react";
import { Menu, Transition } from "@headlessui/react";
import { HiDownload } from "react-icons/hi";
import Image from "next/image";
import { Languages } from "@/lib/data/languajes";
import { useLanguageContext } from "@/context/languageContext";

export default function DownloadCVButton() {
  const { t } = useLanguageContext("download-cv");
  return (
    <Menu as="div" className="relative inline-block text-left">
      <div>
        <Menu.Button className="group bg-white px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-95 active:scale-105 transition cursor-pointer borderBlack dark:bg-white/10">
          {t("download-cv")}
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
        <Menu.Items className="absolute right-0 !z-20 mt-2 w-max origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none dark:bg-gray-700">
          <div className="py-1">
            {Languages.map((lang, index) => (
              <Fragment key={index}>
                <Menu.Item>
                  {({ active }) => (
                    <a
                      href={`/docs/CV/${lang.abbr}/resume.pdf`}
                      download
                      className={
                        "flex items-center hover:bg-gray-100 gap-2 px-4 py-2 text-sm text-gray-700 dark:text-white/80 dark:hover:bg-white/10 dark:focus:bg-white/10"
                      }
                    >
                      <Image
                        width="90"
                        height="90"
                        src={lang.img}
                        alt={lang.name}
                        className="w-[1rem] h-[1rem] object-cover"
                      />

                      <span>{t(lang.abbr)}</span>
                    </a>
                  )}
                </Menu.Item>
              </Fragment>
            ))}
          </div>
        </Menu.Items>
      </Transition>
    </Menu>
  );
}
