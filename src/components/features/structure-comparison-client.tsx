'use client';

import { STRUCTURE_DATA, type BusinessStructure } from '@/lib/constants';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { CheckCircle2, XCircle } from 'lucide-react';

export default function StructureComparisonClient() {
  return (
    <div className="grid gap-6 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3">
      {STRUCTURE_DATA.map((structure: BusinessStructure) => (
        <Card key={structure.id} className="flex flex-col shadow-lg hover:shadow-xl transition-shadow duration-300">
          <CardHeader>
            <CardTitle className="text-2xl text-primary">{structure.name}</CardTitle>
            <CardDescription>{structure.description}</CardDescription>
          </CardHeader>
          <CardContent className="flex-grow">
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="pros">
                <AccordionTrigger className="text-lg font-semibold text-green-600">Advantages</AccordionTrigger>
                <AccordionContent>
                  <ul className="space-y-2 pt-2">
                    {structure.pros.map((pro, index) => (
                      <li key={index} className="flex items-start">
                        <CheckCircle2 className="h-5 w-5 text-green-500 mr-2 mt-0.5 shrink-0" />
                        <span>{pro}</span>
                      </li>
                    ))}
                  </ul>
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="cons">
                <AccordionTrigger className="text-lg font-semibold text-red-600">Disadvantages</AccordionTrigger>
                <AccordionContent>
                  <ul className="space-y-2 pt-2">
                    {structure.cons.map((con, index) => (
                      <li key={index} className="flex items-start">
                        <XCircle className="h-5 w-5 text-red-500 mr-2 mt-0.5 shrink-0" />
                        <span>{con}</span>
                      </li>
                    ))}
                  </ul>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
