import { Question } from "@/types/quizTypes";
import Airtable from "airtable";

const AIRTABLE_API_KEY = process.env.AIRTABLE_API_KEY;
const AIRTABLE_BASE_ID = process.env.AIRTABLE_BASE_ID;
const AIRTABLE_TABLE_ID = process.env.AIRTABLE_TABLE_ID;

if (!AIRTABLE_API_KEY || !AIRTABLE_BASE_ID || !AIRTABLE_TABLE_ID) {
    throw new Error('Please define the Airtable environment variables');
}  

const airtable: Airtable = new Airtable({ apiKey: AIRTABLE_API_KEY });
const base = airtable.base(AIRTABLE_BASE_ID ?? "");
const table = base(AIRTABLE_TABLE_ID ?? "");

const difficultyMapping: any = {
  "Facile": "{Niveau de difficulté} = '1 - Facile'",
  "Moyen": "{Niveau de difficulté} = '2 - Moyen'",
  "Difficile": "OR({Niveau de difficulté} = '3 - Difficile', {Niveau de difficulté} = '4 - Expert.e')",
};

export const getRecords = async (themeName: string, numberOfQuestions: number, difficulty: string) => {
  const questions: Question[] = [];

  const records = await new Promise((resolve, reject)=>table.select({
    maxRecords: numberOfQuestions,
    filterByFormula: themeName!=="random" ? `AND({Thématiques} = '${themeName}', ${difficultyMapping[difficulty]})` : `${difficultyMapping[difficulty]}`,
    fields: ["Intitulé de la question", "Format de la question", "Réponse Vrai/Faux", "Infos sup. réponse VRAI", "Infos sup. réponse FAUX", "# réponse vraie QCM", "Réponse 1 - QCM", "Réponse 2 - QCM", "Réponse 3 - QCM", "Réponse 4 - QCM", "Infos complémentaires lien", "Infos sup. réponse 1", "Infos sup. réponse 2", "Infos sup. réponse 3", "Infos sup. réponse 4", "Vérification ECLS"]
  }).eachPage(
    function (records: any, fetchNextPage: any) {

      console.log(records.map((record:any)=>record.get("Vérification ECLS")))

      records.forEach(function (record: any) {

        const answers: string[] = []
        const answerNames = ["Réponse 1 - QCM", "Réponse 2 - QCM", "Réponse 3 - QCM", "Réponse 4 - QCM"]

        answerNames.forEach((answerName) => {
          const answer = record.get(answerName)
          if (answer) answers.push(answer)
        })

        const isTrueFalse = record.get("Format de la question") == "Vrai / Faux ou Oui/Non"

        let correctAnswer = record.get("# réponse vraie QCM") - 1

        if (isTrueFalse) {
          correctAnswer = record.get("Réponse Vrai/Faux") == "Vrai" ? 0 : 1
        }

        questions.push({
          question: record.get("Intitulé de la question"),
          answers: isTrueFalse? ["Vrai", "Faux"] : answers,
          source: record.get("Infos complémentaires lien") ?? "",
          description: isTrueFalse ? record.get("Infos sup. réponse VRAI") ?? record.get("Infos sup. réponse FAUX") : record.get("Infos sup. réponse 1") ?? record.get("Infos sup. réponse 2") ?? record.get("Infos sup. réponse 3") ?? record.get("Infos sup. réponse 4") ?? "",
          correctAnswer: correctAnswer,
        });

      });

      fetchNextPage();
    }, function done(err) {
      if (err) { console.error(err); return; }
      resolve(questions);
  }))
  return questions;
};
