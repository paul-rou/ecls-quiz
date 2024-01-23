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
    <button
      onClick={() => setSelected()}
      className={`flex h-[200px] justify-center items-center text-center bg-[#FFF]
      ${
        selected ? "border-[#84D8FF] border-[5px]" : "border-[#E5E5E5]"
      } hover:bg-[#f1f1f1] border-[2px] rounded-xl shadow-0.5sm select-none`}
    >
      <p className="text-[#4B4B4B] font-bold md:text-xl text-lg">
        {answerContent}
      </p>
    </button>
  );
};

export default QuizCard;
