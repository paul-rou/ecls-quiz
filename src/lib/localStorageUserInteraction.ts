const updateUserScore = (newExperience: string, newFoundAnswers: string) => {
    const experience = localStorage.getItem("experience");
    const foundAnswers = localStorage.getItem("foundAnswers");


    if (experience) {
        localStorage.setItem("experience", String(Number(experience) + Number(newExperience)));
    } else {
        localStorage.setItem("experience", newExperience);
    }

    if (foundAnswers) {
        localStorage.setItem("foundAnswers", String(Number(foundAnswers) + Number(newFoundAnswers)));
    } else {
        localStorage.setItem("foundAnswers", newFoundAnswers);
    }
}

const getUserScore = () => {
    const experience = localStorage.getItem("experience") ?? "0";
    const foundAnswers = localStorage.getItem("foundAnswers") ?? "0";
    let levelCompletedNumber = "0";
    const levelExperience = localStorage.getItem("levelExperience") ?? "{}";

    if (levelExperience) {
        const levelExperienceParsed: {
            [key: string]: [number, number, number];
        } = JSON.parse(levelExperience);
        
        levelCompletedNumber = Object.values(levelExperienceParsed).reduce(
            (acc: number, current: number[]) => {
                current.forEach((levelNumber: number) => {
                    if (levelNumber === 100/3) acc++;
                })
                return acc;
            }, 0,
        ).toString();
    }

    return { experience, foundAnswers, levelCompletedNumber };
}

const setUserLevelExperience = (themeName: string, difficulty: number) => {
    const levelExperience = localStorage.getItem("levelExperience");

    if (levelExperience) {
        const levelExperienceParsed = JSON.parse(levelExperience);
        levelExperienceParsed[themeName] = levelExperienceParsed[themeName] ?? [0, 0, 0];

        levelExperienceParsed[themeName][difficulty] = 100/3;

        localStorage.setItem("levelExperience", JSON.stringify(levelExperienceParsed));
    } else {
        const levelExperience: {
            [key: string]: [number, number, number];
        } = {};
        levelExperience[themeName] = [0, 0, 0];
        levelExperience[themeName][difficulty] = 100/3;

        localStorage.setItem("levelExperience", JSON.stringify(levelExperience));

    }
}

const getUserExperienceByTheme = (themeName: string) => {
    const levelExperience = localStorage.getItem("levelExperience");

    let levelExperienceByTheme = 0;
    if (levelExperience) {
        const levelExperienceParsed = JSON.parse(levelExperience);
        levelExperienceByTheme = levelExperienceParsed[themeName]?.reduce(
            (acc: number, current: number) => acc + current, 0,
        ) ?? 0;
    }

    return levelExperienceByTheme;
}

const getUserExperienceByThemeByLevel = (themeName: string) => {
    const levelExperience = localStorage.getItem("levelExperience");

    if (levelExperience) {
        const levelExperienceParsed = JSON.parse(levelExperience);
        return levelExperienceParsed[themeName] ?? [0,0,0];
    }

    return [0,0,0];
}

export { updateUserScore, getUserScore, setUserLevelExperience, getUserExperienceByTheme, getUserExperienceByThemeByLevel };