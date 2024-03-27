import { useState, useEffect } from "react";

const FontToggle = () => {
  const [font, setFont] = useState(() => {
    // Retrieve font selection from localStorage, defaulting to "Inter" if not found
    return localStorage.getItem("selectedFont") || "Inter";
  });

  useEffect(() => {
    document.documentElement.style.setProperty(
      "--font-family",
      font === "Inter"
        ? "'Inter', Georgia, serif"
        : "'Atkinson Hyperlegible', Georgia, serif"
    );
    localStorage.setItem("selectedFont", font);
  }, [font]);

  const toggleFont = () => {
    setFont((prevFont) =>
      prevFont === "Inter" ? "Atkinson Hyperlegible" : "Inter"
    );
  };

  return (
    <div className="flex items-center">
      <button
        onClick={toggleFont}
        className="border-b py-2 text-[18px] text-center bg-slate-220 rounded cursor-pointer mr-2"
      >
        Lisibilité améliorée
      </button>
      <div
        className="w-10 h-4 bg-gray-300 rounded-full flex items-center p-1 cursor-pointer"
        onClick={toggleFont}
      >
        <div
          className={`w-3 h-3 rounded-full relative  ${
            font === "Inter" ? "bg-red-500" : "bg-green-500 left-4"
          }`}
        />
      </div>
    </div>
  );
};

export default FontToggle;
