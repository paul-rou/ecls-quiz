const DifficultyBilanCard = ({ difficulty }: { difficulty: string }) => {
  let difficultyColor = "";
  switch (difficulty) {
    case "Facile":
      difficultyColor = "green-500";
      break;
    case "Moyen":
      difficultyColor = "yellow-500";
      break;
    case "Difficile":
      difficultyColor = "red-500";
      break;
  }
  return (
    <div
      className={`inline-flex items-center gap-[10px] h-[35px] py-[8px] bg-[#FFF] border-[2px] rounded-[12px]`}
    >
      <div className={`h-5 w-5 ml-auto rounded-full bg-${difficultyColor}`} />
      <p className={`font-bold mr-auto text-sm text-[#4B4B4B]`}>{difficulty}</p>
    </div>
  );
};

export default DifficultyBilanCard;
