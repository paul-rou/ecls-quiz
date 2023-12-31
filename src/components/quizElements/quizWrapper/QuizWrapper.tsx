"use client";

import { useEffect, useState } from "react";
import QuizAnswerWrapper from "../quizAnswerWrapper/QuizAnswerWrapper";
import VerifiedButton from "../verifiedButton/VerifiedButton";
import QuizAnswerResult from "../quizAnswerResult/QuizAnswerResult";
import QuizAnswerDescription from "../quiAnswerDescription/QuizAnswerDescription";
import { Question } from "@/types/quizTypes";
import NextButton from "../nextButton/NextButton";
import getNextQuestion from "@/lib/dummyScript";

type QuizState = {
  isAnswered: Boolean;
  answerIndex: number;
  questionIndex: number;
};

// Pour l'instant, nous importons l'ensemble des questions, contenant à la fois
// le contenu des réponses mais également la bonne réponse, ce qui peut être dérangeant
// si un petit malin décide d'aller fouiller dans le code source.
// Une bonne approche dans un second temps serait de ne fetch que les réponses et de
// créer une fonction prenant en paramètre la réponse choisie, elle retournerait un booléen via
// un fetch à la DB selon si la réponse est correcte ou non.
// !! la question est pour l'instant hardcodée, il faudra la passer en props plus tard
const QuizWrapper = () => {
  const [quizState, setQuizState] = useState<QuizState>({
    isAnswered: false,
    answerIndex: -1,
    questionIndex: 0,
  });
  const [question, setQuestion] = useState<Question>(getNextQuestion(0));
  useEffect(() => {
    const nextQuestion = getNextQuestion(quizState.questionIndex);
    setQuestion(nextQuestion);
  }, [quizState.questionIndex]);
  return (
    <div className="flex flex-col items-center text-center mx-20">
      <h1 className="text-[#4B4B4B] font-bold text-xl my-10">
        {question.question}
      </h1>
      {!quizState.isAnswered ? (
        <>
          <QuizAnswerWrapper
            answers={question.answers}
            selectedAnswer={quizState.answerIndex}
            setSelectedAnswer={(index: number) => {
              setQuizState({ ...quizState, answerIndex: index });
            }}
          />
          <VerifiedButton
            setVerified={() => {
              if (quizState.answerIndex == -1) return;
              setQuizState({ ...quizState, isAnswered: true });
            }}
          />
        </>
      ) : (
        <>
          <QuizAnswerResult
            rightAnswer={question.answers[question.correctAnswer]}
            wrongAnswer={
              question.correctAnswer == quizState.answerIndex
                ? ""
                : question.answers[quizState.answerIndex]
            }
          />
          <QuizAnswerDescription
            description={question.description}
            sourceLink={question.source}
          />
          <NextButton
            setNextQuestion={() => {
              setQuizState({
                isAnswered: false,
                answerIndex: -1,
                questionIndex: quizState.questionIndex + 1,
              });
            }}
          />
        </>
      )}
    </div>
  );
};

export default QuizWrapper;
