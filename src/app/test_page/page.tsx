"use client";

import QuizBilan from "@/components/quizElements/quizBilan/QuizBilan";
import NavBar from "@/components/navBar/NavBar";
import vieFamiliale from "../../../public/theme-svg/vie-familiale.svg";

export default function Home() {
  const listOfThemes = [
    "Inégalités au travail",
    "Arts & Culture",
    "Droit",
    "Vie familiale",
    "Espace public",
    "Autre",
  ];
  return (
    <>
      <NavBar />
      <QuizBilan
        score={4}
        nbQuestions={5}
        xpGained={16}
        themeName="Vie Familiale"
        themeLogo={vieFamiliale}
      />
    </>
  );
}
