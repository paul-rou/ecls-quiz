import React, { useState, useEffect } from "react";

const SettingsFontSizeSlider = () => {
  const storedFontSize = localStorage.getItem("fontSize");
  const storedDisplayedFontSize = localStorage.getItem("displayedFontSize");
  const initialFontSize = storedFontSize ? parseInt(storedFontSize) : 20;
  const initialDisplayedFontSize = storedDisplayedFontSize
    ? parseInt(storedDisplayedFontSize)
    : initialFontSize * 5;

  const [fontSize, setFontSize] = useState(initialFontSize);
  const [displayedFontSize, setDisplayedFontSize] = useState(
    initialDisplayedFontSize
  );

  useEffect(() => {
    document.documentElement.style.setProperty(
      "--base-font-size",
      `${fontSize}px`
    );
  }, [fontSize]);

  useEffect(() => {
    localStorage.setItem("fontSize", String(fontSize));
    localStorage.setItem("displayedFontSize", String(displayedFontSize));
  }, [fontSize, displayedFontSize]);

  const increaseFontSize = () => {
    if (fontSize < 28) {
      setFontSize((prevFontSize) => prevFontSize + 1);
      setDisplayedFontSize(
        (prevDisplayedFontSize) => prevDisplayedFontSize + 10
      );
    }
  };

  const decreaseFontSize = () => {
    if (fontSize > 12) {
      setFontSize((prevFontSize) => prevFontSize - 1);
      setDisplayedFontSize(
        (prevDisplayedFontSize) => prevDisplayedFontSize - 10
      );
    }
  };

  return (
    <>
      <div className="flex flex-col w-full items-center justify-center">
        <div className="mb-2">Taille du texte :</div>
        <div className="flex items-center">
          <button
            onClick={increaseFontSize}
            className="px-3 py-1 bg-blue-500 text-white rounded-md mr-2 w-10 h-10"
            style={{ fontSize: "1rem" }}
          >
            +
          </button>
          <div>{displayedFontSize}%</div>
          <button
            onClick={decreaseFontSize}
            className="px-3 py-1 bg-blue-500 text-white rounded-md ml-2 w-10 h-10"
            style={{ fontSize: "1rem" }}
          >
            -
          </button>
        </div>
      </div>
    </>
  );
};

export default SettingsFontSizeSlider;
