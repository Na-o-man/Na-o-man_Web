const colors = {
  primary: '#FEFEFE',
  backgroundPrimary: '#BBCFE5',
  secondary: '#8BA5C1',
  tertiary: '#748292',
  accent: '#F9D067',
} as const;

export const theme = {
  colors,
};

export type Theme = typeof theme;
