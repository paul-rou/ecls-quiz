import Image from "next/image";
import React, { useEffect, useState } from "react";
import { getBadgeLogoByName, nameOfThemeList } from "@/lib/nameOfThemesList";
import { getUserExperienceByTheme } from "@/lib/localStorageUserInteraction";

const BadgeWrapper = () => {
  type UserExperience = { [key: string]: number };

  // State to store the user experience for each theme
  const [userExperience, setUserExperience] = useState<UserExperience>({});

  useEffect(() => {
    // Fetch user experience for each theme
    const userExperienceData: UserExperience = {};
    nameOfThemeList.forEach((theme) => {
      userExperienceData[theme.name] = getUserExperienceByTheme(theme.name);
    });
    setUserExperience(userExperienceData);
  }, []);

  // Create a dictionary to store theme names and badge logos
  const badgeLogos: { [key: string]: string } = {};

  nameOfThemeList.forEach((theme) => {
    const badgeLogo = getBadgeLogoByName(theme.name);
    if (badgeLogo) {
      badgeLogos[theme.name] = badgeLogo;
    }
  });

  return (
    <div className="flex flex-col justify-center space-y-4 mt-5 items-center w-full h-full">
      <div className="h-[26px] font-bold text-[#3c3c3c] text-lg tracking-[0] leading-[26px] whitespace-nowrap">
        Mes badges
      </div>
      <div className="flex w-[450px] items-start gap-x-6 px-[26px] py-[17px] relative rounded-[16px] overflow-hidden border-2 border-solid border-neutral-200">
        <div className="grid grid-cols-4 gap-x-8">
          {nameOfThemeList.map((theme) => (
            <div
              key={theme.name}
              className="flex flex-col items-center relative"
            >
              <Image
                className={`w-20 h-20 ${
                  userExperience[theme.name] > 99 ? "" : "grayscale" // On inverse l'ordre ici pour que l'affichage de la page par défaut soit en grayscale
                }`}
                src={badgeLogos[theme.name]}
                alt={theme.name}
                title={
                  userExperience[theme.name] < 100
                    ? `Complète tous les niveaux du thème ${theme.name} pour débloquer ce badge !`
                    : ""
                }
              />
              <span
                className={`text-xs text-center ${
                  userExperience[theme.name] < 100 ? "text-gray-400" : ""
                }`}
              >
                {theme.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BadgeWrapper;
