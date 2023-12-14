import Image from "next/image";
import rightIcon from "../../../../public/right-icon.svg";
import wrongIcon from "../../../../public/wrong-icon.svg";

const QuizAnswerCard = ({
  answerContent,
  isRight,
}: {
  answerContent: string;
  isRight: boolean;
}) => {
  return (
    <div className="flex gap-2">
      <Image
        src={isRight ? rightIcon : wrongIcon}
        alt="icon vrai ou faux"
        width={50}
        height={50}
      />
      <div
        className={`flex h-28 px-4 justify-center items-center text-center bg-[#FFF]
        ${
          isRight ? "border-[#C4FD7C]" : "border-[#FF938C]"
        } border-[12px] rounded-xl select-none`}
      >
        <p className="text-[#4B4B4B] font-bold text-xl">{answerContent}</p>
      </div>
    </div>
  );
};

export default QuizAnswerCard;
