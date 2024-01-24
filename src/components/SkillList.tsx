import React from "react";
import { Skills } from "@/data/skills";
import SkillCard from "./SkillCard";

type Props = {
  skills: Skills[];
};
function SkillList({ skills }: Props) {
  return (
    <ul className="flex flex-col gap-5 mt-10">
      {skills.map((x, idx) => (
        <SkillCard skill={x} key={idx} />
      ))}
    </ul>
  );
}

export default SkillList;
