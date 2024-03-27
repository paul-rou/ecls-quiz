"use client";

import NavBar from "@/components/navBar/NavBar";
import UserWrapper from "@/components/userWrapper/UserWrapper";
import { getUserScore } from "@/lib/localStorageUserInteraction";
import { useEffect, useState } from "react";

export default function Home() {
  // Le localStorage n'existe que côté client, c'est pourquoi nous avons besoin de useEffect + useState
  const [userScore, setUserScore] = useState({
    experience: "0",
    foundAnswers: "0",
    levelCompletedNumber: "0",
  });
  useEffect(() => {
    const { experience, foundAnswers, levelCompletedNumber } = getUserScore();
    setUserScore({ experience, foundAnswers, levelCompletedNumber });
  }, []);
  return (
    <>
      <NavBar />
      <UserWrapper
        userXP={Number(userScore.experience)}
        userNbQuestions={Number(userScore.foundAnswers)}
        userNbLevels={Number(userScore.levelCompletedNumber)}
      />
    </>
  );
}
