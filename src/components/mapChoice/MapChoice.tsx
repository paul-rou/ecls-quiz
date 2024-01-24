import React from "react";
import Link from "next/link";
import inegaliteTravail from "../../../public/theme-svg/inegalite-travail.svg";
import vieFamiliale from "../../../public/theme-svg/vie-familiale.svg";
import espacePublic from "../../../public/theme-svg/espace-public.svg";
import droit from "../../../public/theme-svg/droit.svg";
import artsCulture from "../../../public/theme-svg/arts-culture.svg";
import autresThemes from "../../../public/theme-svg/autres-themes.svg";
import allThemes from "../../../public/theme-svg/allThemes.svg";

import MapChoiceCard from "./mapChoiceCard/MapChoiceCard";
import { useState } from "react";
import MapChoiceButton from "./mapChoiceButton/MapChoiceButton";

const MapChoice = () => {
  const [selectedMap, setselectedMap] = useState<number | undefined>();

  const isMobile = window.innerWidth <= 500;

  // Array holding information for each MapChoiceCard
  const mapChoices = [
    {
      content: "Inégalités au travail",
      altLogo: "inegaliteTravail",
      themeLogo: inegaliteTravail,
      position: "top",
    },
    {
      content: "Arts & Culture",
      altLogo: "artsCulture",
      themeLogo: artsCulture,
      position: "mid",
    },
    {
      content: "Droit",
      altLogo: "droit",
      themeLogo: droit,
      position: "mid",
    },
    {
      content: "Vie familiale",
      altLogo: "vieFamiliale",
      themeLogo: vieFamiliale,
      position: "mid",
    },
    {
      content: "Espace public",
      altLogo: "espacePublic",
      themeLogo: espacePublic,
      position: "mid",
    },
    {
      content: "Autre",
      altLogo: "autresThemes",
      themeLogo: autresThemes,
      position: "mid",
    },
    {
      content: "Tous les thèmes (aléatoire)",
      altLogo: "allThemes",
      themeLogo: allThemes,
      position: "bot",
    },
  ];

  return (
    <div className="flex flex-col items-center text-center md:mx-20 mx-2">
      <h1 className="text-[#4B4B4B] font-bold text-xl md:my-10 my-4">
        Sur quelle section désirez-vous jouer ?
      </h1>

      {mapChoices.map((choice, index) => (
        <MapChoiceCard
          key={index}
          isMobile={isMobile}
          content={choice.content}
          altLogo={choice.altLogo}
          themeLogo={choice.themeLogo}
          position={choice.position}
          setSelected={() => setselectedMap(index)}
          isSelected={selectedMap === index}
        />
      ))}

      {isMobile ? (
        <></>
      ) : selectedMap === undefined ? (
        <MapChoiceButton />
      ) : (
        <Link
          href={`/quiz?theme=${encodeURIComponent(
            mapChoices[selectedMap].altLogo
          )}`}
        >
          <MapChoiceButton />
        </Link>
      )}
    </div>
  );
};

export default MapChoice;
