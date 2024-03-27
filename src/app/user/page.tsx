"use client";

import NavBar from "@/components/navBar/NavBar";
import UserWrapper from "@/components/userWrapper/UserWrapper";
import { getUserScore } from "@/lib/localStorageUserInteraction";

export default function Home() {
  const { experience, foundAnswers, levelCompletedNumber } = getUserScore();
  return (
    <>
      <NavBar />
      <UserWrapper
        userXP={Number(experience)}
        userNbQuestions={Number(foundAnswers)}
        userNbLevels={Number(levelCompletedNumber)}
      />
    </>
  );
}
