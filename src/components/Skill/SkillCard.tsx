import { Skill } from "../../../infra/data/skills";
import React from "react";

type Props = {
  skill: Skill;
};

function SkillCard({ skill }: Props) {
  return (
    <div>
      <li className="flex justify-between gap-4 items-center border border-emerald-600 rounded-xl p-3 px-5 overscroll-contain">
        <span className="text-emerald-400 text-xl font-bold">{skill.name}</span>
        <span className="text-emerald-400 text-xl">{skill.level}</span>
      </li>
    </div>
  );
}

export default SkillCard;
