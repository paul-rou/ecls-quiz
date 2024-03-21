import React, { useState } from "react";

const SettingsFontSizeSlider = () => {
  const [fontSize, setFontSize] = useState(20); // Initial font size

  const increaseFontSize = () => {
    if (fontSize < 28) {
      setFontSize((prevFontSize) => prevFontSize + 2);
      document.documentElement.style.setProperty(
        "--base-font-size",
        `${fontSize + 2}px`
      );
    }
  };

  const decreaseFontSize = () => {
    if (fontSize > 10) {
      setFontSize((prevFontSize) => prevFontSize - 2);
      document.documentElement.style.setProperty(
        "--base-font-size",
        `${fontSize - 2}px`
      );
    }
  };

  return (
    <>
      <div className="flex flex-col w-full items-center justify-center">
        <div className="mb-2">Taille du texte :</div>
        <div className="flex">
          <button
            onClick={increaseFontSize}
            className="px-3 py-1 bg-blue-500 text-white rounded-md mr-2 w-10 h-10"
          >
            +
          </button>
          <button
            onClick={decreaseFontSize}
            className="px-3 py-1 bg-blue-500 text-white rounded-md mr-2 w-10 h-10"
          >
            -
          </button>
        </div>
      </div>
    </>
  );
};

export default SettingsFontSizeSlider;
