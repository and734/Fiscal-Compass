import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Lightbulb, TrendingUp, ShieldCheck } from "lucide-react";
import Link from "next/link";

export default function HomePage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-full space-y-8">
      <div className="text-center space-y-4">
        <h1 className="text-4xl font-bold tracking-tight text-primary sm:text-5xl md:text-6xl">
          Welcome to Fiscal Compass
        </h1>
        <p className="max-w-2xl text-lg text-muted-foreground sm:text-xl">
          Your comprehensive guide to navigating the complexities of international tax management.
          Explore our tools to compare business structures, get AI-powered tax advice, and stay on top of your fiscal responsibilities.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-4xl">
        <FeatureCard
          icon={<TrendingUp className="h-10 w-10 text-accent" />}
          title="Structure Comparison"
          description="Interactively compare different business structures like Sole Proprietorships and SRLs to find the best fit for your venture."
          linkHref="/structure-comparison"
          linkText="Compare Structures"
        />
        <FeatureCard
          icon={<Lightbulb className="h-10 w-10 text-accent" />}
          title="Normative AI Advisor"
          description="Leverage our AI-powered advisor for tailored recommendations based on Italian and international tax laws."
          linkHref="/normative-advisor"
          linkText="Ask AI Advisor"
        />
        <FeatureCard
          icon={<ShieldCheck className="h-10 w-10 text-accent" />}
          title="Alert Manager"
          description="Stay compliant with automated reminders for tax payments, filings, and important regulatory updates."
          linkHref="/alert-manager"
          linkText="View Alerts"
        />
      </div>
    </div>
  );
}

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  linkHref: string;
  linkText: string;
}

function FeatureCard({ icon, title, description, linkHref, linkText }: FeatureCardProps) {
  return (
    <Card className="shadow-lg hover:shadow-xl transition-shadow duration-300 flex flex-col">
      <CardHeader className="items-center">
        {icon}
        <CardTitle className="mt-4 text-2xl">{title}</CardTitle>
      </CardHeader>
      <CardContent className="flex-grow">
        <CardDescription className="text-center">{description}</CardDescription>
      </CardContent>
      <CardContent className="mt-auto">
        <Button asChild className="w-full" variant="default">
          <Link href={linkHref}>{linkText}</Link>
        </Button>
      </CardContent>
    </Card>
  );
}
