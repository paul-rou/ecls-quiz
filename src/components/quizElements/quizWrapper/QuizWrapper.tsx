"use client";

import { useState } from "react";
import QuizAnswerWrapper from "../quizAnswerWrapper/QuizAnswerWrapper";
import VerifiedButton from "../verifiedButton/VerifiedButton";
import QuizAnswerResult from "../quizAnswerResult/QuizAnswerResult";
import QuizAnswerDescription from "../quiAnswerDescription/QuizAnswerDescription";
import question from "../../../../temp_quiz_data/question.json";
import { Question } from "@/types/quizTypes";
import NextButton from "../nextButton/NextButton";

type QuizState = {
  isAnswered: Boolean;
  answerIndex: number;
};

// !! la question est pour l'instant hardcodée, il faudra la passer en props plus tard
const QuizWrapper = () => {
  const [quizState, setQuizState] = useState<QuizState>({
    isAnswered: false,
    answerIndex: -1,
  });
  const questionData: Question = {
    question: question.question,
    answers: question.answers,
    correctAnswer: question.correctAnswer,
    description: question.description,
    source: question.source,
  };
  return (
    <div className="flex flex-col items-center text-center mx-20">
      <h1 className="text-[#4B4B4B] font-bold text-xl my-10">
        {questionData.question}
      </h1>
      {!quizState.isAnswered ? (
        <>
          <QuizAnswerWrapper
            answers={questionData.answers}
            selectedAnswer={quizState.answerIndex}
            setSelectedAnswer={(index: number) => {
              setQuizState({ ...quizState, answerIndex: index });
            }}
          />
          <VerifiedButton
            setVerified={() => {
              setQuizState({ ...quizState, isAnswered: true });
            }}
          />
        </>
      ) : (
        <>
          <QuizAnswerResult
            rightAnswer={questionData.answers[questionData.correctAnswer]}
            wrongAnswer={
              questionData.correctAnswer == quizState.answerIndex
                ? ""
                : questionData.answers[quizState.answerIndex]
            }
          />
          <QuizAnswerDescription
            description={questionData.description}
            sourceLink={questionData.source}
          />
          <NextButton setNextQuestion={() => {}} />
        </>
      )}
    </div>
  );
};

export default QuizWrapper;
