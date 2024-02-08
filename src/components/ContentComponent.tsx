import React from "react";
import { FullFormattedData } from "../../infra/data/skills";
import { Tab } from "@/enums/TabTypes";
import CertificationList from "./Certification/CertificationList";
import ProjectList from "./Project/ProjectList";
import SkillList from "./Skill/SkillList";
import EducationList from "./Education/EducationList";
import ExperienceList from "./Experience/ExperienceList";

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
