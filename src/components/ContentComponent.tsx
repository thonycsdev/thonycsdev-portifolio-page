import React from "react";
import { FullFormattedData } from "@/data/skills";
import { Tab } from "@/enums/TabTypes";
import CertificationList from "./CertificationList";
import ProjectList from "./ProjectList";
import SkillList from "./SkillList";
import EducationList from "./EducationList";
import ExperienceList from "./ExperienceList";

type Props = {
  type: Tab;
  content: FullFormattedData;
};

function ContentComponent({ type, content }: Props) {
  if (!content) return <div className="text-white">Carregando...</div>;

  switch (type) {
    case Tab.CERTIFICATIONS:
      return <CertificationList certifications={content.certifications} />;
    case Tab.EDUCATION:
      return <EducationList educations={content.education} />;
    case Tab.EXPERIENCE:
      return <ExperienceList experience={content.experience} />;
    case Tab.PROJECTS:
      return <ProjectList projects={content.projects} />;
    case Tab.SKILLS:
      return <SkillList skills={content.skills} />;
    default:
      return;
  }
}

export default ContentComponent;
