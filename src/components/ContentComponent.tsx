import React from "react";
import { FullFormattedData } from "@/data/skills";
import { Tab } from "@/enums/TabTypes";
import CertificationList from "./CertificationList";
import ProjectList from "./ProjectList";

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
      return <div>Education</div>;
    case Tab.EXPERIENCE:
      return <div>Experience</div>;
    case Tab.PROJECTS:
      return <ProjectList projects={content.projects} />;
    case Tab.SKILLS:
      return <div>Skills</div>;
    default:
      return;
  }
}

export default ContentComponent;
