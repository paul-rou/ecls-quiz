"use client";
import QuizWrapper from "@/components/quizElements/quizWrapper/QuizWrapper";
import NavBar from "@/components/navBar/NavBar";
import { useSearchParams } from "next/navigation";
import { getThemeInfoByAltLogo } from "../../lib/nameOfThemesList";

export default function Home() {
  // Fetch the theme from the URL :
  const searchParams = useSearchParams();
  const theme = searchParams?.get("theme");

  // Retrieve the svg linked and name linked to this theme
  const themeInfo = getThemeInfoByAltLogo(`${theme}`);
  const themeLogo = themeInfo?.themeLogo;
  const themeNameToShow = themeInfo?.name;
  const themeName = themeInfo?.themeName;

  return (
    <>
      <NavBar
        themeLogo={themeLogo}
        themeName={themeNameToShow}
        displayUserButton={false}
      />
      <QuizWrapper
        themeNameToShow={themeNameToShow}
        themeLogo={themeLogo}
        themeName={themeName}
      />
    </>
  );
}
