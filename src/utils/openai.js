import OpenAI from 'openai';
import { openAiKey } from './constant';

export const client = new OpenAI({
  apiKey: openAiKey, // This is the default and can be omitted
  dangerouslyAllowBrowser: true 
});

// process.env['OPENAI_API_KEY']