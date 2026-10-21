import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        paper: {
          DEFAULT: '#FFFFFF',
          secondary: '#F3F8F2',
        },
        forest: {
          DEFAULT: '#168B18',
          ink: '#202420',
          light: '#687268',
          navy: '#101B10',
        },
        brand: {
          DEFAULT: '#35D426',
          black: '#101B10',
          hover: '#55F044',
          soft: '#DDF5D8',
          navy: '#168B18',
          text: '#202420',
          secondaryText: '#687268',
          border: '#DCE7D9',
        },
        lime: '#168B18',
        greenAccent: '#35D426',
        orangeAccent: '#35D426',
        mist: '#DCE7D9',
        softBlue: '#DDF5D8',
        redAccent: '#35D426',
        royalBlueAccent: '#168B18',
        navy: {
          DEFAULT: '#168B18',
          dark: '#101B10',
        },
      },
      fontFamily: {
        display: ['var(--font-display)', 'system-ui', '-apple-system', 'sans-serif'],
        body: ['var(--font-body)', 'system-ui', '-apple-system', 'sans-serif'],
      },
      fontSize: {
        '13': ['0.8125rem', { lineHeight: '1.4', letterSpacing: '0' }],
        '15': ['0.9375rem', { lineHeight: '1.5', letterSpacing: '-0.01em' }],
        '17': ['1.0625rem', { lineHeight: '1.6', letterSpacing: '-0.01em' }],
        '21': ['1.3125rem', { lineHeight: '1.35', letterSpacing: '-0.015em' }],
        '26': ['1.625rem', { lineHeight: '1.25', letterSpacing: '-0.02em' }],
        '33': ['2.0625rem', { lineHeight: '1.18', letterSpacing: '-0.02em' }],
        '41': ['2.5625rem', { lineHeight: '1.12', letterSpacing: '-0.025em' }],
        '52': ['3.25rem', { lineHeight: '1.08', letterSpacing: '-0.025em' }],
        '65': ['4.0625rem', { lineHeight: '1.05', letterSpacing: '-0.03em' }],
        '81': ['5.0625rem', { lineHeight: '1.02', letterSpacing: '-0.03em' }],
      },
      maxWidth: {
        site: '1360px',
      },
      borderRadius: {
        none: '0px',
        input: '8px',
        pill: '9999px',
      },
      spacing: {
        'section-sm': 'clamp(64px, 8vh, 96px)',
        'section': 'clamp(96px, 12vh, 180px)',
      },
      transitionTimingFunction: {
        'nova-ease': 'cubic-bezier(0.16, 1, 0.3, 1)',
      },
    },
  },
  plugins: [],
};

export default config;
