export const theme = {
  colors: {
    secondaryColor: '#14c3a2',
    white: '#FFFFFF',
    dark: '#090213',
    green: '#078a85',
    mediumGray: '#DDDDDD',
  },
  font: {
    family: {
      main: "'Work Sans', sans-serif",
      default: "'Open Sans', sans-serif",
      secondary: "'Work Sans2', sans-serif",
    },
    sizes: {
      xsmall: '8rem',
      small: '1.6rem',
      medium: '2.4rem',
      large: '3.2rem',
      xlarge: '4.0rem',
      xxlarge: '4.8rem',
      huge: '5.6rem',
      xhuge: '6.4rem',
    },
  },
  media: {
    lteMedium: '(max-width: 768px)',
    lteSmall: '(max-width: 344px)',
  },
  spacings: {
    xsmall: '8rem',
    small: '1.6rem',
    medium: '2.4rem',
    large: '3.2rem',
    xlarge: '4.0rem',
    xxlarge: '4.8rem',
    huge: '5.6rem',
    xhuge: '6.4rem',
  },
} as const;
