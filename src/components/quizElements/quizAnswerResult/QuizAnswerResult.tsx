import QuizAnswerCard from "../quizAnswerCard/QuizAnswerCard";

const QuizAnswerResult = ({
  rightAnswer,
  wrongAnswer,
}: {
  rightAnswer: string;
  wrongAnswer: string;
}) => {
  const isRight = wrongAnswer == "";
  return (
    <div className={`flex gap-8`}>
      <QuizAnswerCard answerContent={rightAnswer} isRight />
      {!isRight ? (
        <QuizAnswerCard answerContent={wrongAnswer} isRight={false} />
      ) : null}
    </div>
  );
};

export default QuizAnswerResult;
