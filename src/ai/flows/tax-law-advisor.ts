'use server';
/**
 * @fileOverview An AI agent that answers questions about international tax law.
 *
 * - askTaxLawQuestion - A function that handles the tax law question answering process.
 * - AskTaxLawQuestionInput - The input type for the askTaxLawQuestion function.
 * - AskTaxLawQuestionOutput - The return type for the askTaxLawQuestion function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const AskTaxLawQuestionInputSchema = z.object({
  question: z.string().describe('The tax law question to ask.'),
});
export type AskTaxLawQuestionInput = z.infer<typeof AskTaxLawQuestionInputSchema>;

const AskTaxLawQuestionOutputSchema = z.object({
  answer: z.string().describe('The answer to the tax law question.'),
});
export type AskTaxLawQuestionOutput = z.infer<typeof AskTaxLawQuestionOutputSchema>;

export async function askTaxLawQuestion(input: AskTaxLawQuestionInput): Promise<AskTaxLawQuestionOutput> {
  return askTaxLawQuestionFlow(input);
}

const prompt = ai.definePrompt({
  name: 'askTaxLawQuestionPrompt',
  input: {schema: AskTaxLawQuestionInputSchema},
  output: {schema: AskTaxLawQuestionOutputSchema},
  prompt: `You are an expert in international tax law.  Answer the following question to the best of your ability:\n\nQuestion: {{{question}}}`,
});

const askTaxLawQuestionFlow = ai.defineFlow(
  {
    name: 'askTaxLawQuestionFlow',
    inputSchema: AskTaxLawQuestionInputSchema,
    outputSchema: AskTaxLawQuestionOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
