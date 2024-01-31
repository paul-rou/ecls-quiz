import inegaliteTravail from "../../public/theme-svg/inegalite-travail.svg";
import vieFamiliale from "../../public/theme-svg/vie-familiale.svg";
import espacePublic from "../../public/theme-svg/espace-public.svg";
import droit from "../../public/theme-svg/droit.svg";
import artsCulture from "../../public/theme-svg/arts-culture.svg";
import autresThemes from "../../public/theme-svg/autres-themes.svg";
import allThemes from "../../public/theme-svg/allThemes.svg";

type Theme = {
  name: string;
  themeName: string;
  altLogo: string;
  themeLogo: string;
};

export const nameOfThemeList: Theme[] = [
  {
    name: "Inégalités au travail",
    themeName: "Travail",
    altLogo: "inegaliteTravail",
    themeLogo: inegaliteTravail,
  },
  {
    name: "Arts & Culture",
    themeName: "Arts & Culture",
    altLogo: "artsCulture",
    themeLogo: artsCulture,
  },
  {
    name: "Droit",
    themeName: "Droit",
    altLogo: "droit",
    themeLogo: droit,
  },
  {
    name: "Vie familiale",
    themeName: "Vie familiale",
    altLogo: "vieFamiliale",
    themeLogo: vieFamiliale,
  },
  {
    name: "Espace public",
    themeName: "Espace public",
    altLogo: "espacePublic",
    themeLogo: espacePublic,
  },
  {
    name: "Autre",
    themeName: "Autre",
    altLogo: "autresThemes",
    themeLogo: autresThemes,
  },
  {
    name: "Aléatoire",
    themeName: "random",
    altLogo: "allThemes",
    themeLogo: allThemes,
  },
];

export const getThemeInfoByAltLogo = (altLogo: string) => {
  return nameOfThemeList.find((theme) => theme.altLogo === altLogo);
};
