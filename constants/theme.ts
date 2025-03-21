const COLORS = {
  // Primary Colors
  primary: '#007bff', // primary blue
  secondary: '#6c757d', // secondary gray

  // Grayscale / Neutral Colors
  gray: '#6c757d', // gray
  gray2: '#adb5bd', // Lighter gray for borders or less important elements

  // Background Colors
  white: '#ffffff', // Pure white
  lightWhite: '#f8f9fa', // light background
  lightDark: '#343a40', //  dark gray
  lightPink: '#f7f3f9',
};

const FONT = {
  regular: 'DMRegular',
  medium: 'DMMedium',
  bold: 'DMBold',
};

const SIZES = {
  xxxxSmall: 4,
  xxxSmall: 6,
  xxSmall: 8,
  xSmall: 10,
  small: 12,
  medium: 16,
  large: 20,
  xLarge: 24,
  xxLarge: 32,
  xxxLarge: 40,
  xxxxLarge: 48,
  xxxxxLarge: 96,
};

const SHADOWS = {
  small: {
    boxShadow: '0px 2px 3.84px rgba(0, 0, 0, 0.25)', // Equivalent boxShadow
    elevation: 2,
  },
  medium: {
    boxShadow: '0px 2px 5.84px rgba(0, 0, 0, 0.25)', // Equivalent boxShadow
    elevation: 5,
  },
};

export { COLORS, FONT, SIZES, SHADOWS };
