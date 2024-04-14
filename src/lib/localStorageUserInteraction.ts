const updateUserScore = (newExperience: string, newFoundAnswers: string, levelCompleted: boolean) => {
    const experience = localStorage.getItem("experience");
    const foundAnswers = localStorage.getItem("foundAnswers");
    const levelCompletedNumber = localStorage.getItem("levelCompletedNumber");

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

    if (levelCompleted) {
        if (levelCompletedNumber) {
            localStorage.setItem("levelCompletedNumber", String(Number(levelCompletedNumber) + 1));
        } else {
            localStorage.setItem("levelCompletedNumber", "1");
        }
    } else {
        localStorage.setItem("levelCompletedNumber", "0");
    }
}

const getUserScore = () => {
    const experience = localStorage.getItem("experience") ?? "0";
    const foundAnswers = localStorage.getItem("foundAnswers") ?? "0";
    const levelCompletedNumber = localStorage.getItem("levelCompletedNumber") ?? "0";

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

export { updateUserScore, getUserScore, setUserLevelExperience, getUserExperienceByTheme };