import Image from "next/image";
import ThemeList from "../components/ThemeList/ThemeList";

export default function Home() {
  const listOfThemes = [
    "Inégalités au travail",
    "Arts & Culture",
    "Droit",
    "Vie familiale",
    "Espace public",
    "Autre",
  ];
  return (
    <div className="flex flex-col text-center">
      <h1>Sur quel thème désirez-vous jouer ?</h1>
      <ThemeList listOfThemes={listOfThemes} />
      <button>Continuer</button>
    </div>
  );
}
