import type { LucideIcon } from 'lucide-react';
import { Scale, BotMessageSquare, Bell } from 'lucide-react';

export type NavLink = {
  href: string;
  label: string;
  icon: LucideIcon;
  tooltip: string;
};

export const NAV_LINKS: NavLink[] = [
  {
    href: '/structure-comparison',
    label: 'Structure Comparison',
    icon: Scale,
    tooltip: 'Compare Business Structures',
  },
  {
    href: '/normative-advisor',
    label: 'Normative Advisor',
    icon: BotMessageSquare,
    tooltip: 'AI Tax Law Advisor',
  },
  {
    href: '/alert-manager',
    label: 'Alert Manager',
    icon: Bell,
    tooltip: 'Manage Tax Alerts',
  },
];

export type BusinessStructure = {
  id: string;
  name: string;
  description: string;
  pros: string[];
  cons: string[];
};

export const STRUCTURE_DATA: BusinessStructure[] = [
  {
    id: 'sole_prop',
    name: 'Sole Proprietorship (Ditta Individuale)',
    description: 'A simple structure where the business is owned and run by one person, and there is no legal distinction between the owner and the business.',
    pros: [
      'Easy to set up and manage.',
      'Owner receives all profits.',
      'Direct control over business decisions.',
      'Simplified tax reporting (IRPEF).'
    ],
    cons: [
      'Unlimited personal liability for business debts.',
      'Limited access to capital.',
      'Business continuity can be an issue.'
    ],
  },
  {
    id: 'srl',
    name: 'Limited Liability Company (SRL - Società a Responsabilità Limitata)',
    description: 'A corporate structure where the owners\' liability is limited to their investment in the company. Common for small to medium-sized businesses.',
    pros: [
      'Limited liability for owners (shareholders).',
      'Separate legal entity from its owners.',
      'Greater credibility and access to finance.',
      'Perpetual existence.'
    ],
    cons: [
      'More complex to set up and maintain.',
      'Higher administrative and compliance costs.',
      'Profits subject to corporate tax (IRES) and potentially dividends tax for owners.'
    ],
  },
  {
    id: 'srls',
    name: 'Simplified Limited Liability Company (SRLS - Società a Responsabilità Limitata Semplificata)',
    description: 'A variation of SRL with reduced setup costs and requirements, aimed at encouraging entrepreneurship.',
    pros: [
        'Very low setup costs (e.g. no notary fees for incorporation).',
        'Limited liability for owners.',
        'Standardized articles of association simplifies setup process.'
    ],
    cons: [
        'Capital must be between €1 and €9,999.99 and fully paid in cash.',
        'Only individuals can be shareholders, not other companies.',
        'Less flexible than a standard SRL due to standardized bylaws.'
    ],
  }
];

export type AlertData = {
  id: string;
  title: string;
  dueDate?: string;
  description: string;
  type: 'payment' | 'filing' | 'regulatory';
};

export const ALERTS_DATA: AlertData[] = [
  {
    id: 'alert1',
    title: 'VAT Payment Due',
    dueDate: '2024-08-16',
    description: 'Quarterly VAT payment for Q2 2024 is approaching.',
    type: 'payment',
  },
  {
    id: 'alert2',
    title: 'Income Tax Filing Deadline',
    dueDate: '2024-09-30',
    description: 'Annual income tax declaration (Modello Redditi) deadline.',
    type: 'filing',
  },
  {
    id: 'alert3',
    title: 'New Cross-Border Reporting Rule',
    description: 'A new regulation regarding cross-border service reporting takes effect Jan 1, 2025.',
    type: 'regulatory',
  },
];
