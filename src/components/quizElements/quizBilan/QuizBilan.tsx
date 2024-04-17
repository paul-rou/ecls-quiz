import Link from "next/link";
import EndButton from "../endButton/EndButton";
import BilanCard from "./bilanCard/BilanCard";
import ThemeCard from "@/components/themeCard/ThemeCard";
import {
  getUserExperienceByThemeByLevel,
  setUserLevelExperience,
  updateUserScore,
} from "@/lib/localStorageUserInteraction";
import { useEffect, useState } from "react";
import DifficultyBilanCard from "@/components/difficultyElements/difficultyBilanCard/DifficultyBilanCard";
import { getDifficultyIndex } from "@/lib/difficultyMapping";
import Image from "next/image";
import { getBadgeLogoByName } from "@/lib/nameOfThemesList";

interface Props {
  score: number;
  numberOfQuestions: number;
  xpGained: number;
  themeName: string;
  themeLogo: string;
  difficulty: string;
  setEndQuiz: () => void;
}

const QuizBilan = ({
  score,
  numberOfQuestions,
  xpGained,
  themeName,
  themeLogo,
  difficulty,
  setEndQuiz,
}: Props) => {
  const [winBadge, setWinBadge] = useState(false);
  const [showBadgeScreen, setShowBadgeScreen] = useState(false);
  const difficultyIndex = getDifficultyIndex(difficulty);
  // On est dans un cas de SSR, useEffect tourne côté client, localStorage est donc défini
  useEffect(() => {
    const levelsExperience = getUserExperienceByThemeByLevel(themeName);
    if (score == numberOfQuestions && levelsExperience[difficultyIndex] == 0) {
      let varWin = true;
      levelsExperience.splice(difficultyIndex, 1);
      levelsExperience.forEach((levelExperience: number) => {
        if (levelExperience == 0) {
          varWin = false;
        }
      });
      if (varWin) setWinBadge(true);
    }
    updateUserScore(String(xpGained), String(score));
    if (numberOfQuestions == score)
      setUserLevelExperience(themeName, difficultyIndex);
  }, []);
  if (showBadgeScreen) {
    return (
      <div className="flex flex-col mt-5 items-center text-center [font-family:'Inter-Bold', Helvetica] space-y-10">
        <h1 className="text-[#4B4B4B] font-bold text-xl">
          Nouveau badge obtenu !
        </h1>
        <Image
          src={getBadgeLogoByName(themeName) ?? ""}
          alt="badge logo of the theme"
          width={200}
          height={200}
        />
        <div className="flex flex-col gap-2">
          <h2 className="text-[#4B4B4B] font-bold text-md">
            Expert.e {themeName}
          </h2>
          <p className="text-[#4B4B4B] font-medium text-sm">
            Félicitations, tous les niveaux du module {themeName} ont été
            validés
          </p>
        </div>

        <Link href="/">
          <EndButton
            setEndQuiz={() => {
              setEndQuiz();
            }}
          />
        </Link>
      </div>
    );
  } else {
    return (
      <div className="flex flex-col mt-5 items-center text-center [font-family:'Inter-Bold', Helvetica] space-y-10">
        <h1 className="text-[#4B4B4B] font-bold text-xl">
          Bilan de la session
        </h1>
        <div className="flex flex-col gap-3">
          <ThemeCard themeName={themeName} themeLogo={themeLogo} />
          <DifficultyBilanCard difficulty={difficulty} />
        </div>
        <div className="flex flex-row lg:space-x-48 md:space-x-24 space-x-5">
          <BilanCard
            type="score"
            content={`Bonnes réponses : ${score}/${numberOfQuestions}`}
          />
          <BilanCard type="xp" content={`Expérience obtenue : ${xpGained}`} />
        </div>
        {winBadge ? (
          <EndButton
            setEndQuiz={() => {
              setShowBadgeScreen(true);
              setEndQuiz();
            }}
          />
        ) : (
          <Link href="/">
            <EndButton
              setEndQuiz={() => {
                setEndQuiz();
              }}
            />
          </Link>
        )}
      </div>
    );
  }
};

export default QuizBilan;
