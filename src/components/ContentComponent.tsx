import React from "react";
import { Tab } from "@/enums/TabTypes";
import CertificationList from "./Certification/CertificationList";
import SkillList from "./Skill/SkillList";
import EducationList from "./Education/EducationList";
import ExperienceList from "./Experience/ExperienceList";
import { FullPageInformationType } from "@/schemas/FullPageInformationType";

type Props = {
  type: Tab;
  content: FullPageInformationType;
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
    case Tab.SKILLS:
      return <SkillList skills={content.skills} />;
    default:
      return;
  }
}

export default ContentComponent;
