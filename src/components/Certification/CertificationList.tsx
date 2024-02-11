import React from "react";
import CertificationCard from "./CertificationCard";
import { Certificate } from "@/models/certificate";

type Props = {
  certifications: Certificate[];
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
