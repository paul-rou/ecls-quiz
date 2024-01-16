import React from "react";
import Image from "next/image";
import checkboxIcon from "public/checkboxIcon.svg";
import xpIcon from "public/xpIcon.svg";

interface Props {
  type: "score" | "xp";
  content: string;
}

const BilanCard = ({ type, content }: Props) => {
  return (
    <div className="w-512 h-32 rounded-lg border-4 border-purple-800 bg-purple-200 flex items-center justify-center p-4">
      {type === "score" ? (
        <Image
          src={checkboxIcon}
          alt={"Checkbox"}
          width={32}
          height={32}
          className="mr-1"
        />
      ) : type === "xp" ? (
        <Image
          src={xpIcon}
          alt={"LightningXP"}
          width={32}
          height={32}
          className="mr-1"
        />
      ) : (
        " "
      )}
      <p className="font-bold text-lg">{content}</p>
    </div>
  );
};

export default BilanCard;
