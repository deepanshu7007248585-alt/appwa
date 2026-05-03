/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  darkMode: ['class', '[data-theme="dark"]'],
  theme: {
    extend: {
      colors: {
        bg: {
          base: 'var(--bg-base)',
          elevated: 'var(--bg-elevated)',
          overlay: 'var(--bg-overlay)',
          input: 'var(--bg-input)',
          hover: 'var(--bg-hover)',
        },
        border: {
          subtle: 'var(--border-subtle)',
          DEFAULT: 'var(--border-default)',
          strong: 'var(--border-strong)',
        },
        text: {
          primary: 'var(--text-primary)',
          secondary: 'var(--text-secondary)',
          tertiary: 'var(--text-tertiary)',
          disabled: 'var(--text-disabled)',
        },
        accent: {
          DEFAULT: 'var(--accent-primary)',
          secondary: 'var(--accent-secondary)',
          glow: 'var(--accent-glow)',
        },
        stress: {
          low: 'var(--stress-low)',
          mid: 'var(--stress-mid)',
          high: 'var(--stress-high)',
          critical: 'var(--stress-critical)',
        },
      },
      fontFamily: {
        sans: ['Inter', 'SF Pro Display', '-apple-system', 'sans-serif'],
        mono: ['JetBrains Mono', 'Menlo', 'monospace'],
      },
      fontSize: {
        'display': ['48px', { lineHeight: '56px', fontWeight: '700', letterSpacing: '-0.02em' }],
        'h1': ['36px', { lineHeight: '44px', fontWeight: '700', letterSpacing: '-0.015em' }],
        'h2': ['28px', { lineHeight: '36px', fontWeight: '600' }],
        'h3': ['22px', { lineHeight: '30px', fontWeight: '600' }],
        'h4': ['18px', { lineHeight: '26px', fontWeight: '600' }],
        'body-lg': ['16px', { lineHeight: '24px' }],
        'body': ['14px', { lineHeight: '22px' }],
        'caption': ['12px', { lineHeight: '18px', fontWeight: '500' }],
        'micro': ['10px', { lineHeight: '14px', fontWeight: '600', letterSpacing: '0.08em' }],
      },
      borderRadius: {
        'xs': '4px', 'sm': '8px', 'md': '12px',
        'lg': '16px', 'xl': '20px', '2xl': '28px',
      },
      boxShadow: {
        'sm': '0 1px 2px rgba(0,0,0,0.3)',
        'md': '0 4px 12px rgba(0,0,0,0.4)',
        'lg': '0 10px 30px rgba(0,0,0,0.5)',
        'xl': '0 20px 60px rgba(0,0,0,0.6)',
        'glow-accent': '0 0 24px rgba(108,143,255,0.35)',
        'glow-success': '0 0 24px rgba(74,222,128,0.35)',
        'glow-danger': '0 0 24px rgba(239,68,68,0.4)',
        'inset-glow': 'inset 0 1px 0 rgba(255,255,255,0.04)',
      },
      backgroundImage: {
        'gradient-hero': 'linear-gradient(135deg, #6C8FFF 0%, #A78BFA 100%)',
        'gradient-stress-low': 'linear-gradient(135deg, #4ADE80 0%, #22C55E 100%)',
        'gradient-stress-mid': 'linear-gradient(135deg, #FBBF24 0%, #F59E0B 100%)',
        'gradient-stress-high': 'linear-gradient(135deg, #F87171 0%, #EF4444 100%)',
        'card-glow': 'radial-gradient(circle at top right, rgba(108,143,255,0.1), transparent 60%)',
      },
      animation: {
        'fade-in': 'fadeIn 0.4s ease-out',
        'slide-up': 'slideUp 0.5s cubic-bezier(0.16, 1, 0.3, 1)',
        'slide-down': 'slideDown 0.4s ease-out',
        'pulse-soft': 'pulseSoft 2s ease-in-out infinite',
        'breathe': 'breathe 4s ease-in-out infinite',
        'shimmer': 'shimmer 2s linear infinite',
        'ring-fill': 'ringFill 1.2s cubic-bezier(0.16, 1, 0.3, 1) forwards',
      },
      keyframes: {
        fadeIn: { '0%': { opacity: 0 }, '100%': { opacity: 1 } },
        slideUp: {
          '0%': { opacity: 0, transform: 'translateY(12px)' },
          '100%': { opacity: 1, transform: 'translateY(0)' },
        },
        slideDown: {
          '0%': { opacity: 0, transform: 'translateY(-12px)' },
          '100%': { opacity: 1, transform: 'translateY(0)' },
        },
        pulseSoft: {
          '0%, 100%': { opacity: 1, transform: 'scale(1)' },
          '50%': { opacity: 0.85, transform: 'scale(1.02)' },
        },
        breathe: {
          '0%, 100%': { transform: 'scale(1)', opacity: 0.8 },
          '50%': { transform: 'scale(1.05)', opacity: 1 },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
      },
      transitionTimingFunction: {
        'spring': 'cubic-bezier(0.16, 1, 0.3, 1)',
      },
    },
  },
  plugins: [],
};
