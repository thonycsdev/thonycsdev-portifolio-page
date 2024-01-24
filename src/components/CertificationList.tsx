import { Certifications } from "@/data/skills";
import React from "react";
import CertificationCard from "./CertificationCard";

type Props = {
  certifications: Certifications[];
};

function CertificationList({ certifications }: Props) {
  return (
    <ul className="flex flex-col gap-5 mt-10">
      {certifications.map((cert, idx) => (
        <CertificationCard certification={cert} key={idx} />
      ))}
    </ul>
  );
}

export default CertificationList;
