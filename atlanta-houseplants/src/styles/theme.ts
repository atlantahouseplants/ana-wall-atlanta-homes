// Atlanta Houseplants Design System
// Color tokens and theme configuration

export const theme = {
  colors: {
    // Primary brand colors
    forest: {
      DEFAULT: '#2D5016',
      light: '#4A7C2A',
      dark: '#1A3009',
    },
    sage: {
      DEFAULT: '#7FB069',
      light: '#9BC285',
      dark: '#5E8A4A',
    },
    earth: {
      DEFAULT: '#8B4513',
      light: '#A0522D',
      dark: '#654321',
    },
    cream: {
      DEFAULT: '#F5F5DC',
      light: '#FAFAF0',
      dark: '#E6E6C7',
    },
    // Semantic colors
    success: '#22C55E',
    warning: '#F59E0B',
    error: '#EF4444',
    info: '#3B82F6',
  },
  
  typography: {
    fontFamily: {
      primary: ['Inter', 'sans-serif'],
    },
    fontSize: {
      xs: '0.75rem',
      sm: '0.875rem',
      base: '1rem',
      lg: '1.125rem',
      xl: '1.25rem',
      '2xl': '1.5rem',
      '3xl': '1.875rem',
      '4xl': '2.25rem',
      '5xl': '3rem',
      '6xl': '3.75rem',
    },
    fontWeight: {
      light: '300',
      normal: '400',
      medium: '500',
      semibold: '600',
      bold: '700',
    },
  },
  
  spacing: {
    section: {
      sm: '4rem',
      md: '6rem',
      lg: '8rem',
    },
    container: {
      padding: '1rem',
      maxWidth: '1200px',
    },
  },
  
  borderRadius: {
    sm: '0.25rem',
    md: '0.5rem',
    lg: '0.75rem',
    xl: '1rem',
    full: '9999px',
  },
  
  shadows: {
    sm: '0 1px 2px 0 rgb(0 0 0 / 0.05)',
    md: '0 4px 6px -1px rgb(0 0 0 / 0.1)',
    lg: '0 10px 15px -3px rgb(0 0 0 / 0.1)',
    xl: '0 20px 25px -5px rgb(0 0 0 / 0.1)',
  },
  
  animation: {
    duration: {
      fast: '200ms',
      normal: '300ms',
      slow: '500ms',
    },
    easing: {
      ease: 'ease',
      easeIn: 'ease-in',
      easeOut: 'ease-out',
      easeInOut: 'ease-in-out',
    },
  },
} as const;

// Service-specific color mappings
export const serviceColors = {
  'office-design': theme.colors.forest,
  'office-care': theme.colors.sage,
  'plant-doctor': theme.colors.earth,
  'corporate-gifting': theme.colors.cream,
  'workshops': theme.colors.sage,
  'donations': theme.colors.forest,
} as const;

// CTA button variants
export const ctaVariants = {
  primary: {
    background: theme.colors.forest.DEFAULT,
    hover: theme.colors.forest.dark,
    text: '#ffffff',
  },
  secondary: {
    background: theme.colors.sage.DEFAULT,
    hover: theme.colors.sage.dark,
    text: '#ffffff',
  },
  outline: {
    background: 'transparent',
    border: theme.colors.forest.DEFAULT,
    text: theme.colors.forest.DEFAULT,
    hover: {
      background: theme.colors.forest.DEFAULT,
      text: '#ffffff',
    },
  },
} as const;

export type ThemeColors = typeof theme.colors;
export type ServiceType = keyof typeof serviceColors;
export type CTAVariant = keyof typeof ctaVariants;
