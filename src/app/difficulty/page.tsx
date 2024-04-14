"use client";
import NavBar from "@/components/navBar/NavBar";
import { useSearchParams } from "next/navigation";
import { getThemeInfoByAltLogo } from "../../lib/nameOfThemesList";
import DifficultyWrapper from "@/components/difficultyElements/difficultyWrapper.tsx/DifficultyWrapper";

export default function Difficulty() {
  // Fetch the theme from the URL :
  const searchParams = useSearchParams();
  const theme = searchParams?.get("theme");

  // Retrieve the svg linked and name linked to this theme
  const themeInfo = getThemeInfoByAltLogo(`${theme}`);
  const themeLogo = themeInfo?.themeLogo;
  const themeNameToShow = themeInfo?.name;
  const altLogo = themeInfo?.altLogo ?? "";

  return (
    <>
      <NavBar
        themeLogo={themeLogo}
        themeName={themeNameToShow}
        displayUserButton={false}
      />
      <DifficultyWrapper altLogo={altLogo} />
    </>
  );
}