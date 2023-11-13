import { useLanguageContext } from "@/context/languageContext";
import React from "react";

type ShowProjectsButtonProps = {
  buttonRef?: React.MutableRefObject<HTMLButtonElement | null> | null;
  onClick: () => void;
  showMore: boolean;
};

export default function ShowProjectsButton({
  buttonRef,
  onClick,
  showMore,
}: ShowProjectsButtonProps) {
  const { t } = useLanguageContext("other-notable-projects");

  return (
    <button
      ref={buttonRef}
      onClick={onClick}
      type="button"
      className="mx-auto group bg-white px-6 py-2 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-95 active:scale-105 transition cursor-pointer border-2 dark:bg-transparent border-sky-600 border-solid text-[13px]"
    >
      {showMore ? t("show-more") : t("show-less")}
    </button>
  );
}
