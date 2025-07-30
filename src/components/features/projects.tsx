import Lenis from "lenis";
import { useEffect, useRef } from "react";

import teste from "@/assets/teste.jpg";
import type { Project } from "@/models";

import { ProjectCard } from "./project-card";

const projects: Project[] = [
  {
    id: 1,
    name: "Project Example",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    features: ["Feature 1", "Feature 2", "Feature 3"],
    stack: ["React", "TypeScript", "Tailwind CSS"],
    imageSrc: teste,
  },
  {
    id: 2,
    name: "Project Example",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    features: ["Feature 1", "Feature 2", "Feature 3"],
    stack: ["React", "TypeScript", "Tailwind CSS"],
    imageSrc: teste,
  },
  {
    id: 3,
    name: "Project Example",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    features: ["Feature 1", "Feature 2", "Feature 3"],
    stack: ["React", "TypeScript", "Tailwind CSS"],
    imageSrc: teste,
  },
  {
    id: 4,
    name: "Project Example",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    features: ["Feature 1", "Feature 2", "Feature 3"],
    stack: ["React", "TypeScript", "Tailwind CSS"],
    imageSrc: teste,
  },
  {
    id: 5,
    name: "Project Example",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    features: ["Feature 1", "Feature 2", "Feature 3"],
    stack: ["React", "TypeScript", "Tailwind CSS"],
    imageSrc: teste,
  },
];

export function Projects() {
  const scrollWrapper = useRef<HTMLDivElement>(null);
  const scrollContent = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const lenis = new Lenis({
      orientation: "horizontal",
      gestureOrientation: "horizontal",
      content: scrollContent.current || undefined,
      wrapper: scrollWrapper.current || undefined,
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => lenis.destroy(); // Clean up on component unmount
  }, []);

  return (
    <section id="projects" className="relative w-full mx-auto mt-28">
      <h2 className="mb-20 text-center text-4xl text-balance md:mb-36 tracking-tight md:text-6xl">
        My Projects
      </h2>

      <div
        ref={scrollWrapper}
        className="relative container mx-auto flex w-full overflow-x-auto hide-scrollbar"
      >
        <div ref={scrollContent} className="flex">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}
