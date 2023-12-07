const ThemeList = ({ listOfThemes }: { listOfThemes: string[] }) => {
  return listOfThemes.map((theme, i) => <p key={i}>{theme}</p>);
};

export default ThemeList;
