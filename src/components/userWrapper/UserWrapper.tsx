import BadgeWrapper from "./badgeWrapper/BadgeWrapper";
import StatisticsWrapper from "./statisticsWrapper/StatisticsWrapper";
import { exportComponentAsPNG } from "react-component-export-image";
import { useRef } from "react";

const UserWrapper = ({
  userXP,
  userNbQuestions,
  userNbLevels,
}: {
  userXP: number;
  userNbQuestions: number;
  userNbLevels: number;
}) => {
  const userWrapperRef: any = useRef();
  return (
    <>
      <div
        className="flex flex-col md:flex-row lg:-space-x-40 xl:-space-x-96"
        ref={userWrapperRef}
      >
        <StatisticsWrapper
          userXP={userXP}
          userNbLevels={userNbLevels}
          userNbQuestions={userNbQuestions}
        />
        <BadgeWrapper />
      </div>
      <div className="mx-auto h-[50px] w-[250px] mt-4 bg-[#C4FD7C] text-center rounded-xl">
        <button
          onClick={() => exportComponentAsPNG(userWrapperRef)}
          className="flex items-center justify-center w-full h-full"
        >
          <p className="text-[#433] text-md font-bold mr-1">
            Télécharger les scores
          </p>
        </button>
      </div>
    </>
  );
};

export default UserWrapper;
