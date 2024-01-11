import { Client } from '@notionhq/client';
import { cache } from 'react';

const notion = new Client({ auth: process.env.NOTION_TOKEN, });

export const fetchQuiz = cache(() => {
  return notion.databases.query({
    database_id: process.env.NOTION_DATABASE_ID!,
  });
});
