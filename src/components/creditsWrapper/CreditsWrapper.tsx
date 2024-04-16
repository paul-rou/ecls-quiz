import sun from "../../../public/Sun_Icon.svg";
import idea from "../../../public/Idea_Icon.svg";
import pen from "../../../public/Edit_Icon.svg";
import code from "../../../public/Code_Icon.svg";

import StatisticsCard from "../userWrapper/statisticsCard/StatisticsCard";

const CreditsWrapper = ({}: {}) => {
  const remerciements = [];
  return (
    <div className="flex flex-col justify-center space-y-4 mt-5 items-center w-full h-full">
      <div className="h-[26px] font-bold text-[#3c3c3c] text-lg tracking-[0] leading-[26px] whitespace-nowrap">
        Remerciements
      </div>
      <div className="flex flex-row justify-center space-x-4">
        <div className="flex flex-col justify-center space-y-3">
          <StatisticsCard
            statName="Coordinatrice Projet"
            statValue="Isabelle Dumont"
            statImage={sun}
          />
          <StatisticsCard
            statName="Encadrante technique"
            statValue="Marie Gautron"
            statImage={idea}
          />
          <StatisticsCard
            statName="Encadrant projet"
            statValue="Laurent Cabaret"
            statImage={idea}
          />
          <StatisticsCard
            statName="Contributrice"
            statValue="Marie-Noëlle Bas"
            statImage={pen}
          />
        </div>
        <div className="flex flex-col justify-center space-y-3">
          <StatisticsCard
            statName="Développeur"
            statValue="Cyprien Pierrot"
            statImage={code}
          />
          <StatisticsCard
            statName="Développeur"
            statValue="Paul Rousseau"
            statImage={code}
          />
          <StatisticsCard
            statName="Contributrice"
            statValue="Gabriela Belaid"
            statImage={pen}
          />
          <StatisticsCard
            statName="Contributrice"
            statValue="Sarah Mantah"
            statImage={pen}
          />
        </div>
        <div className="flex flex-col justify-center space-y-3">
          <StatisticsCard
            statName="Contributrice"
            statValue="Sophie Bourel"
            statImage={pen}
          />
          <StatisticsCard
            statName="Contributrice"
            statValue="Sigrid Trendel"
            statImage={pen}
          />
          <StatisticsCard
            statName="Contributeur"
            statValue="Pierre-Yves Ginet"
            statImage={pen}
          />
          <StatisticsCard
            statName="Contributrice"
            statValue="Anne-Marie Jonquière"
            statImage={pen}
          />
        </div>
        <div className="flex flex-col justify-center space-y-3">
          <StatisticsCard
            statName="Contributrice"
            statValue="Brigitte Gresy"
            statImage={pen}
          />
          <StatisticsCard
            statName="Contributrice"
            statValue="Violaine De Filippis"
            statImage={pen}
          />
          <StatisticsCard
            statName="Contributrice"
            statValue="Moïra Sauvage"
            statImage={pen}
          />
          <StatisticsCard
            statName="Contributrice"
            statValue="AAFA"
            statImage={pen}
          />
        </div>
      </div>
    </div>
  );
};

export default CreditsWrapper;
