import React, { useEffect } from "react";
import Link from "next/link";
import inegaliteTravail from "../../../public/theme-svg/inegalite-travail.svg";
import vieFamiliale from "../../../public/theme-svg/vie-familiale.svg";
import espacePublic from "../../../public/theme-svg/espace-public.svg";
import droit from "../../../public/theme-svg/droit.svg";
import artsCulture from "../../../public/theme-svg/arts-culture.svg";
import autresThemes from "../../../public/theme-svg/autres-themes.svg";
import allThemes from "../../../public/theme-svg/allThemes.svg";
import violences from "../../../public/theme-svg/violences.svg";

import MapChoiceCard from "./mapChoiceCard/MapChoiceCard";
import { useState } from "react";
import { getUserExperienceByTheme } from "@/lib/localStorageUserInteraction";

interface MapChoice {
  content: string;
  altLogo: string;
  themeLogo: string;
  position: string;
  levelExperience: number;
  showWarning?: boolean;
}

const MapChoice = () => {
  // Array holding information for each MapChoiceCard
  const mapChoices = [
    {
      content: "Inégalités au travail",
      altLogo: "inegaliteTravail",
      themeLogo: inegaliteTravail,
      position: "top",
      levelExperience: 0,
    },
    {
      content: "Arts & Culture",
      altLogo: "artsCulture",
      themeLogo: artsCulture,
      position: "mid",
      levelExperience: 0,
    },
    {
      content: "Droit",
      altLogo: "droit",
      themeLogo: droit,
      position: "mid",
      levelExperience: 0,
    },
    {
      content: "Vie familiale",
      altLogo: "vieFamiliale",
      themeLogo: vieFamiliale,
      position: "mid",
      levelExperience: 0,
    },
    {
      content: "Espace public",
      altLogo: "espacePublic",
      themeLogo: espacePublic,
      position: "mid",
      levelExperience: 0,
    },
    {
      content: "Violences",
      altLogo: "violences",
      themeLogo: violences,
      position: "mid",
      levelExperience: 0,
      showWarning: true,
    },
    {
      content: "Autre",
      altLogo: "autresThemes",
      themeLogo: autresThemes,
      position: "mid",
      levelExperience: 0,
    },
    {
      content: "Tous les thèmes (aléatoire)",
      altLogo: "allThemes",
      themeLogo: allThemes,
      position: "bot",
      levelExperience: 0,
    },
  ];

  const [levelExperience, setLevelExperience] =
    useState<MapChoice[]>(mapChoices);

  useEffect(() => {
    setLevelExperience(
      mapChoices.map((mapChoice) => {
        return {
          ...mapChoice,
          levelExperience: getUserExperienceByTheme(mapChoice.content),
        };
      })
    );
  }, []);

  return (
    <div className="flex flex-col items-center text-center md:mx-20 mx-2">
      <h1 className="text-[#4B4B4B] font-bold text-xl md:my-10 my-4">
        Sur quelle section désirez-vous jouer ?
      </h1>

      {mapChoices.map((choice, index) => (
        <MapChoiceCard
          key={index}
          content={choice.content}
          altLogo={choice.altLogo}
          themeLogo={choice.themeLogo}
          position={choice.position}
          levelExperience={levelExperience[index].levelExperience}
          showWarning={choice?.showWarning}
        />
      ))}
    </div>
  );
};

export default MapChoice;
