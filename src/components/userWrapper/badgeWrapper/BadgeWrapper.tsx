import Image from "next/image";
import Badge_AllThemes from "../../../../public/theme-svg/Badge_AllThemes.svg";
import Badge_ArtsCulture from "../../../../public/theme-svg/Badge_ArtsCulture.svg";
import Badge_AutresThemes from "../../../../public/theme-svg/Badge_AutresThemes.svg";
import Badge_Droit from "../../../../public/theme-svg/Badge_Droit.svg";
import Badge_EspacePublic from "../../../../public/theme-svg/Badge_EspacePublic.svg";
import Badge_InegalitéTravail from "../../../../public/theme-svg/Badge_InegalitéTravail.svg";
import Badge_VieFamiliale from "../../../../public/theme-svg/Badge_VieFamiliale.svg";
import Badge_Violences from "../../../../public/theme-svg/Badge_Violences.svg";
import inegaliteTravail from "../../../../public/theme-svg/inegalite-travail.svg";
import vieFamiliale from "../../../../public/theme-svg/vie-familiale.svg";
import espacePublic from "../../../../public/theme-svg/espace-public.svg";
import droit from "../../../../public/theme-svg/droit.svg";
import artsCulture from "../../../../public/theme-svg/arts-culture.svg";
import autresThemes from "../../../../public/theme-svg/autres-themes.svg";
import allThemes from "../../../../public/theme-svg/allThemes.svg";
import violences from "../../../../public/theme-svg/violences.svg";

import { getUserExperienceByTheme } from "@/lib/localStorageUserInteraction";
import { getThemeInfoByAltLogo } from "@/lib/nameOfThemesList";

const BadgeWrapper = () => {
  return (
    <div className="flex flex-col justify-center space-y-4 mt-5 items-center w-full h-full">
      <div className="h-[26px] font-bold text-[#3c3c3c] text-lg tracking-[0] leading-[26px] whitespace-nowrap">
        Mes badges
      </div>
      <div className="flex w-[450px] items-start gap-x-6 px-[26px] py-[17px] relative rounded-[16px] overflow-hidden border-2 border-solid border-neutral-200">
        <div className="grid grid-cols-4 gap-x-8">
          <div className="flex flex-col items-center">
            <Image
              className="w-20 h-20 grayscale"
              src={Badge_AllThemes}
              alt="Badge_AllThemes"
            />
            <span className="text-gray-500 text-xs text-center">
              Tous les thèmes +{" "}
              {getUserExperienceByTheme(
                getThemeInfoByAltLogo(inegaliteTravail)
              )}
            </span>
          </div>
          <div className="flex flex-col items-center">
            <Image
              className="w-20 h-20 grayscale"
              src={Badge_ArtsCulture}
              alt="Badge_ArtsCulture"
            />
            <span className="text-gray-500 text-xs text-center">
              Arts & Culture
            </span>
          </div>
          <div className="flex flex-col items-center">
            <Image
              className="w-20 h-20 grayscale"
              src={Badge_AutresThemes}
              alt="Badge_AutresThemes"
            />
            <span className="text-gray-500 text-xs text-center">
              Autres Thèmes
            </span>
          </div>
          <div className="flex flex-col items-center">
            <Image
              className="w-20 h-20 grayscale"
              src={Badge_Droit}
              alt="Badge_Droit"
            />
            <span className="text-gray-500 text-xs text-center">Droit</span>
          </div>
          <div className="flex flex-col items-center">
            <Image
              className="w-20 h-20 grayscale"
              src={Badge_EspacePublic}
              alt="Badge_EspacePublic"
            />
            <span className="text-gray-500 text-xs text-center">
              Espace Public
            </span>
          </div>
          <div className="flex flex-col items-center">
            <Image
              className="w-20 h-20 grayscale"
              src={Badge_InegalitéTravail}
              alt="Badge_InegalitéTravail"
            />
            <span className="text-gray-500 text-xs text-center">
              Inégalités au travail
            </span>
          </div>
          <div className="flex flex-col items-center">
            <Image
              className="w-20 h-20 grayscale"
              src={Badge_VieFamiliale}
              alt="Badge_VieFamiliale"
            />
            <span className="text-gray-500 text-xs text-center">
              Vie Familiale
            </span>
          </div>
          <div className="flex flex-col items-center">
            <Image
              className="w-20 h-20 grayscale"
              src={Badge_Violences}
              alt="Badge_Violences"
            />
            <span className="text-gray-500 text-xs text-center">Violences</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BadgeWrapper;
