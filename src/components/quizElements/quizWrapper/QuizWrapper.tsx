"use client";

import QuizAnswerWrapper from "../quizAnswerWrapper/QuizAnswerWrapper";
import VerifiedButton from "../verifiedButton/VerifiedButton";

// !! la question est pour l'instant hardcodées, il faudra la passer en props plus tard
const QuizWrapper = () => {
  return (
    <div className="flex flex-col items-center text-center mx-20">
      <h1 className="text-[#4B4B4B] font-bold text-xl my-10">
        Quelle est la tâche ménagère la moins prise en charge par les hommes ?
      </h1>
      <QuizAnswerWrapper />
      <VerifiedButton setVerified={() => {}} />
    </div>
  );
};

export default QuizWrapper;
