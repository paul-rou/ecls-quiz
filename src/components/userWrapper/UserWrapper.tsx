import BadgeWrapper from "./badgeWrapper/BadgeWrapper";
import StatisticsWrapper from "./statisticsWrapper/StatisticsWrapper";

const UserWrapper = ({
  userXP,
  userNbQuestions,
  userNbLevels,
}: {
  userXP: number;
  userNbQuestions: number;
  userNbLevels: number;
}) => {
  return (
    <div className="flex flex-col md:flex-row lg:-space-x-40 xl:-space-x-96">
      <StatisticsWrapper
        userXP={userXP}
        userNbLevels={userNbLevels}
        userNbQuestions={userNbQuestions}
      />
      <BadgeWrapper />
    </div>
  );
};

export default UserWrapper;
