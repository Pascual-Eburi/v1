
import HomeAutomatricula from "@/public/img/projects/automatricula/home.png";
import HomeApiAutomatricula from "@/public/img/projects/api-automatricula/api.png";
import HomePharma from "@/public/img/projects/pharma/home.png";


// projects data
export const projectsData = [
    {
      title: "Automatricula",
      description:
        "I worked as a full-stack developer on this startup project for 2 years. Users can give public feedback to companies.",
      tags: ["React", "Next.js", "MongoDB", "Tailwind", "Prisma"],
      imageUrl: HomeAutomatricula,
    },
    {
      title: "rmtDev",
      description:
        "Job board for remote developer jobs. I was the front-end developer. It has features like filtering, sorting and pagination.",
      tags: ["React", "TypeScript", "Next.js", "Tailwind", "Redux"],
      imageUrl: HomeApiAutomatricula,
    },
    {
      title: "Word Analytics",
      description:
        "A public web app for quick analytics on text. It shows word count, character count and social media post limits.",
      tags: ["React", "Next.js", "SQL", "Tailwind", "Framer"],
      imageUrl: HomePharma,
    },
  ] as const;