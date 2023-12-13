const QuizCard = ({ answerContent }: { answerContent: string }) => {
  return (
    <div className="flex h-40 justify-center items-center bg-[#FFF] border-[2px] border-[#E5E5E5] rounded-xl shadow-0.5sm">
      <p className="text-[#4B4B4B] font-bold text-xl">{answerContent}</p>
    </div>
  );
};

export default QuizCard;
