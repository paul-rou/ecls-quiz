import SettingsFontSizeSlider from "../settingsFontSizeSlider/SettingsFontSizeSlider";
import FontToggle from "../settingsFontToggle/SettingsFontToggle";
import Link from "next/link";

const settingsMenu = () => {
  return (
    <>
      <div className="relative font-semibold">
        <div className="flex flex-col bg-gray-200 rounded-lg p-4 shadow-[4.0px_8.0px_8.0px_rgba(0,0,0,0.38)] min-w-[250px] items-center justify-center">
          <div className="py-2 text-[18px] border-b border-gray-300">
            <SettingsFontSizeSlider />
          </div>
          <div className="py-2 text-[18px] text-center bg-slate-220 rounded border-b border-gray-300">
            <FontToggle />
          </div>
          <div className="py-2 text-[18px] text-center text-blue-800 underline">
            <Link href="https://ensemblecontrelesexisme.org/" target="_blank">
              Site de l&apos;association
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default settingsMenu;
