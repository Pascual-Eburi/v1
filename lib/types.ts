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
    'Front-End': Skill[];
    'Back-End': Skill[];
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
