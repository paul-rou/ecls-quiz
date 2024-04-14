const getDifficultyIndex = (difficulty: string) => {
    switch (difficulty) {
        case "Facile":
        return 0;
        case "Moyen":
        return 1;
        case "Difficile":
        return 2;
        default:
        return 0;
    }
}

const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
        case "Facile":
        return "green-500";
        case "Moyen":
        return "yellow-500";
        case "Difficile":
        return "red-500";
        default:
        return "green-500";
    }
}

export { getDifficultyIndex, getDifficultyColor };