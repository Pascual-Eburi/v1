import { Languages } from "@/lib/data/languajes";

export const defaultNS = 'translation'
export const fallbackLng = 'en';
export const cookieName = 'i18next';
export const languages = Languages.map((language) => (language.abbr ));


export function getOptions (lng = fallbackLng, ns = defaultNS) {
  return {
    // debug: true,
    supportedLngs: languages,
    fallbackLng,
    lng,
    fallbackNS: defaultNS,
    defaultNS,
    ns
  }
}