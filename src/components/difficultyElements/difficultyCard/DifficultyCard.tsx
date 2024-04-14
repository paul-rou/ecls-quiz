import React from "react";
import Image from "next/image";
import Link from "next/link";

interface Props {
  content: string;
  altLogo: string;
  position: string;
}

const DifficultyCard = ({ content, altLogo, position }: Props) => {
  // On arrondit les bords du bloc différement en fonction de sa position
  let roundedClass = "";
  let difficultyColor = "";

  if (position === "bot") {
    roundedClass = "rounded-[0px_0px_16px_16px]";
  } else if (position === "top") {
    roundedClass = "rounded-[16px_16px_0px_0px]";
  }

  switch (content) {
    case "Facile":
      difficultyColor = "bg-green-500";
      break;
    case "Moyen":
      difficultyColor = "bg-yellow-500";
      break;
    case "Difficile":
      difficultyColor = "bg-red-500";
      break;
  }

  return (
    <Link
      href={`/quiz?theme=${encodeURIComponent(
        altLogo
      )}&difficulty=${encodeURIComponent(content)}`}
    >
      <div
        className={
          "flex w-[394px] items-center justify-center pl-[20px] pr-[20px] py-[20px] relative"
        }
      >
        <div
          className={
            "absolute w-[394px] h-[74px] ${roundedClass} border-t-2 border-t-solid border-r-2 border-r-solid border-l-2 border-l-solid border-b-2 border-b-solid bg-white border-slate-200"
          }
        />
        <div className="inline-flex max-w-[303.38px] items-center justify-center pl-0 pr-0 py-0 relative flex-[0_0_auto] mr-[-1.00px]">
          <div className={"h-5 w-5 mr-2 rounded-full " + difficultyColor} />
          <div className="relative w-fit font-bold text-[#4b4b4b] text-sm tracking-wide leading-[20px] whitespace-nowrap">
            {content}
          </div>
        </div>
      </div>
    </Link>
  );
};

export default DifficultyCard;
