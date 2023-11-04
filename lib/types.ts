import {links} from "@/lib/data/links"
import { FeaturedProjects, OtherNotableProjects } from "./data/projects"
import { skills } from "./data/skills"
import { StaticImageData } from "next/image";
import { IconBaseProps } from 'react-icons';


export type PagePropsType = {
  params: { lng: LanguageAbbreviation };
};

// type for section heading props
export type SectionHeadingProps = {
    children : React.ReactNode
}
// type for links
export type SectionName = (typeof links[number]["name"])

// type for projects
export type FeaturedProjectProps = (typeof FeaturedProjects)[number]
export type OtherNotableProjectsProps = (typeof OtherNotableProjects)[number]

// skils ---
export type Skill = {
    name: string;
    image: string;
  }
  
export type Skills = {
    'FrontEnd': Skill[];
    'BackEnd': Skill[];
    'Testing': Skill[];
    'Others': Skill[];
}
export type SkillTabName = keyof typeof skills;


/** Language option types */

export type LanguageName = "Spanish" | "English" | "French";
export type LanguageAbbreviation = "es" | "en" | "fr";

export type Language = {
    name: LanguageName,
    img: StaticImageData,
    abbr: LanguageAbbreviation
};

// active section context provider props
export type ActiveSectionContextProviderProps = {
    children: React.ReactNode
}

// active section context type props
export type ActiveSectionContextType = {
    activeSection: SectionName,
    setActiveSection: React.Dispatch<React.SetStateAction<SectionName>>,
    timeOfLastClick: number,
    setTimeOfLastClick: React.Dispatch<React.SetStateAction<number>>
}

// use section in view hook props type
export type useSectionInViewProps = {
    section: SectionName,
    threshold: number
}


// type for contact form validation response
export type validateContactFormDataResponse = {
    validationError: string | boolean
}


// types for theme
export type Theme = "light" | "dark" | "system";

// theme context provider props type
export type ThemeContextProviderProps = {
    children: React.ReactNode
}

// type for themecontext
export type ThemeContextType = {
    theme: Theme | null,
    setTheme: React.Dispatch<React.SetStateAction<Theme>>,
    toggleTheme: (theme: Theme) => void;
    darkQuery: MediaQueryList | null

}


// types for theme 
export type themePropsType = {
    icon: React.FunctionComponentElement<IconBaseProps>;
    text: Theme

}