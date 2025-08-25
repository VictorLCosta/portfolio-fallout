import { Tab, TabGroup, TabList, TabPanel, TabPanels } from "@headlessui/react";
import { useState } from "react";
import { ImFolder } from "react-icons/im";

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
    name: "Portfolio Website 2",
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
    name: "Portfolio Website 3",
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
  const [selectedIndex, setSelectedIndex] = useState(0);

  return (
    <section
      id="projects"
      className="panel relative mx-auto flex justify-center"
    >
      <TabGroup
        className="container flex items-center h-full"
        selectedIndex={selectedIndex}
        onChange={setSelectedIndex}
      >
        <TabList className="h-full flex flex-1/2 items-center justify-center flex-col gap-6">
          <Tab className="cursor-pointer">
            <ImFolder className="size-20" />
            <h1>portfolio</h1>
          </Tab>
          <Tab className="cursor-pointer">
            <ImFolder className="size-20" />
            <h1>portfolio</h1>
          </Tab>
          <Tab className="cursor-pointer">
            <ImFolder className="size-20" />
            <h1>portfolio</h1>
          </Tab>
        </TabList>
        <TabPanels className="h-full flex flex-1/2 items-center justify-center">
          {projects.map((p) => (
            <TabPanel key={p.id} className="-translate-y-[7%]">
              <ProjectCard project={p} />
            </TabPanel>
          ))}
        </TabPanels>
      </TabGroup>
    </section>
  );
}
