import React from "react";
import Image from "next/image";
import { useState } from "react";

interface Props {
  content: string;
  altLogo: string;
  themeLogo: string;
  position: string;
  setSelected: () => void;
}

const MapChoiceCard = ({
  content,
  altLogo,
  themeLogo,
  position,
  setSelected,
}: Props) => {
  // On arrondit les bords du bloc différement en fonction de sa position
  let roundedClass = "";

  if (position === "bot") {
    roundedClass = "rounded-[0px_0px_16px_16px]";
  } else if (position === "top") {
    roundedClass = "rounded-[16px_16px_0px_0px]";
  }

  return (
    <div onClick={() => setSelected()}>
      <div className="flex w-[394px] items-center gap-[15px] pl-[18px] pr-[186.47px] py-[20px] relative rounded-[16px]">
        <div
          className={`absolute w-[394px] h-[74px] top-0 left-0 bg-white ${roundedClass} border-t-2 [border-top-style:solid] border-r-2 [border-right-style:solid] border-l-2 [border-left-style:solid] border-neutral-200`}
        />
        <div className="inline-flex max-w-[303.38px] items-start justify-center pl-0 pr-[0.53px] py-0 relative flex-[0_0_auto] mr-[-1.00px]">
          <Image src={themeLogo} alt={altLogo} width={32} height={32} />
          <div className="relative w-fit mt-[-1.00px] [font-family:'Inter-Bold',Helvetica] font-bold text-[#4b4b4b] text-[15px] text-center tracking-[0] leading-[20px] whitespace-nowrap">
            {content}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MapChoiceCard;
