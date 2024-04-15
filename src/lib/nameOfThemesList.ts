import inegaliteTravail from "../../public/theme-svg/inegalite-travail.svg";
import vieFamiliale from "../../public/theme-svg/vie-familiale.svg";
import espacePublic from "../../public/theme-svg/espace-public.svg";
import droit from "../../public/theme-svg/droit.svg";
import artsCulture from "../../public/theme-svg/arts-culture.svg";
import autresThemes from "../../public/theme-svg/autres-themes.svg";
import violences from "../../public/theme-svg/violences.svg";
import allThemes from "../../public/theme-svg/allThemes.svg";
import allThemesBadge from "../../public/theme-svg/Badge_AllThemes.svg";
import artsCultureBadge from "../../public/theme-svg/Badge_ArtsCulture.svg";
import droitBadge from "../../public/theme-svg/Badge_Droit.svg";
import inegaliteTravailBadge from "../../public/theme-svg/Badge_InegaliteTravail.svg";
import vieFamilialeBadge from "../../public/theme-svg/Badge_VieFamiliale.svg";
import espacePublicBadge from "../../public/theme-svg/Badge_EspacePublic.svg";
import autresThemesBadge from "../../public/theme-svg/Badge_AutresThemes.svg";
import violencesBadge from "../../public/theme-svg/Badge_Violences.svg";

type Theme = {
  name: string;
  themeName: string;
  altLogo: string;
  themeLogo: string;
  badgeLogo: string;
};

export const nameOfThemeList: Theme[] = [
  {
    name: "Inégalités au travail",
    themeName: "Travail",
    altLogo: "inegaliteTravail",
    themeLogo: inegaliteTravail,
    badgeLogo: inegaliteTravailBadge,
  },
  {
    name: "Arts & Culture",
    themeName: "Arts & Culture",
    altLogo: "artsCulture",
    themeLogo: artsCulture,
    badgeLogo: artsCultureBadge,
  },
  {
    name: "Droit",
    themeName: "Droit",
    altLogo: "droit",
    themeLogo: droit,
    badgeLogo: droitBadge,
  },
  {
    name: "Vie familiale",
    themeName: "Vie familiale",
    altLogo: "vieFamiliale",
    themeLogo: vieFamiliale,
    badgeLogo: vieFamilialeBadge,
  },
  {
    name: "Espace public",
    themeName: "Espace public",
    altLogo: "espacePublic",
    themeLogo: espacePublic,
    badgeLogo: espacePublicBadge,
  },
  {
    name: "Violences",
    themeName: "Violences",
    altLogo: "violences",
    themeLogo: violences,
    badgeLogo: violencesBadge,
  },
  {
    name: "Autre",
    themeName: "Autre",
    altLogo: "autresThemes",
    themeLogo: autresThemes,
    badgeLogo: autresThemesBadge,
  },
  {
    name: "Aléatoire",
    themeName: "random",
    altLogo: "allThemes",
    themeLogo: allThemes,
    badgeLogo: allThemesBadge,
  },
];

export const getThemeInfoByAltLogo = (altLogo: string) => {
  return nameOfThemeList.find((theme) => theme.altLogo === altLogo);
};

export const getBadgeLogoByName = (name: string) => {
  return nameOfThemeList.find((theme)=> theme.name === name)?.badgeLogo;
};