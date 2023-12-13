import { useState } from "react";
import QuizCard from "../quizCard/QuizCard";

// !! Les props pour les réponses sont pour l'instant hardcodées
const QuizAnswerWrapper = () => {
  const answerContentList = [
    "Le repassage",
    "La cuisine",
    "Le nettoyage des sanitaires",
    "Le nettoyage du four",
  ];
  const [selectedAnswer, setSelectedAnswer] = useState<number | undefined>();
  return (
    <div className="grid grid-cols-2 gap-2 w-full">
      {answerContentList.map((answerContent, index) => (
        <QuizCard
          answerContent={answerContent}
          selected={selectedAnswer == index}
          setSelected={() => setSelectedAnswer(index)}
          key={index}
        />
      ))}
    </div>
  );
};

export default QuizAnswerWrapper;
