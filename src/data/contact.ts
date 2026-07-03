export interface NextStep {
  n: string;
  title: string;
  body: string;
}

export const contactNextSteps: NextStep[] = [
  { n: '01', title: 'We reply', body: 'Within two business days, from a real person.' },
  { n: '02', title: 'Discovery call', body: '30 minutes to align on scope, timeline, and fit.' },
  { n: '03', title: 'Proposal', body: 'A one-pager with the plan, deliverables, and price.' },
];

export const budgetOptions: string[] = [
  'Under $50k',
  '$50k – $100k',
  '$100k – $200k',
  '$200k+',
  'Not sure yet',
];

export const timelineOptions: string[] = [
  'ASAP',
  'In the next 1–2 months',
  '2–3 months out',
  'Just exploring',
];
