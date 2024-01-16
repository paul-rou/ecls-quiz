const EndButton = ({ setEndQuiz }: { setEndQuiz: () => void }) => {
  return (
    <div className="h-[60px] w-[300px] mt-4 bg-[#C4FD7C] text-center rounded-3xl">
      <button
        onClick={() => setEndQuiz()}
        className="flex items-center justify-center w-full h-full"
      >
        <p className="text-[#433] text-xl font-bold mr-1">TERMINER</p>
      </button>
    </div>
  );
};

export default EndButton;
