import QuizCard from "../quizCard/QuizCard";

// !! Les props pour les réponses sont pour l'instant hardcodées
const QuizAnswerWrapper = () => {
  return (
    <div className="grid grid-cols-2 gap-2">
      <QuizCard answerContent="Le repassage" />
      <QuizCard answerContent="La cuisine" />
      <QuizCard answerContent="Le nettoyage des sanitaires" />
      <QuizCard answerContent="Le nettoyage du four" />
    </div>
  );
};

export default QuizAnswerWrapper;
