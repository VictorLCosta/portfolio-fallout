import type { Project } from "@/models";

type ProjectCardProps = {
  project: Project;
};

export function ProjectCard({ project }: ProjectCardProps) {
  const { id, name } = project;

  return (
    <div className="relative size-130">
      <div className="flex items-center justify-between text-white px-4">
        <span className="text-3xl">•••</span>
        <h3 className="uppercase">project [{name}]</h3>
      </div>
      <div className="border-y-2 border-y-white h-full cyber-container">
        {name}
      </div>
      <div className="flex items-center justify-between text-white px-4">
        <p>{id} victor corporation</p>
      </div>
    </div>
  );
}
