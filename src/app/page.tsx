import ThemeList from "../components/ThemeList/ThemeList";
import NavBar from "@/components/navBar/NavBar";

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
    <>
      <NavBar />
    </>
  );
}
