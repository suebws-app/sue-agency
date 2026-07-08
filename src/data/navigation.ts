import { EMAIL, SOCIAL_MEDIA } from '../helpers/constants';

export type NavLabel = 'Home' | 'Work' | 'Services' | 'Process' | 'Journal';

export interface NavLink {
  href: string;
  label: NavLabel;
}

export const navLinks: NavLink[] = [
  { href: '/', label: 'Home' },
  { href: '/services', label: 'Services' },
  { href: '/process', label: 'Process' },
  { href: '/journal', label: 'Journal' },
];

export interface FooterLink {
  href: string;
  label: string;
}

export interface FooterColumn {
  label: string;
  links: FooterLink[];
}

export const footerColumns: FooterColumn[] = [
  {
    label: 'Studio',
    links: [
      { href: '/services', label: 'Services' },
      { href: '/process', label: 'Process' },
      { href: '/journal', label: 'Journal' },
      { href: '/contact', label: 'Contact' },
    ],
  },
  {
    label: 'Connect',
    links: [...SOCIAL_MEDIA, { href: `mailto:${EMAIL}`, label: 'Email' }],
  },
];
