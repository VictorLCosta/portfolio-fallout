import type { Project } from "@/models";

import { PixelLoadingImage } from "../ui/pixalated-image";

type ProjectCardProps = {
  project: Project;
};

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <div className="relative project-card flex gap-x-4">
      <div className="lg:w-[45%]">
        <PixelLoadingImage src={project.imageSrc} />
      </div>
      <div className="lg:w-[40%]">
        <h3 className="text-lg font-semibold">{project.name}</h3>
        <p className="text-sm text-gray-600">{project.description}</p>
        <ul className="mt-2 space-y-1">
          {project.features.map((feature) => (
            <li key={feature} className="text-sm text-gray-500">
              {feature}
            </li>
          ))}
        </ul>
        <div className="mt-2">
          {project.stack.map((tech) => (
            <span key={tech} className="badge">
              {tech}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
