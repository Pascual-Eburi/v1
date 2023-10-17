import {links} from "@/lib/data/links"
import { projectsData } from "./data/projects"

// type for section heading props
export type SectionHeadingProps = {
    children : React.ReactNode
}
// type for links
export type SectionName = (typeof links[number]["name"])

// type for projects
export type ProjectProps = (typeof projectsData)[number]

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
