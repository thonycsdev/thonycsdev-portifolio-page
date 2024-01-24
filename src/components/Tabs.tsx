import React, { useState, useTransition } from "react";
import TabButton from "./TabButton";
import ContentComponent from "./ContentComponent";
import { Tab } from "@/enums/TabTypes";
import { FullFormattedData } from "@/data/skills";
type Props = {
  data: FullFormattedData;
};
function Tabs({ data }: Props) {
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
          Habilidades
        </TabButton>
        <TabButton
          active={tab === Tab.EDUCATION}
          selectTab={() => handleTabChange(Tab.EDUCATION)}
        >
          Educação
        </TabButton>
        <TabButton
          active={tab === Tab.EXPERIENCE}
          selectTab={() => handleTabChange(Tab.EXPERIENCE)}
        >
          Experiência
        </TabButton>
        <TabButton
          active={tab === Tab.CERTIFICATIONS}
          selectTab={() => handleTabChange(Tab.CERTIFICATIONS)}
        >
          Certificações
        </TabButton>
        <TabButton
          active={tab === Tab.PROJECTS}
          selectTab={() => handleTabChange(Tab.PROJECTS)}
        >
          Projetos
        </TabButton>
      </div>
      <div className="text-white">
        <ContentComponent type={tab} content={data} />
      </div>
    </div>
  );
}

export default Tabs;
