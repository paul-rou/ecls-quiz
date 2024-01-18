import Image from "next/image";
import verifiedIcon from "../../../../public/verified-logo.svg";

const VerifiedButton = ({ setVerified }: { setVerified: () => void }) => {
  return (
    <div className="h-[60px] w-[300px] mt-4 bg-[#DDBAFF] text-center rounded-3xl hover:bg-[#BB98DD]">
      <button
        onClick={() => setVerified()}
        className="flex items-center justify-center w-full h-full"
      >
        <p className="text-[#433] text-xl font-bold">VÉRIFIER</p>
        <Image
          src={verifiedIcon}
          alt="vérifier la réponse"
          width={40}
          height={40}
        />
      </button>
    </div>
  );
};

export default VerifiedButton;
