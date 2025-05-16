'use client';

import { useState } from 'react';
import { useForm, type SubmitHandler } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { askTaxLawQuestion, type AskTaxLawQuestionOutput } from '@/ai/flows/tax-law-advisor';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Loader2, Wand2 } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const formSchema = z.object({
  question: z.string().min(10, { message: 'Question must be at least 10 characters long.' }).max(1000),
});

type FormData = z.infer<typeof formSchema>;

export default function NormativeAdvisorClient() {
  const [answer, setAnswer] = useState<AskTaxLawQuestionOutput | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const form = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      question: '',
    },
  });

  const onSubmit: SubmitHandler<FormData> = async (data) => {
    setIsLoading(true);
    setAnswer(null);
    try {
      const result = await askTaxLawQuestion({ question: data.question });
      setAnswer(result);
    } catch (error) {
      console.error('Error asking tax law question:', error);
      toast({
        title: 'Error',
        description: 'Failed to get an answer. Please try again.',
        variant: 'destructive',
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="max-w-2xl mx-auto">
      <Card className="shadow-lg">
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-2xl">
            <Wand2 className="h-6 w-6 text-primary" />
            Ask the AI Tax Advisor
          </CardTitle>
        </CardHeader>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)}>
            <CardContent className="space-y-4">
              <FormField
                control={form.control}
                name="question"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel htmlFor="question" className="text-lg">Your Tax Question</FormLabel>
                    <FormControl>
                      <Textarea
                        id="question"
                        placeholder="e.g., What are the tax implications of opening an SRL in Italy as a foreign resident?"
                        className="min-h-[100px] text-base"
                        {...field}
                        disabled={isLoading}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </CardContent>
            <CardFooter>
              <Button type="submit" disabled={isLoading} className="w-full">
                {isLoading ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Getting Answer...
                  </>
                ) : (
                  'Ask Question'
                )}
              </Button>
            </CardFooter>
          </form>
        </Form>
      </Card>

      {answer && (
        <Card className="mt-6 shadow-lg">
          <CardHeader>
            <CardTitle className="text-xl text-primary">AI Generated Advice</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-base whitespace-pre-wrap">{answer.answer}</p>
          </CardContent>
        </Card>
      )}
    </div>
  );
}
