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
    <div className="flex flex-col justify-center space-y-6 mt-5 items-center w-full h-full">
      <div className="h-[26px] font-bold text-[#3c3c3c] text-lg tracking-[0] leading-[26px] whitespace-nowrap">
        Statistiques
      </div>
      <div title="Vous gagnez 4 points d'expérience par bonne réponse, amélioré à 5 par question si vous réussissez toutes les questions du niveau !">
        <StatisticsCard
          statName="Expérience totale"
          statValue={userXP}
          statImage={userXPicon}
        />
      </div>
      <div title="Nombre de questions où vous avez répondu correctement">
        <StatisticsCard
          statName="Questions réussies"
          statValue={userNbQuestions}
          statImage={userQuestionsIcon}
        />
      </div>
      <div title="Nombre de niveaux où vous avez répondu correctement à toutes les questions">
        <StatisticsCard
          statName="Niveaux complétés"
          statValue={userNbLevels}
          statImage={userLevelsIcon}
        />
      </div>
    </div>
  );
};

export default StatisticsWrapper;
