import { Education } from "../../../infra/data/skills";
import React from "react";
import EducationCart from "./EducationCart";
type Props = {
  educations: Education[];
};
function EducationList({ educations }: Props) {
  return (
    <ul className="flex flex-col gap-5 mt-10 lg:flex-row justify-center flex-wrap">
      {educations.map((x, idx) => (
        <EducationCart education={x} key={idx} />
      ))}
    </ul>
  );
}

export default EducationList;
