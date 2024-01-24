import React from "react";
import ProjectCard from "./ProjectCard";
import { Projects } from "@/data/skills";

type Props = {
  projects: Projects[];
};
function ProjectList({ projects }: Props) {
  return (
    <ul className="flex flex-col gap-5 mt-10">
      {projects.map((x, idx) => (
        <ProjectCard project={x} key={idx} />
      ))}
    </ul>
  );
}

export default ProjectList;
