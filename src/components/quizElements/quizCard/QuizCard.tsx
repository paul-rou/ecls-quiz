const QuizCard = ({
  answerContent,
  selected,
  setSelected,
}: {
  answerContent: string;
  selected: boolean;
  setSelected: () => void;
}) => {
  return (
    <div
      onClick={() => setSelected()}
      className={`flex h-40 justify-center items-center text-center bg-[#FFF]
      ${
        selected ? "border-[#84D8FF]" : "border-[#E5E5E5]"
      } hover:bg-[#f5f5f5] border-[2px] rounded-xl shadow-0.5sm select-none`}
    >
      <p className="text-[#4B4B4B] font-bold text-xl">{answerContent}</p>
    </div>
  );
};

export default QuizCard;
