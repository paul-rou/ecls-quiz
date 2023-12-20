import { useState } from "react";
import QuizCard from "../quizCard/QuizCard";

interface QuizAnswerWrapperProps {
  answers: string[];
  selectedAnswer: number;
  setSelectedAnswer: (index: number) => void;
}

// !! Les props pour les réponses sont pour l'instant hardcodées
const QuizAnswerWrapper = (props: QuizAnswerWrapperProps) => {
  return (
    <div className="grid grid-cols-2 gap-2 w-full">
      {props.answers.map((answerContent, index) => (
        <QuizCard
          answerContent={answerContent}
          selected={props.selectedAnswer == index}
          setSelected={() => {
            props.setSelectedAnswer(index);
          }}
          key={index}
        />
      ))}
    </div>
  );
};

export default QuizAnswerWrapper;
