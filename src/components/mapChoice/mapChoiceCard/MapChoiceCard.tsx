import React from "react";
import Image from "next/image";
import { CircularProgress } from "@chakra-ui/react";
import checkboxIcon from "../../../../public/checkboxIcon.svg";
import MapChoiceCardWrapper from "./MapChoiceCardWrapper";

interface Props {
  content: string;
  altLogo: string;
  themeLogo: string;
  position: string;
  levelExperience: number;
  showWarning?: boolean;
}

const MapChoiceCard = ({
  content,
  altLogo,
  themeLogo,
  position,
  levelExperience,
  showWarning,
}: Props) => {
  // On arrondit les bords du bloc différement en fonction de sa position
  let roundedClass = "";
  let bottomMargin = "";

  if (position === "bot") {
    roundedClass = "rounded-[0px_0px_16px_16px]";
    bottomMargin = "mb-5";
  } else if (position === "top") {
    roundedClass = "rounded-[16px_16px_0px_0px]";
  }
  return (
    <MapChoiceCardWrapper altLogo={altLogo} showWarning={showWarning}>
      <div
        className={`${bottomMargin} flex w-[394px] items-center justify-center pl-[20px] pr-[20px] py-[20px] relative`}
      >
        <div
          className={`absolute w-[394px] h-[74px] ${roundedClass} border-t-2 border-t-solid border-r-2 border-r-solid border-l-2 border-l-solid border-b-2 border-b-solid bg-white border-slate-200`}
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
            <Image
              className="ml-2"
              src={checkboxIcon}
              alt={"checkbox icon"}
              width={30}
              height={30}
            />
          )}
        </div>
      </div>
    </MapChoiceCardWrapper>
  );
};

export default MapChoiceCard;
