export const heroRotatingWords: string[] = ['refuse to wait.', "can't slow down.", 'demand more.'];

export const marqueeBrands: string[] = [
  'Ovation',
  'Peja Outdoor Festival',
  'Halo Labs',
  'Fjord',
  'Meridian',
  'Verdant',
  'Kubo',
];

export interface HomepageStat {
  value: string;
  suffix: string | null;
  label: string;
}

export const homepageStats: HomepageStat[] = [
  { value: '0.4', suffix: 's', label: 'Average load time' },
  { value: '100', suffix: null, label: 'Median Lighthouse score' },
  { value: '4.9', suffix: null, label: 'Avg. client rating' },
];
