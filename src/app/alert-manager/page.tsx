import AlertManagerClient from '@/components/features/alert-manager-client';
import { Card, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

export default function AlertManagerPage() {
  return (
    <div className="space-y-6">
      <Card className="shadow-sm">
        <CardHeader>
          <CardTitle className="text-3xl font-bold">Alert Manager</CardTitle>
          <CardDescription className="text-lg">
            Stay on top of your tax obligations with automated reminders for payments, filings, and important regulatory updates.
          </CardDescription>
        </CardHeader>
      </Card>
      <AlertManagerClient />
    </div>
  );
}
