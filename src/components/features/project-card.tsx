import type { Project } from "@/models";

type ProjectCardProps = {
  project: Project;
};

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <div>
      <div>
        <h3>{project.name}</h3>
      </div>
    </div>
  );
}
