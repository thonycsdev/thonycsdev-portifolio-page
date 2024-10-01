import React from "react";
import { GoArrowUpRight } from "react-icons/go";
import { Project } from "@/models/project";

type Props = {
  project: Project;
};

function ProjectCard({ project }: Props) {
  return (
    <div className="p-3 w-48 bg-paper-darker h-fit grid grid-flow-col place-items-center hover:cursor-pointer hover:scale-110 transition-all ease-in-out duration-150 hover:mb-3">
      <div className="font-bold">
        {project.name}
      </div>
      <div className="">
        {project.startedYear}
      </div>
      <div>
        {project.technology}
      </div>
      <div className="hover:scale-150 transition-transform ease-in-out duration-150 hover:font-bold">
        <GoArrowUpRight />
      </div>
    </div>
  );
}

export default ProjectCard;
