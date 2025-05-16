import StructureComparisonClient from '@/components/features/structure-comparison-client';
import { Card, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

export default function StructureComparisonPage() {
  return (
    <div className="space-y-6">
      <Card className="shadow-sm">
        <CardHeader>
          <CardTitle className="text-3xl font-bold">Business Structure Comparison</CardTitle>
          <CardDescription className="text-lg">
            Explore the advantages and disadvantages of different business structures in Italy. This tool helps you understand key differences to make informed decisions.
          </CardDescription>
        </CardHeader>
      </Card>
      <StructureComparisonClient />
    </div>
  );
}
