import Link from "next/link";
import Image from "next/image";
import EclsLogo from "../../../public/logo-ecls.png";
import UserLogo from "../../../public/user-logo.svg";
import ParameterLogo from "../../../public/parameter-logo.svg";
import ThemeCard from "../themeCard/ThemeCard";
import vieFamiliale from "../../../public/theme-svg/vie-familiale.svg";

// Pour l'instant le svg est hardcodé, mais il faudra le passer en props plus tard
const NavBar = () => {
  return (
    <nav className="flex justify-around items-center w-full pt-1 pb-2 bg-[#0E956D] border-b-[10px] border-[#A5CE87]">
      <Link href="/">
        <Image
          src={EclsLogo}
          alt="logo of the assocation"
          width={100}
          height={100}
        />
      </Link>
      <ThemeCard themeName="VIE FAMILIALE" themeLogo={vieFamiliale} />
      <div className="flex gap-4">
        <div className="flex justify-center items-center w-[75px] h-[75px] rounded-full bg-[#C7E5C4]">
          <Link href="/">
            <Image
              src={UserLogo}
              alt="logo of the user button"
              width={64}
              height={64}
              className=""
            />
          </Link>
        </div>
        <div className="flex justify-center items-center w-[75px] h-[75px] rounded-full bg-[#C7E5C4]">
          <Link href="/">
            <Image
              src={ParameterLogo}
              alt="logo of the parameter button"
              width={64}
              height={64}
            />
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
