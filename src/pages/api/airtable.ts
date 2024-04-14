import { getRecords } from "@/lib/airtableQueries";
import { NextApiRequest, NextApiResponse } from "next";

export default async function airtableHandler(req: NextApiRequest, res: NextApiResponse) {
    if (!req.query.themeName || !req.query.numberOfQuestions) {
        res.status(400).json({ error: "Missing query parameter" });
        return;
    }

    const themeName = req.query.themeName as string;
    const numberOfQuestions = Number(req.query.numberOfQuestions);
    const difficulty = req.query.difficulty as string;

    const records = await getRecords(themeName, numberOfQuestions, difficulty);

    res.status(200).json(records);
}