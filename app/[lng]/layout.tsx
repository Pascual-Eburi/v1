import { dir } from "i18next";
import { Analytics } from "@vercel/analytics/react";
import { Toaster } from "react-hot-toast";
import Footer from "@/components/sections/footer";
import "../globals.css";
import { Inter } from "next/font/google";
import ActiveSectionContextProvider from "@/context/activeSectionContext";
import Header from "@/components/header";
import ThemeSwith from "@/components/theme-switch";
import ThemeContextProvider from "@/context/theme-context";
import LanguageSwith from "@/components/language-swith";
import { Languages } from "@/lib/data/languajes";
import { RootLayoutPropsType } from "@/lib/types";
import LanguageContextProvider from "@/context/languageContext";


const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Pascual Eburi | Personal Portfolio",
  description: "Pascual is a full-stack and SysAdmin",
};

export async function generateStaticParams() {
  return Languages.map((language) => ({ lng: language.abbr }));
}

export default function RootLayout({
  children,
  params: { lng },
}: RootLayoutPropsType) {
  return (
    <html lang={lng} dir={dir(lng)}>
      <head>
        <meta name="theme-color" content="#fff"></meta>
      </head>
      <body
        className={`${inter.className}bg-gray-50 text-gray-950 relative pt-28 sm:pt-36 dark:bg-gray-900 dark:text-gray-50 dark:text-opacity-90`}
      >
        <ThemeContextProvider>
          <div className="bg-[#fbe2e3] absolute top-[-6rem] -z-10 right-[11rem] h-[31.25rem] w-[31.25rem] rounded-full blur-[10rem] sm:w-[68.75rem] dark:bg-[#946263]"></div>
          <div className="bg-[#dbd7fb] absolute top-[-1rem] -z-10 left-[-35rem] h-[31.25rem] w-[50rem] rounded-full blur-[10rem] sm:w-[68.75rem] md:left-[-33rem] lg:left-[-28rem] xl:left-[-15rem] 2xl:left-[-5rem] dark:bg-[#676394]"></div>
          <LanguageContextProvider language={lng}>
            <ActiveSectionContextProvider>
              <Header />
              {children}
              <Analytics />
              <Footer />
              <Toaster position="top-right" />
              <ThemeSwith />
              <LanguageSwith />
            </ActiveSectionContextProvider>
          </LanguageContextProvider>
        </ThemeContextProvider>
      </body>
    </html>
  );
}
