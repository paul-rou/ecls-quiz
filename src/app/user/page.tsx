"use client";

import NavBar from "@/components/navBar/NavBar";
import UserWrapper from "@/components/userWrapper/UserWrapper";

export default function Home() {
  return (
    <>
      <NavBar />
      <UserWrapper userXP={548} userNbQuestions={52} userNbLevels={14} />
    </>
  );
}
