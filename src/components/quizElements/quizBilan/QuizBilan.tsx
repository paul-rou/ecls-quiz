import BilanCard from "./bilanCard/BilanCard";
import ThemeCard from "@/components/themeCard/ThemeCard";

interface Props {
  score: number;
  nbQuestions: number;
  xpGained: number;
  themeName: string;
  themeLogo: string;
}

const QuizBilan = ({
  score,
  nbQuestions,
  xpGained,
  themeName,
  themeLogo,
}: Props) => {
  return (
    <div className="flex flex-col mt-5 items-center text-center [font-family:'Inter-Bold', Helvetica] space-y-10">
      <h1 className="font-bold text-xl">Bilan de la session</h1>
      <ThemeCard themeName={themeName} themeLogo={themeLogo} />
      <div className="flex flex-row lg:space-x-48 md:space-x-24 space-x-5">
        <BilanCard
          type="score"
          content={`Bonnes réponses : ${score}/${nbQuestions}`}
        />
        <BilanCard type="xp" content={`Expérience obtenue : ${xpGained}`} />
      </div>
      {/*Ajouter un NextButton pour utiliser les states de QuizWrapper*/}
    </div>
  );
};

export default QuizBilan;
