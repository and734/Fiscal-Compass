import NormativeAdvisorClient from '@/components/features/normative-advisor-client';
import { Card, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

export default function NormativeAdvisorPage() {
  return (
    <div className="space-y-6">
       <Card className="shadow-sm">
        <CardHeader>
          <CardTitle className="text-3xl font-bold">Normative AI Advisor</CardTitle>
          <CardDescription className="text-lg">
            Ask questions about Italian and international tax laws. Our AI-powered advisor provides insights based on an updated knowledge base. Please note: this tool provides information, not legal advice. Consult with a qualified professional for specific situations.
          </CardDescription>
        </CardHeader>
      </Card>
      <NormativeAdvisorClient />
    </div>
  );
}
