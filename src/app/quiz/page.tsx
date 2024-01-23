"use client";
import QuizWrapper from "@/components/quizElements/quizWrapper/QuizWrapper";
import NavBar from "@/components/navBar/NavBar";
import { useSearchParams } from "next/navigation";
import {
  nameOfThemeList,
  getThemeInfoByAltLogo,
} from "../../../public/nameOfThemesList";

export default function Home() {
  // Fetch the theme from the URL :
  const searchParams = useSearchParams();
  const theme = searchParams.get("theme");

  // Retrieve the svg linked and name linked to this theme
  const themeInfo = getThemeInfoByAltLogo(`${theme}`);
  const themeLogo = themeInfo?.themeLogo;
  const themeName = themeInfo?.name;

  return (
    <>
      <NavBar themeLogo={themeLogo} themeName={themeName} />
      <QuizWrapper themeLogo={themeLogo} themeName={themeName} />
    </>
  );
}
