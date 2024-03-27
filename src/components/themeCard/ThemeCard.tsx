import Image from "next/image";

const ThemeCard = ({
  themeName,
  themeLogo,
}: {
  themeName: string;
  themeLogo: string;
}) => {
  return (
    <div className="inline-flex items-center gap-[20px] h-[50px] py-[10px] pl-[16px] pr-[45px] bg-[#FFF] border-[2px] border-[#84D8FF] rounded-[12px]">
      <Image src={themeLogo} alt={themeName} width={32} height={32} />
      <p className="text-[#1CB0F6] font-bold">{themeName}</p>
    </div>
  );
};

export default ThemeCard;
