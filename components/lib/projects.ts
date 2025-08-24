// lib/projects.ts
export type Project = {
  title: string;
  description: string;
  image: string;
  tags: string[];
  link?: string;
  repo?: string;
};

export const projects: Project[] = [
  {
    title: "Project 1",
    description: "A project description",
    image: "/project1.jpg",
    tags: ["Next.js", "TypeScript"],
    link: "https://project1.com",
    repo: "https://github.com/yourname/project1",
  },
  {
    title: "Project 2",
    description: "Another project description",
    image: "/project2.jpg",
    tags: ["React", "Tailwind"],
    link: "https://project2.com",
    repo: "https://github.com/yourname/project2",
  },
];
