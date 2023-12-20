"use client";

import QuizSolutionWrapper from "@/components/quizElements/quizSolutionWrapper/QuizSolutionWrapper";
import MapChoice from "@/components/mapChoice/MapChoice";
import NavBar from "@/components/navBar/NavBar";

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
      <MapChoice />
    </>
  );
}
