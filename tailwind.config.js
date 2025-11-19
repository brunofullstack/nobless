module.exports = {
  content: [".pages/*.{html,js}", "./index.html", "./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        primary: {
          50: "#F8F6F3",
          100: "#F0EBE4",
          200: "#E1D7C9",
          300: "#D2C3AE",
          400: "#B59978",
          500: "#8B6F47", // warm cognac brown
          600: "#7D6340",
          700: "#6A5336",
          800: "#57432C",
          900: "#483624",
          DEFAULT: "#8B6F47",
        },
        secondary: {
          50: "#FDFCFA",
          100: "#F9F7F3",
          200: "#F2EDE6",
          300: "#EBE3D9",
          400: "#DDD4C5",
          500: "#D4C4B0", // soft champagne beige
          600: "#C0B09E",
          700: "#A1958A",
          800: "#827A76",
          900: "#6B6562",
          DEFAULT: "#D4C4B0",
        },
        accent: {
          50: "#F9F7F4",
          100: "#F3EEE8",
          200: "#E6DDD1",
          300: "#D9CCBA",
          400: "#BFAA8B",
          500: "#A0845C", // rich caramel tone
          600: "#907753",
          700: "#786446",
          800: "#605139",
          900: "#4F422F",
          DEFAULT: "#A0845C",
        },
        background: "#FDFCFA", // warm off-white
        surface: "#F7F5F2", // subtle cream
        text: {
          primary: "#2C2420", // deep espresso
          secondary: "#6B5D52", // muted brown
        },
        success: {
          50: "#F6F7F6",
          100: "#EDEFED",
          200: "#DBDDD9",
          300: "#C9CBC5",
          400: "#A4A79D",
          500: "#7A8471", // sage green
          600: "#6E7766",
          700: "#5C6456",
          800: "#4A5146",
          900: "#3D423A",
          DEFAULT: "#7A8471",
        },
        warning: {
          50: "#FBF9F6",
          100: "#F7F2ED",
          200: "#EFE5DB",
          300: "#E7D8C9",
          400: "#D7BEA5",
          500: "#B8956A", // warm amber
          600: "#A68660",
          700: "#8B7150",
          800: "#705B40",
          900: "#5C4A35",
          DEFAULT: "#B8956A",
        },
        error: {
          50: "#FAF8F6",
          100: "#F5F0ED",
          200: "#EBE1DB",
          300: "#E1D2C9",
          400: "#CDB4A5",
          500: "#A67C5A", // muted terracotta
          600: "#957051",
          700: "#7D5E44",
          800: "#654C37",
          900: "#533E2E",
          DEFAULT: "#A67C5A",
        },
      },
      fontFamily: {
        playfair: ['Playfair Display', 'serif'],
        inter: ['Inter', 'sans-serif'],
        source: ['Source Sans Pro', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
        sans: ['Inter', 'sans-serif'],
        serif: ['Playfair Display', 'serif'],
      },
      fontSize: {
        'xs': ['0.75rem', { lineHeight: '1rem' }],
        'sm': ['0.875rem', { lineHeight: '1.25rem' }],
        'base': ['1rem', { lineHeight: '1.5rem' }],
        'lg': ['1.125rem', { lineHeight: '1.75rem' }],
        'xl': ['1.25rem', { lineHeight: '1.75rem' }],
        '2xl': ['1.5rem', { lineHeight: '2rem' }],
        '3xl': ['1.875rem', { lineHeight: '2.25rem' }],
        '4xl': ['2.25rem', { lineHeight: '2.5rem' }],
        '5xl': ['3rem', { lineHeight: '1' }],
        '6xl': ['3.75rem', { lineHeight: '1' }],
        '7xl': ['4.5rem', { lineHeight: '1' }],
        '8xl': ['6rem', { lineHeight: '1' }],
        '9xl': ['8rem', { lineHeight: '1' }],
      },
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
        '128': '32rem',
      },
      borderRadius: {
        'luxury': '8px',
        'luxury-md': '16px',
        'luxury-lg': '24px',
      },
      boxShadow: {
        'warm-sm': '0 1px 2px rgba(139, 111, 71, 0.08)',
        'warm': '0 2px 4px rgba(139, 111, 71, 0.15)',
        'warm-md': '0 4px 8px rgba(139, 111, 71, 0.12)',
        'warm-lg': '0 8px 16px rgba(139, 111, 71, 0.15)',
        'warm-xl': '0 12px 24px rgba(139, 111, 71, 0.20)',
      },
      animation: {
        'fade-in': 'fadeIn 300ms cubic-bezier(0.4, 0.0, 0.2, 1)',
        'slide-up': 'slideUp 300ms cubic-bezier(0.4, 0.0, 0.2, 1)',
        'scale-in': 'scaleIn 300ms cubic-bezier(0.4, 0.0, 0.2, 1)',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(10px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        scaleIn: {
          '0%': { transform: 'scale(0.95)', opacity: '0' },
          '100%': { transform: 'scale(1)', opacity: '1' },
        },
      },
      transitionTimingFunction: {
        'luxury': 'cubic-bezier(0.4, 0.0, 0.2, 1)',
      },
      transitionDuration: {
        '300': '300ms',
        '600': '600ms',
      },
      backdropBlur: {
        'luxury': '8px',
      },
    },
  },
  plugins: [],
}