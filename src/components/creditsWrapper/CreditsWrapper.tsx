import sun from "../../../public/Sun_Icon.svg";
import idea from "../../../public/Idea_Icon.svg";
import pen from "../../../public/Edit_Icon.svg";
import code from "../../../public/Code_Icon.svg";
import Link from "next/link";

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
          <Link href="https://isavouszed.fr/" target="_blank">
            <StatisticsCard
              statName="Coordinatrice Projet"
              statValue="Isabelle Dumont"
              statImage={sun}
            />
          </Link>

          <Link href="https://www.linkedin.com/in/mariegautron" target="_blank">
            <StatisticsCard
              statName="Encadrante technique"
              statValue="Marie Gautron"
              statImage={idea}
            />
          </Link>
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
          <Link
            href="https://www.linkedin.com/in/cyprien-pierrot/"
            target="_blank"
          >
            <StatisticsCard
              statName="Développeur"
              statValue="Cyprien Pierrot"
              statImage={code}
            />
          </Link>
          <Link
            href="https://www.linkedin.com/in/paul--rousseau/"
            target="_blank"
          >
            <StatisticsCard
              statName="Développeur"
              statValue="Paul Rousseau"
              statImage={code}
            />
          </Link>
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
          <Link href="https://www.latitudes.cc/" target="_blank">
            <StatisticsCard
              statName="Contributeurs.trices"
              statValue="Association Latitudes"
              statImage={pen}
            />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CreditsWrapper;
