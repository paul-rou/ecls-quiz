import Image from "next/image";

const StatisticsCard = ({
  statName,
  statValue,
  statImage,
}: {
  statName: string;
  statValue: number | string;
  statImage: string;
}) => {
  return (
    <div className="flex w-[300px] items-start gap-[15px] px-[26px] py-[17px] relative rounded-[16px] overflow-hidden border-2 border-solid border-neutral-200">
      <Image src={statImage} alt={statName} width={32} height={32} />
      <div className="inline-flex flex-col items-start gap-[4px] pl-0 pr-[146px] py-0 relative flex-[0_0_auto]">
        <div className="relative w-fit mt-[-1.00px] font-bold text-[#3c3c3c] text-base tracking-[0] leading-[20px] whitespace-nowrap">
          {statValue}
        </div>
        <div className="relative w-fit font-medium text-[#afafaf] text-xs tracking-[0] leading-[20px] whitespace-nowrap">
          {statName}
        </div>
      </div>
    </div>
  );
};

export default StatisticsCard;
