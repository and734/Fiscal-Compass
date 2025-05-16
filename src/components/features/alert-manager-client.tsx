'use client';

import { ALERTS_DATA, type AlertData } from '@/lib/constants';
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from '@/components/ui/card';
import { BellRing, CalendarClock, Info, AlertTriangle } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { format, parseISO, differenceInDays, isPast } from 'date-fns';

function getAlertIcon(type: AlertData['type']) {
  switch (type) {
    case 'payment':
      return <CalendarClock className="h-6 w-6 text-blue-500" />;
    case 'filing':
      return <CalendarClock className="h-6 w-6 text-purple-500" />;
    case 'regulatory':
      return <Info className="h-6 w-6 text-green-500" />;
    default:
      return <BellRing className="h-6 w-6 text-gray-500" />;
  }
}

function getDueDateInfo(dueDateString?: string): { text: string; colorClass: string } {
  if (!dueDateString) return { text: 'No due date', colorClass: 'text-muted-foreground' };
  
  const dueDate = parseISO(dueDateString);
  const today = new Date();
  const daysDifference = differenceInDays(dueDate, today);

  if (isPast(dueDate) && daysDifference < 0 && daysDifference !== -1 /* handle today case from isPast */ ) {
    return { text: `Overdue by ${Math.abs(daysDifference)} day(s) (${format(dueDate, 'PPP')})`, colorClass: 'text-red-600 font-semibold' };
  }
  if (daysDifference === 0) {
    return { text: `Due today (${format(dueDate, 'PPP')})`, colorClass: 'text-orange-500 font-semibold' };
  }
  if (daysDifference > 0 && daysDifference <= 7) {
    return { text: `Due in ${daysDifference} day(s) (${format(dueDate, 'PPP')})`, colorClass: 'text-yellow-600' };
  }
  return { text: `Due ${format(dueDate, 'PPP')}`, colorClass: 'text-muted-foreground' };
}


export default function AlertManagerClient() {
  // In a real app, these would be managed (CRUD operations)
  const alerts = ALERTS_DATA;

  if (alerts.length === 0) {
    return (
      <Card className="shadow-md">
        <CardContent className="p-6 text-center">
          <Info className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
          <p className="text-xl font-medium">No Alerts</p>
          <p className="text-muted-foreground">You currently have no pending alerts or reminders.</p>
        </CardContent>
      </Card>
    );
  }

  return (
    <div className="space-y-4">
      {alerts.map((alert) => {
        const dueDateInfo = getDueDateInfo(alert.dueDate);
        return (
          <Card key={alert.id} className="shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden">
            <CardHeader className="flex flex-row items-start gap-4 p-4 bg-card">
              <div className="mt-1">{getAlertIcon(alert.type)}</div>
              <div className="flex-1">
                <CardTitle className="text-xl mb-1">{alert.title}</CardTitle>
                {alert.dueDate && (
                  <p className={`text-sm ${dueDateInfo.colorClass}`}>
                    {dueDateInfo.text}
                  </p>
                )}
              </div>
              <Badge variant={
                alert.type === 'payment' ? 'default' : 
                alert.type === 'filing' ? 'secondary' : 'outline'
                } className="capitalize">
                {alert.type}
              </Badge>
            </CardHeader>
            <CardContent className="p-4 pt-0">
              <CardDescription className="text-base">{alert.description}</CardDescription>
            </CardContent>
            <CardFooter className="p-4 border-t">
              <Button variant="outline" size="sm">
                Mark as Read
              </Button>
              {alert.type !== 'regulatory' && (
                 <Button variant="link" size="sm" className="ml-auto">
                    View Details
                 </Button>
              )}
            </CardFooter>
          </Card>
        );
      })}
       <Card className="mt-6 border-dashed border-2 hover:border-primary transition-colors">
        <CardContent className="p-6 text-center">
          <p className="text-muted-foreground">Want to add a custom reminder?</p>
          <Button variant="ghost" className="mt-2 text-primary">
            Create New Alert (Feature coming soon)
          </Button>
        </CardContent>
      </Card>
    </div>
  );
}
