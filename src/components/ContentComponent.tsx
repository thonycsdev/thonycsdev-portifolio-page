"use client";
import React, { useState } from "react";
import { Content, FullFormattedData } from "@/data/skills";
import { Tab } from "@/enums/TabTypes";

type Props = {
  type: Tab;
  content: FullFormattedData;
};

function ContentComponent({ type, content }: Props) {
  if (!content) return <div className="text-white">Carregando...</div>;

  return (
    <div className="mt-10 text-white">
      <ul className="flex flex-col gap-5">
        {content[type].map((item, idx) => (
          <li
            key={idx}
            onClick={() => item.url && window.open(item.url, "_blank")}
            className="flex flex-col gap-3 border border-emerald-600 rounded-xl p-2 transition-all duration-200 hover:scale-110 max-w-full overscroll-contain"
          >
            <span>
              <b>{item.name}</b>
            </span>
            {item.level && (
              <span>
                {type === Tab.EDUCATION ? "Ano: " : "Nivel: "} {item.level}
              </span>
            )}
            <span> {item.description && `Descrição: ${item.description}`}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ContentComponent;
