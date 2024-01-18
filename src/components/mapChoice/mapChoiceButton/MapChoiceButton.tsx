import Image from "next/image";
import nextIcon from "../../../../public/next-icon.svg";

const MapChoiceButton = () => {
  return (
    <div className="h-[60px] w-[300px] mt-4 bg-[#C4FD7C] text-center rounded-3xl">
      <button className="flex items-center justify-center w-full h-full">
        <p className="text-[#433] text-xl font-bold mr-1">VALIDER</p>
        <Image
          src={nextIcon}
          alt="Valider la sélection"
          width={32}
          height={32}
        />
      </button>
    </div>
  );
};

export default MapChoiceButton;
