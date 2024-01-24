import { Certifications } from "@/data/skills";
import React from "react";
import { PiCertificateDuotone } from "react-icons/pi";

type Props = {
  certifications: Certifications[];
};

function CertificationList({ certifications }: Props) {
  return (
    <ul className="flex flex-col gap-5 mt-10">
      {certifications.map((cert, idx) => (
        <li
          key={idx}
          className="relative flex flex-row justify-between gap-3 items-center border border-emerald-600 rounded-xl p-2 transition-all duration-200 hover:scale-110 max-w-full overscroll-contain"
        >
          <div className="flex flex-col w-4/5">
            <span className="text-emerald-400 text-xl font-semibold text-wrap">
              {cert.name}
            </span>
            <span className="text-emerald-400 text-xl">{cert.hours} Hrs</span>
            <span className="text-white text-lg">
              {cert.dateStartedAndCompletion}
            </span>
          </div>
          <div className="w-2/5 h-20">
            <PiCertificateDuotone className="w-full h-full" />
          </div>
        </li>
      ))}
    </ul>
  );
}

export default CertificationList;
