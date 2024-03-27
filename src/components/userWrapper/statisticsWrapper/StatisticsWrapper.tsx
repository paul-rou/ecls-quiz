import StatisticsCard from "../statisticsCard/StatisticsCard";
import userXPicon from "../../../../public/userXPicon.svg";
import userQuestionsIcon from "../../../../public/userQuestionsIcon.svg";
import userLevelsIcon from "../../../../public/userLevelsIcon.svg";

const StatisticsWrapper = ({
  userXP,
  userNbQuestions,
  userNbLevels,
}: {
  userXP: number;
  userNbQuestions: number;
  userNbLevels: number;
}) => {
  return (
    <div className="flex flex-col justify-center space-y-4 mt-5 items-center w-full h-full">
      <div className="h-[26px] font-bold text-[#3c3c3c] text-lg tracking-[0] leading-[26px] whitespace-nowrap">
        Statistiques
      </div>
      <StatisticsCard
        statName="Expérience totale"
        statValue={userXP}
        statImage={userXPicon}
      />
      <StatisticsCard
        statName="Questions réussies"
        statValue={userNbQuestions}
        statImage={userQuestionsIcon}
      />
      <StatisticsCard
        statName="Niveaux complétés"
        statValue={userNbLevels}
        statImage={userLevelsIcon}
      />
    </div>
  );
};

export default StatisticsWrapper;
