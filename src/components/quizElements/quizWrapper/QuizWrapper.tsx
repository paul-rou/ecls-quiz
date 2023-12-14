"use client";

import { useState } from "react";
import QuizAnswerWrapper from "../quizAnswerWrapper/QuizAnswerWrapper";
import VerifiedButton from "../verifiedButton/VerifiedButton";
import QuizAnswerResult from "../quizAnswerResult/QuizAnswerResult";
import QuizAnswerDescription from "../quiAnswerDescription/QuizAnswerDescription";

type QuizState = "question" | "right" | "wrong";

// !! la question est pour l'instant hardcodée, il faudra la passer en props plus tard
const QuizWrapper = () => {
  const [quizState, setQuizState] = useState<QuizState>("question");
  const description =
    "En effet, seul 31% des hommes acceptent de s'y mettre !\n Les hommes sont à 48% pour le nettoyage du four, 55% pour les sanitaires et 66% pour la cuisine.";
  return (
    <div className="flex flex-col items-center text-center mx-20">
      <h1 className="text-[#4B4B4B] font-bold text-xl my-10">
        Quelle est la tâche ménagère la moins prise en charge par les hommes ?
      </h1>
      {quizState == "question" ? (
        <>
          <QuizAnswerWrapper />
          <VerifiedButton
            setVerified={() => {
              setQuizState("right");
            }}
          />
        </>
      ) : (
        <>
          <QuizAnswerResult
            rightAnswer="Le repassage"
            wrongAnswer="Le nettoyage du four"
          />
          <QuizAnswerDescription description={description} sourceLink="" />
        </>
      )}
    </div>
  );
};

export default QuizWrapper;
