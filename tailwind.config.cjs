/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{ts,tsx,js,jsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['DM Sans', 'sans-serif'],
        display: ['Space Grotesk', 'sans-serif'],
      },
      colors: {
        sf: {
          blue: '#00A1E0',
          orange: '#FF6B35',
          navy: '#032D60',
          'light-blue': '#B0E0FA',
        },
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)',
      },
      boxShadow: {
        card: '0 2px 12px rgba(0,0,0,0.08)',
        'card-hover': '0 8px 32px rgba(0,0,0,0.12)',
      },
      backgroundImage: {
        'trailhead-gradient': 'linear-gradient(135deg, #032D60 0%, #00A1E0 50%, #FF6B35 100%)',
        'hero-gradient': 'linear-gradient(135deg, #032D60 0%, #0070d2 60%, #00A1E0 100%)',
      },
      animation: {
        'fade-in-up': 'fadeInUp 0.6s cubic-bezier(0.4, 0, 0.2, 1) forwards',
        'pulse-glow': 'pulseGlow 2s ease-in-out infinite',
      },
    },
  },
  plugins: [require('tailwindcss-animate')],
}
