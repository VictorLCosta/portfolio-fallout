import type { Project } from "@/models";

import { PixelLoadingImage } from "../ui/pixalated-image";

type ProjectCardProps = {
  project: Project;
};

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <div>
      <div></div>
      <div>
        <h3>{project.name}</h3>
      </div>
    </div>
  );
}
