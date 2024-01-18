"use client";

import { useEffect, useState } from "react";
import QuizAnswerWrapper from "../quizAnswerWrapper/QuizAnswerWrapper";
import VerifiedButton from "../verifiedButton/VerifiedButton";
import QuizAnswerResult from "../quizAnswerResult/QuizAnswerResult";
import QuizAnswerDescription from "../quiAnswerDescription/QuizAnswerDescription";
import { Question } from "@/types/quizTypes";
import NextButton from "../nextButton/NextButton";
import getNextQuestion from "@/lib/dummyScript";
import QuizBilan from "../quizBilan/QuizBilan";
import vieFamiliale from "../../../../public/theme-svg/vie-familiale.svg";

type QuizState = {
  isAnswered: Boolean;
  answerIndex: number;
  questionIndex: number;
  score: number;
  isCompleted: Boolean;
};

// Pour l'instant, nous importons l'ensemble des questions, contenant à la fois
// le contenu des réponses mais également la bonne réponse, ce qui peut être dérangeant
// si un petit malin décide d'aller fouiller dans le code source.
// Une bonne approche dans un second temps serait de ne fetch que les réponses et de
// créer une fonction prenant en paramètre la réponse choisie, elle retournerait un booléen via
// un fetch à la DB selon si la réponse est correcte ou non.
// !! la question est pour l'instant hardcodée, il faudra la passer en props plus tard
const QuizWrapper = () => {
  // !! Hardcodé pour l'instant
  const numberOfQuestions = 5;
  const [quizState, setQuizState] = useState<QuizState>({
    isAnswered: false,
    answerIndex: -1,
    questionIndex: 0,
    score: 0,
    isCompleted: false,
  });
  const [question, setQuestion] = useState<Question>(getNextQuestion(0));
  useEffect(() => {
    const nextQuestion = getNextQuestion(quizState.questionIndex);
    setQuestion(nextQuestion);
  }, [quizState.questionIndex]);
  return (
    <div className="flex flex-col items-center text-center mx-20">
      {!quizState.isCompleted ? (
        <h1 className="text-[#4B4B4B] font-bold text-xl my-10">
          {question.question}
        </h1>
      ) : (
        <></>
      )}
      {quizState.isCompleted ? (
        <QuizBilan
          score={quizState.score}
          numberOfQuestions={numberOfQuestions}
          xpGained={15}
          themeName={"Vie Familiale"}
          themeLogo={vieFamiliale}
          setEndQuiz={() => {
            setQuizState({
              isAnswered: false,
              answerIndex: -1,
              questionIndex: 0,
              score: 0,
              isCompleted: false,
            });
          }}
        />
      ) : !quizState.isAnswered ? (
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
              setQuizState({
                ...quizState,
                isAnswered: true,
                score:
                  question.correctAnswer == quizState.answerIndex
                    ? quizState.score + 1
                    : quizState.score,
              });
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
                ...quizState,
                isAnswered: false,
                answerIndex: -1,
                questionIndex: quizState.questionIndex + 1,
                isCompleted: quizState.questionIndex + 1 == numberOfQuestions,
              });
            }}
          />
        </>
      )}
      <div className="ml-auto mt-[-25px] text-[#4B4B4B] font-bold text-xl">
        {Math.min(quizState.questionIndex + 1, numberOfQuestions)}/
        {numberOfQuestions}
      </div>
    </div>
  );
};

export default QuizWrapper;
