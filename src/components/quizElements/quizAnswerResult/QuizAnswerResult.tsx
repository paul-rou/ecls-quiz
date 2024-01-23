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
    <div className={`flex md:flex-row flex-col w-full md:gap-8 gap-4`}>
      <QuizAnswerCard answerContent={rightAnswer} isRight />
      {!isRight ? (
        <QuizAnswerCard answerContent={wrongAnswer} isRight={false} />
      ) : null}
    </div>
  );
};

export default QuizAnswerResult;
