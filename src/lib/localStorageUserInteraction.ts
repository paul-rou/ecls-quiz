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

export { updateUserScore, getUserScore };