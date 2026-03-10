/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          DEFAULT: '#8B6F47',
          light: '#A08558',
          dark: '#6E5535',
          muted: '#C4AA87',
        },
        surface: {
          base: '#FAF7F2',
          elevated: '#FFFFFF',
        },
        ink: {
          DEFAULT: '#1A1714',
          muted: '#6B6358',
          subtle: '#A89E92',
        },
      },
      fontFamily: {
        display: ['Fraunces', 'Georgia', 'serif'],
        body: ['DM Sans', 'system-ui', 'sans-serif'],
      },
      letterSpacing: {
        tight: '-0.03em',
        snug: '-0.015em',
      },
      lineHeight: {
        body: '1.7',
        heading: '1.15',
      },
      boxShadow: {
        sm: '0 1px 2px rgba(139,111,71,0.06), 0 2px 8px rgba(139,111,71,0.04)',
        md: '0 2px 8px rgba(139,111,71,0.08), 0 8px 24px rgba(139,111,71,0.06)',
        lg: '0 4px 16px rgba(139,111,71,0.10), 0 16px 48px rgba(139,111,71,0.08)',
        floating: '0 8px 32px rgba(139,111,71,0.12), 0 2px 8px rgba(139,111,71,0.08)',
      },
    },
  },
  plugins: [],
};
