import React from "react";
import Image from "next/image";
import Link from "next/link";
import { CircularProgress } from "@chakra-ui/react";
import checkboxIcon from "../../../../public/checkboxIcon.svg";

interface Props {
  content: string;
  altLogo: string;
  themeLogo: string;
  position: string;
  setSelected: () => void;
  isSelected: boolean;
  isMobile: boolean;
  levelExperience: number;
}

const MapChoiceCard = ({
  content,
  altLogo,
  themeLogo,
  position,
  setSelected,
  isSelected,
  isMobile,
  levelExperience,
}: Props) => {
  // On arrondit les bords du bloc différement en fonction de sa position
  let roundedClass = "";

  if (position === "bot") {
    roundedClass = "rounded-[0px_0px_16px_16px]";
  } else if (position === "top") {
    roundedClass = "rounded-[16px_16px_0px_0px]";
  }

  if (isMobile) {
    return (
      <Link href={`/difficulty?theme=${encodeURIComponent(altLogo)}`}>
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
            <Image
              src={themeLogo}
              alt={altLogo}
              width={32}
              height={32}
              className="mr-1"
            />
            <div className="relative w-fit font-bold text-[#4b4b4b] text-sm tracking-wide leading-[20px] whitespace-nowrap">
              {content}
            </div>
            {levelExperience < 100 ? (
              <CircularProgress
                className="ml-2"
                value={levelExperience}
                size="30px"
              />
            ) : (
              <Image src={checkboxIcon} alt={"checkbox icon"} />
            )}
          </div>
        </div>
      </Link>
    );
  } else {
    return (
      <button onClick={() => setSelected()}>
        <div
          className={`flex w-[394px] items-center justify-center pl-[20px] pr-[20px] py-[20px] relative ${
            isSelected ? "z-10" : ""
          }`}
        >
          <div
            className={`absolute w-[394px] h-[74px] ${roundedClass} border-t-2 border-t-solid border-r-2 border-r-solid border-l-2 border-l-solid 
          border-b-2 border-b-solid 
          ${
            isSelected
              ? "bg-gray-100 border-sky-900"
              : "bg-white border-slate-200"
          }`}
          />
          <div className="inline-flex max-w-[303.38px] items-center justify-center pl-0 pr-0 py-0 relative flex-[0_0_auto] mr-[-1.00px]">
            <Image
              src={themeLogo}
              alt={altLogo}
              width={32}
              height={32}
              className="mr-1"
            />
            <div className="relative w-fit font-semibold text-[#4b4b4b] text-sm tracking-wide leading-[20px] whitespace-nowrap">
              {content}
            </div>
            {levelExperience < 100 ? (
              <CircularProgress
                className="ml-2"
                value={levelExperience}
                size="30px"
              />
            ) : (
              <Image
                src={checkboxIcon}
                className="ml-2"
                alt={"checkbox icon"}
                width={30}
                height={30}
              />
            )}
          </div>
        </div>
      </button>
    );
  }
};

export default MapChoiceCard;
