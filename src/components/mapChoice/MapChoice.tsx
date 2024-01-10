import React from "react";
import Link from "next/link";
import Image from "next/image";
import inegaliteTravail from "../../../public/theme-svg/inegalite-travail.svg";
import vieFamiliale from "../../../public/theme-svg/vie-familiale.svg";
import espacePublic from "../../../public/theme-svg/espace-public.svg";
import droit from "../../../public/theme-svg/droit.svg";
import artsCulture from "../../../public/theme-svg/arts-culture.svg";
import autresThemes from "../../../public/theme-svg/autres-themes.svg";

import MapChoiceCard from "./mapChoiceCard/MapChoiceCard";
import { useState } from "react";

const MapChoice = () => {
  const [selectedAnswer, setSelectedAnswer] = useState<number | undefined>();

  // Array holding information for each MapChoiceCard
  const mapChoices = [
    {
      content: "Inégalités au travail",
      altLogo: "Briefcase",
      themeLogo: inegaliteTravail,
      position: "top",
    },
    {
      content: "Arts & Culture",
      altLogo: "Music Note",
      themeLogo: artsCulture,
      position: "mid",
    },
    {
      content: "Droit",
      altLogo: "Document",
      themeLogo: droit,
      position: "mid",
    },
    {
      content: "Vie familiale",
      altLogo: "House",
      themeLogo: vieFamiliale,
      position: "mid",
    },
    {
      content: "Espace public",
      altLogo: "Speech Bubble",
      themeLogo: espacePublic,
      position: "mid",
    },
    {
      content: "Autre",
      altLogo: "3-dot Icon",
      themeLogo: autresThemes,
      position: "bot",
    },
  ];

  return (
    <div className="flex flex-col items-center text-center mx-20">
      <h1 className="text-[#4B4B4B] font-bold text-xl my-10">
        Sur quelle section désirez-vous jouer ?
      </h1>

      {mapChoices.map((choice, index) => (
        <MapChoiceCard
          key={index}
          content={choice.content}
          altLogo={choice.altLogo}
          themeLogo={choice.themeLogo}
          position={choice.position}
          setSelected={() => setSelectedAnswer(index)}
          isSelected={selectedAnswer === index}
        />
      ))}
    </div>
  );
};

export default MapChoice;
