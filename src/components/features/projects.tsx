import teste from "@/assets/images/teste.jpg";
import type { Project } from "@/models";

import { ProjectCard } from "./project-card";

const projects: Project[] = [
  {
    id: 1,
    name: "Portfolio Website",
    description: "A personal portfolio website to showcase my work.",
    features: [
      "Responsive design",
      "Dark mode toggle",
      "Smooth scrolling",
      "Project showcase",
    ],
    stack: ["React", "Tailwind CSS", "TypeScript"],
    imageSrc: teste,
  },
  {
    id: 2,
    name: "Portfolio Website",
    description: "A personal portfolio website to showcase my work.",
    features: [
      "Responsive design",
      "Dark mode toggle",
      "Smooth scrolling",
      "Project showcase",
    ],
    stack: ["React", "Tailwind CSS", "TypeScript"],
    imageSrc: teste,
  },
  {
    id: 3,
    name: "Portfolio Website",
    description: "A personal portfolio website to showcase my work.",
    features: [
      "Responsive design",
      "Dark mode toggle",
      "Smooth scrolling",
      "Project showcase",
    ],
    stack: ["React", "Tailwind CSS", "TypeScript"],
    imageSrc: teste,
  },
  {
    id: 4,
    name: "Portfolio Website",
    description: "A personal portfolio website to showcase my work.",
    features: [
      "Responsive design",
      "Dark mode toggle",
      "Smooth scrolling",
      "Project showcase",
    ],
    stack: ["React", "Tailwind CSS", "TypeScript"],
    imageSrc: teste,
  },
  {
    id: 5,
    name: "Portfolio Website",
    description: "A personal portfolio website to showcase my work.",
    features: [
      "Responsive design",
      "Dark mode toggle",
      "Smooth scrolling",
      "Project showcase",
    ],
    stack: ["React", "Tailwind CSS", "TypeScript"],
    imageSrc: teste,
  },
];

export function Projects() {
  return (
    <section id="projects" className="container mx-auto py-36">
      <h2 className="text-center mb-20 tracking-tight text-6xl text-balance">
        My Projects
      </h2>

      <div className="flex">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </section>
  );
}
