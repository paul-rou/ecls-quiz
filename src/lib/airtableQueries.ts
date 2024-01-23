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

export const getRecords = async (themeName: string, numberOfQuestions: number) => {
  const questions: Question[] = [];

  const records = await new Promise((resolve, reject)=>table.select({
    maxRecords: numberOfQuestions,
    filterByFormula: themeName!=="random" ? `AND({Thématiques} = '${themeName}', {Format de la question} = 'QCM')` : `{Format de la question} = 'QCM'`,
    fields: ["Intitulé de la question", "# réponse vraie QCM", "Réponse 1 - QCM", "Réponse 2 - QCM", "Réponse 3 - QCM", "Réponse 4 - QCM", "Infos complémentaires lien", "Infos sup. réponse 1", "Infos sup. réponse 2", "Infos sup. réponse 3", "Infos sup. réponse 4"]
  }).eachPage(
    function (records: any, fetchNextPage: any) {


      records.forEach(function (record: any) {

        const answers: string[] = []
        const answerNames = ["Réponse 1 - QCM", "Réponse 2 - QCM", "Réponse 3 - QCM", "Réponse 4 - QCM"]

        answerNames.forEach((answerName) => {
          const answer = record.get(answerName)
          if (answer) answers.push(answer)
        })

        questions.push({
          question: record.get("Intitulé de la question"),
          answers: answers,
          source: record.get("Infos complémentaires lien") ?? "",
          description: record.get("Infos sup. réponse 1") ?? record.get("Infos sup. réponse 2") ?? record.get("Infos sup. réponse 3") ?? record.get("Infos sup. réponse 4") ?? "",
          correctAnswer: record.get("# réponse vraie QCM") - 1,
        });

      });

      fetchNextPage();
    }, function done(err) {
      if (err) { console.error(err); return; }
      resolve(questions);
  }))
  return questions;
};
