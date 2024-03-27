import { useState, useEffect } from "react";

const FontToggle = () => {
  const [font, setFont] = useState(() => {
    // Retrieve font selection from localStorage, defaulting to "Inter" if not found
    return localStorage.getItem("selectedFont") || "Inter";
  });

  useEffect(() => {
    // Update CSS variable and localStorage when font state changes
    document.documentElement.style.setProperty(
      "--font-family",
      font === "Inter"
        ? "'Inter', Georgia, serif"
        : "'Atkinson Hyperlegible', Georgia, serif"
    );
    localStorage.setItem("selectedFont", font);
  }, [font]); // Run this effect whenever 'font' state changes

  const toggleFont = () => {
    setFont((prevFont) =>
      prevFont === "Inter" ? "Atkinson Hyperlegible" : "Inter"
    );
  };

  return (
    <button
      onClick={toggleFont}
      className="border-b py-2 text-[18px] text-center bg-slate-220 rounded cursor-pointer"
    >
      {font === "Inter" ? "Lisibilité améliorée" : "Lisibilité classique"}
    </button>
  );
};

export default FontToggle;
