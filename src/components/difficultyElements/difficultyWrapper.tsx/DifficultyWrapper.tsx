import DifficultyCard from "../difficultyCard/DifficultyCard";

const DifficultyWrapper = ({ altLogo }: { altLogo: string }) => {
  return (
    <div className="flex flex-col items-center text-center md:mx-20 mx-2">
      <h1 className="text-[#4B4B4B] font-bold text-xl md:my-10 my-4">
        Choisissez un niveau de difficulté
      </h1>
      <DifficultyCard content={"Facile"} altLogo={altLogo} position={"top"} />
      <DifficultyCard content={"Moyen"} altLogo={altLogo} position={"mid"} />
      <DifficultyCard
        content={"Difficile"}
        altLogo={altLogo}
        position={"bot"}
      />
    </div>
  );
};

export default DifficultyWrapper;
