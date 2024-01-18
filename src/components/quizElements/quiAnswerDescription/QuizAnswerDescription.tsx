import Link from "next/link";

const QuizAnswerDescription = ({
  description,
  sourceLink,
  wrongAnswer,
}: {
  description: string;
  sourceLink: string;
  wrongAnswer: string;
}) => {
  const isRight = wrongAnswer == "";
  const parsedUrl = new URL(sourceLink);
  const domain = parsedUrl.hostname;
  return (
    <div className="mt-6 flex flex-col bg-[#EDEDED] p-4">
      <p className="font-bold">
        {isRight ? "Bonne réponse" : "Mauvaise réponse"}
      </p>
      <p>{description}</p>
      <Link
        href={sourceLink}
        target="_blank"
        className="mt-4 font-bold text-[#0D84AAD9]"
      >
        Source : {domain}
      </Link>
    </div>
  );
};

export default QuizAnswerDescription;
