import { Education } from "../../../infra/data/skills";
import React from "react";

type Props = {
  education: Education;
};

function EducationCart({ education }: Props) {
  return (
    <div>
      <li className="flex justify-between gap-4 items-center border border-emerald-600 rounded-xl p-3 px-5 overscroll-contain">
        <span className="text-emerald-400 text-xl font-bold">
          {education.name}
        </span>
        <span className="text-emerald-400 text-xl text-nowrap">
          {education.level}
        </span>
      </li>
    </div>
  );
}

export default EducationCart;
