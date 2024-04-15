import Image from "next/image";
import { getBadgeLogoByName, nameOfThemeList } from "@/lib/nameOfThemesList";
import { getUserExperienceByTheme } from "@/lib/localStorageUserInteraction";

const BadgeWrapper = () => {
  // Create a dictionary to store theme names and badge logos
  const badgeLogos: { [key: string]: string } = {};
  // Populate the dictionary using the getBadgeLogoByName function
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
                  getUserExperienceByTheme(theme.name) < 100 ? "grayscale" : ""
                }`}
                src={badgeLogos[theme.name]}
                alt={theme.name}
                title={
                  getUserExperienceByTheme(theme.name) < 100
                    ? `Complète tous les niveaux du thème ${theme.name} pour débloquer ce badge !`
                    : ""
                }
              />
              <span
                className={`text-xs text-center ${
                  getUserExperienceByTheme(theme.name) < 100
                    ? "text-gray-400"
                    : ""
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
