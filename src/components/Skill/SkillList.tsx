import React from "react";
import { Skill } from "../../../infra/data/skills";
import SkillCard from "./SkillCard";

type Props = {
  skills: Skill[];
};
function SkillList({ skills }: Props) {
  return (
    <ul className="flex flex-col lg:flex-row flex-wrap justify-center gap-5 mt-10">
      {skills.map((x, idx) => (
        <SkillCard skill={x} key={idx} />
      ))}
    </ul>
  );
}

export default SkillList;
