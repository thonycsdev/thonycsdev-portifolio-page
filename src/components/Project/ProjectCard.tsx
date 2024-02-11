import React from "react";
import { FaGithub } from "react-icons/fa";
import { IoIosStar } from "react-icons/io";
import { FaEye } from "react-icons/fa";
import { Project } from "@/models/project";

type Props = {
  project: Project;
};

function ProjectCard({ project }: Props) {
  return (
    <div>
      <li className="relative flex flex-col justify-between border border-emerald-600 rounded-xl p-3 transition-all duration-200 hover:scale-110 max-w-full overscroll-contain">
        <div className="flex justify-around">
          <div className="flex flex-col w-3/5">
            <span className="text-emerald-400 text-xl font-semibold text-wrap">
              {project.name}
            </span>
            <span className="text-emerald-400 text-xl">
              {project.technology}
            </span>
            <span className="text-lg">{project.description}</span>
          </div>
          <div className="w-2/5 flex justify-center items-center">
            <button
              onClick={() => window.open(project.url!)}
              className="flex-col flex justify-center items-center hover:scale-110 transition-all duration-200"
            >
              <FaGithub className="w-3/4 h-3/4 text-emerald-400 " />
              <span className="text-emerald-400 text-xl font-semibold">
                See code
              </span>
            </button>
          </div>
        </div>
        <div className="flex gap-10">
          <span className="flex items-center gap-1">
            <IoIosStar className="text-yellow-400" /> : {project.stars}
          </span>
          <span className="flex items-center gap-1">
            <FaEye /> : {project.watchers}
          </span>
        </div>
      </li>
    </div>
  );
}

export default ProjectCard;
