import React, { useState, useTransition } from "react";
import TabButton from "./TabButton";

enum Tab {
  SKILLS = "skills",
  EDUCATION = "education",
  EXPERIENCE = "experience",
}

function Tabs() {
  const [tab, setTab] = useState<Tab>(Tab.SKILLS);
  const [isPending, startTrans] = useTransition();

  const handleTabChange = (tabType: Tab) => {
    startTrans(() => {
      setTab(tabType);
    });
  };
  return (
    <div className="flex flex-row mt-8 justify-center">
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
    </div>
  );
}

export default Tabs;
