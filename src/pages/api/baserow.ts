import { Question } from "@/types/quizTypes";
import { NextApiRequest, NextApiResponse } from "next";

const BASEROW_DATABASE_TOKEN = process.env.BASEROW_DATABASE_TOKEN ?? ""
const BASEROW_TABLE_ID = process.env.BASEROW_TABLE_ID ?? ""

export default async function baserowHandler(req: NextApiRequest, res: NextApiResponse) {

    if (!req.query.themeName || !req.query.numberOfQuestions) {
        res.status(400).json({ error: "Missing query parameter" });
        return;
    }

    const themeName = req.query.themeName as string == "random" ? "" : req.query.themeName as string;
    const numberOfQuestions = Number(req.query.numberOfQuestions);

    // Pour effectuer la query à l'api baserow, nous avons besoin d'utiliser le paramètre
    // filter__field_YOUR_FIELD_ID__contains pour filtrer les résultats
    // Ici le field ID est de 4970 pour le field "Thématiques"

    const records = await fetch(`http://localhost/api/database/rows/table/${BASEROW_TABLE_ID}/?user_field_names=true&filter__field_4970__contains=${themeName}&size=${numberOfQuestions}`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Token ${BASEROW_DATABASE_TOKEN}`
        }
    });

    const questions: Question[] = [];
    const answerNames = ["Réponse 1 - QCM", "Réponse 2 - QCM", "Réponse 3 - QCM", "Réponse 4 - QCM"]

    const recordsJson = await records.json();


    recordsJson.results.forEach((record: any) => {

        const answers: string[] = []

        answerNames.forEach((answerName) => {
          const answer = record[answerName]
          if (answer) answers.push(answer)
        })

        const isTrueFalse = record["Format de la question"]?.value == "Vrai / Faux ou Oui/Non"

        let correctAnswer = record["# réponse vraie QCM"] - 1

        if (isTrueFalse) {
          correctAnswer = record["Réponse Vrai/Faux"]?.value == "Vrai" ? 0 : 1
        }

        questions.push({
          question: record["Intitulé de la question"],
          answers: isTrueFalse? ["Vrai", "Faux"] : answers,
          source: record["Infos complémentaires lien"] ?? "",
          description: isTrueFalse ? record["Infos sup. réponse VRAI"] ?? record["Infos sup. réponse FAUX"] : record["Infos sup. réponse 1"] ?? record["Infos sup. réponse 2"] ?? record["Infos sup. réponse 3"] ?? record["Infos sup. réponse 4"] ?? "",
          correctAnswer: correctAnswer,
        });
    })

    res.status(200).json(questions);
}