"use client";

import { useEffect, useState } from "react";
import QuizAnswerWrapper from "../quizAnswerWrapper/QuizAnswerWrapper";
import VerifiedButton from "../verifiedButton/VerifiedButton";
import QuizAnswerResult from "../quizAnswerResult/QuizAnswerResult";
import QuizAnswerDescription from "../quiAnswerDescription/QuizAnswerDescription";
import { Question } from "@/types/quizTypes";
import NextButton from "../nextButton/NextButton";
import QuizBilan from "../quizBilan/QuizBilan";
import droit from "../../../../public/theme-svg/droit.svg";

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
// Sinon, il faudrait chiffrer les réponses et les déchiffrer côté client au moment où l'on en a besoin
const QuizWrapper = ({
  themeNameToShow,
  themeName,
  themeLogo,
}: {
  themeNameToShow?: string;
  themeName?: string;
  themeLogo?: string;
}) => {
  // !! Hardcodé pour l'instant
  const [numberOfQuestions, setNumberOfQuestions] = useState<number>(5);
  const [quizState, setQuizState] = useState<QuizState>({
    isAnswered: false,
    answerIndex: -1,
    questionIndex: 0,
    score: 0,
    isCompleted: false,
  });
  const [question, setQuestion] = useState<Question>();
  const [questions, setQuestions] = useState<Question[]>([]);

  useEffect(() => {
    const params = new URLSearchParams({
      themeName: themeName ?? "Droit",
      numberOfQuestions: String(numberOfQuestions),
    });

    fetch(`/api/baserow?${params}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json()) // Add return here
      .then((records: Question[]) => {
        setQuestions(records);
        console.log(records, "records");
        if (records.length < numberOfQuestions) {
          setNumberOfQuestions(records.length);
        }
      });
  }, []);

  useEffect(() => {
    if (questions && quizState.questionIndex < numberOfQuestions) {
      const nextQuestion = questions[quizState.questionIndex];
      setQuestion(nextQuestion);
    }
  }, [quizState.questionIndex, questions]);

  if (!question)
    return (
      <p className="m-4 text-[#4B4B4B] font-bold text-xl">
        Chargement du quiz...
      </p>
    );
  return (
    <div className="flex flex-col items-center text-center md:mx-20 mx-3">
      {!quizState.isCompleted ? (
        <h1 className="text-[#4B4B4B] font-bold md:text-xl text-lg md:my-10 my-4">
          {question.question}
        </h1>
      ) : (
        <></>
      )}
      {quizState.isCompleted ? (
        <QuizBilan
          score={quizState.score}
          numberOfQuestions={numberOfQuestions}
          xpGained={
            quizState.score === numberOfQuestions
              ? 5 * quizState.score
              : 4 * quizState.score
          }
          themeName={themeNameToShow ?? "Droit"}
          themeLogo={themeLogo ?? droit}
          setEndQuiz={() => {
            /*             setQuizState({
              isAnswered: false,
              answerIndex: -1,
              questionIndex: 0,
              score: 0,
              isCompleted: false,
            }); */
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
            wrongAnswer={
              question.correctAnswer == quizState.answerIndex
                ? ""
                : question.answers[quizState.answerIndex]
            }
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
      <div className="md:ml-auto md:mt-[-25px] md:mb-0 mt-2 mb-2 text-[#4B4B4B] font-bold text-xl">
        {Math.min(quizState.questionIndex + 1, numberOfQuestions)}/
        {numberOfQuestions}
      </div>
    </div>
  );
};

export default QuizWrapper;
