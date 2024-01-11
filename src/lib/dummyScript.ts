import { Question } from "@/types/quizTypes";
import questions from "../../temp_quiz_data/questions.json";

export default function getNextQuestion(index: number): Question {
    const questionData = questions.questions
    return questionData[index % questionData.length]
}