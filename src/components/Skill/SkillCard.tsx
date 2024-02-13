import { Skill } from "@/models/skill";
import React, { useContext } from "react";
import { TranslationContext } from "../Context/TranslationContext";

type Props = {
  skill: Skill;
};

function SkillCard({ skill }: Props) {
  const { currentLanguage } = useContext(TranslationContext);
  const skillLevelInEnglish =
    skill.level === "Básico"
      ? "Basic"
      : skill.level === "Intermediário"
      ? "Intermediate"
      : "Advanced";
  const skillLevel =
    currentLanguage === "en" ? skillLevelInEnglish : skill.level;
  return (
    <div>
      <li className="flex justify-between gap-4 items-center border border-emerald-600 rounded-xl p-3 px-5 overscroll-contain">
        <span className="text-emerald-400 text-xl font-bold">{skill.name}</span>
        <span className="text-emerald-400 text-xl">{skillLevel}</span>
      </li>
    </div>
  );
}

export default SkillCard;
