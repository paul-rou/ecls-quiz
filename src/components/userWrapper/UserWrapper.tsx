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
    <div>
      <StatisticsWrapper
        userXP={userXP}
        userNbLevels={userNbLevels}
        userNbQuestions={userNbQuestions}
      />
    </div>
  );
};

export default UserWrapper;
