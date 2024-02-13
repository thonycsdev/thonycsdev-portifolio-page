import React, { useContext, useState, useTransition } from "react";
import TabButton from "./TabButton";
import ContentComponent from "./ContentComponent";
import { Tab } from "@/enums/TabTypes";
import { FullPageInformationType } from "@/schemas/FullPageInformationType";
import { TranslationContext } from "./Context/TranslationContext";
type Props = {
  data: FullPageInformationType;
};
function Tabs({ data }: Props) {
  const { language } = useContext(TranslationContext);
  const [tab, setTab] = useState<Tab>(Tab.SKILLS);
  const [isPending, startTrans] = useTransition();

  const handleTabChange = (tabType: Tab) => {
    startTrans(() => {
      setTab(tabType);
    });
  };
  return (
    <div>
      <div className="flex flex-row mt-8 justify-center flex-wrap gap-5">
        <TabButton
          active={tab === Tab.SKILLS}
          selectTab={() => handleTabChange(Tab.SKILLS)}
        >
          {language.skillsLabel}
        </TabButton>
        <TabButton
          active={tab === Tab.EDUCATION}
          selectTab={() => handleTabChange(Tab.EDUCATION)}
        >
          {language.educationLabel}
        </TabButton>
        <TabButton
          active={tab === Tab.EXPERIENCE}
          selectTab={() => handleTabChange(Tab.EXPERIENCE)}
        >
          {language.experienceLabel}
        </TabButton>
        <TabButton
          active={tab === Tab.CERTIFICATIONS}
          selectTab={() => handleTabChange(Tab.CERTIFICATIONS)}
        >
          {language.certificateLabel}
        </TabButton>
        <TabButton
          active={tab === Tab.PROJECTS}
          selectTab={() => handleTabChange(Tab.PROJECTS)}
        >
          {language.projectsLabel}
        </TabButton>
      </div>
      <div className="text-white">
        <ContentComponent type={tab} content={data} />
      </div>
    </div>
  );
}

export default Tabs;
