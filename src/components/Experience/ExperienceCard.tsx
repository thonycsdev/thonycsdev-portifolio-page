import { Education, Experience } from "@/data/skills";
import React from "react";
type Props = {
  experience: Experience;
};
function ExperienceCard({ experience }: Props) {
  return (
    <div>
      <li className="flex justify-around gap-4 items-center border border-emerald-600 rounded-xl p-3 px-5 overscroll-contain">
        <div className="flex-col flex gap-2">
          <span className="text-emerald-400 text-xl font-bold">
            {experience.name}
          </span>
          <span className="text-emerald-400 text-xl text-nowrap">
            {experience.description}
          </span>
          <span className="text-emerald-400 text-xl text-nowrap">
            {experience.level}
          </span>
        </div>
        <span className="text-lg">
          {experience.startedYear} - {experience.endedYear}
        </span>
      </li>
    </div>
  );
}

export default ExperienceCard;
