import Link from "next/link";

const QuizAnswerDescription = ({
  description,
  sourceLink,
}: {
  description: string;
  sourceLink: string;
}) => {
  return (
    <div className="mt-6 flex flex-col bg-[#EDEDED] p-4">
      <p>{description}</p>
      <Link href={sourceLink} className="mt-4 font-bold text-[#0D84AAD9]">
        Source
      </Link>
    </div>
  );
};

export default QuizAnswerDescription;
