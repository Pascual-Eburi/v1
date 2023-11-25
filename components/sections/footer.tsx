"use client";
import { useLanguageContext } from "@/context/languageContext";
import { BsFillHeartFill } from "react-icons/bs";

export default function Footer() {
  const { t } = useLanguageContext("footer");
  const year = new Date().getFullYear();
  return (
    <footer className="mb-10 px-4 text-center text-gray-500">
      <small className="mb-2 block text-xs">&copy; {year} Pascual Eburi.</small>
      <p className="text-xs text-center">
        <span className="font-semibold">{t("about-site")}</span>
        <span className="flex w-full align-center justify-center  text-center">
          {t("made-with")}{" "}
          <span className="mx-2">
            <BsFillHeartFill color="#f87171" />{" "}
          </span>
          {t("build-with")}
        </span>
      </p>
    </footer>
  );
}
