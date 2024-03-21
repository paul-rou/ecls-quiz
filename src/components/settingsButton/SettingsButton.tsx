import ParameterLogo from "../../../public/parameter-logo.svg";
import Image from "next/image";
import SettingsMenu from "./settingsMenu/SettingsMenu";
import { useEffect, useState, useRef } from "react";

const SettingsButton = () => {
  const [settingsOpen, setSettingsOpen] = useState(false);
  const settingsRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        settingsRef.current &&
        !(settingsRef.current! as Node).contains(event.target as Node)
      ) {
        setSettingsOpen(false);
      }
    };

    document.addEventListener("click", handleClickOutside);

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  const toggleSettings = () => {
    setSettingsOpen((prevState) => !prevState);
  };

  return (
    <div className="relative flex flex-col" ref={settingsRef}>
      <Image
        src={ParameterLogo}
        alt="logo of the parameter button"
        width={64}
        height={64}
        onClick={toggleSettings}
      />
      {settingsOpen && (
        <div className="absolute right-0 mt-5 top-full z-50">
          <SettingsMenu />
        </div>
      )}{" "}
    </div>
  );
};

export default SettingsButton;
