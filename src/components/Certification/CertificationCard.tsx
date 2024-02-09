import { Certifications } from "../../../infra/data/skills";
import React from "react";
import { PiCertificateDuotone } from "react-icons/pi";

type Props = {
  certification: Certifications;
};

function CertificationCard({ certification }: Props) {
  return (
    <li className="relative flex flex-row justify-between gap-3 items-center border border-emerald-600 rounded-xl p-2 transition-all duration-200 hover:scale-110 max-w-full overscroll-contain">
      <div className="flex flex-col w-4/5 gap-3">
        <div className="flex flex-col gap-1">
          <span className="text-emerald-400 text-xl font-semibold text-wrap">
            {certification.name}
          </span>
          <span className="text-emerald-400 text-xl">
            {certification.hours} Hrs
          </span>
        </div>
        <span className="text-white text-lg">
          {certification.date_started_and_completion}
        </span>
      </div>
      <div className="w-2/5 h-20 flex justify-center items-center">
        <PiCertificateDuotone className="w-3/4 h-3/4" />
      </div>
    </li>
  );
}

export default CertificationCard;
