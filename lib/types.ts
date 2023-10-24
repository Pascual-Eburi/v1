import {links} from "@/lib/data/links"
import { projectsData } from "./data/projects"
import { skills } from "./data/skills"

// type for section heading props
export type SectionHeadingProps = {
    children : React.ReactNode
}
// type for links
export type SectionName = (typeof links[number]["name"])

// type for projects
export type ProjectProps = (typeof projectsData)[number]

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

// PendingProvider types ActiveSectionContextProviderProps
export type PendingProviderProps = {
    children : React.ReactNode
}

export type PendingContextType = {
    pending: boolean,
    setPending: React.Dispatch<React.SetStateAction<boolean>>
}

// types for theme
export type Theme = "light" | "dark";

// theme context provider props type
export type ThemeContextProviderProps = {
    children: React.ReactNode
}

// type for themecontext
export type ThemeContextType = {
    theme: Theme,
    setTheme: React.Dispatch<React.SetStateAction<Theme>>,
    toggleTheme: () => void;
}