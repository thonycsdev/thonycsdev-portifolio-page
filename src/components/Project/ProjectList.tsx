import React from "react";
import ProjectCard from "./ProjectCard";
import { Project } from "@/models/project";

type Props = {
  projects: Project[];
};
function FeaturedProjectsComponents({ projects }: Props) {
  if (projects.length === 0) {
    projects = [{
      id: 1,
      url: "",
      name: "batatinha",
      level: "Avancado",
      stars: 43,
      watchers: 3,
      endedYear: "2023",
      technology: "C#",
      description: "esparrama",
      startedYear: "2024"
    }, {
      id: 1,
      url: "",
      name: "batatinha",
      level: "Avancado",
      stars: 43,
      watchers: 3,
      endedYear: "2023",
      technology: "C#",
      description: "esparrama",
      startedYear: "2024"
    }, {
      id: 1,
      url: "",
      name: "batatinha",
      level: "Avancado",
      stars: 43,
      watchers: 3,
      endedYear: "2023",
      technology: "C#",
      description: "esparrama",
      startedYear: "2024"
    }, {
      id: 1,
      url: "",
      name: "batatinha",
      level: "Avancado",
      stars: 43,
      watchers: 3,
      endedYear: "2023",
      technology: "C#",
      description: "esparrama",
      startedYear: "2024"
    }, {
      id: 1,
      url: "",
      name: "batatinha",
      level: "Avancado",
      stars: 43,
      watchers: 3,
      endedYear: "2023",
      technology: "C#",
      description: "esparrama",
      startedYear: "2024"
    },]
  }
  return (
    <div className="grid grid-flow-row gap-3">
      Projetos em Destaque
      {projects.map((x, idx) => (
        <ProjectCard project={x} key={idx} />
      ))}
    </div>
  );
}

export default FeaturedProjectsComponents;
