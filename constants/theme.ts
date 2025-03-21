const COLORS = {
  // Primary Colors
  primary: '#D8514E', // Vibrant Vermilion (dominant color for highlights or main elements)
  secondary: '#264653', // Deep Indigo (used for navigation bars or secondary emphasis)
  tertiary: '#E9C46A', // Golden Ochre (used for accents like buttons or icons)

  // Grayscale / Neutral Colors
  gray: '#83829A', // Neutral gray for subtext
  gray2: '#C1C0C8', // Light gray for borders or less important elements

  // Background Colors
  white: '#F7F5E6', // Ivory White (main background color for a clean look)
  lightWhite: '#FAFAFC', // Subtle off-white for secondary backgrounds
  lightDark: '#343434',
  lightPink: '#f7f3f9',

  // Accent Colors
  accent1: '#FFC1CC', // Cherry Blossom Pink (for subtle highlights or decorative touches)
  accent2: '#A8D5BA', // Soft Bamboo Green (to add a natural, calming vibe)

  // Optional Highlight Colors
  highlight: '#D72638', // Crimson Red (for CTAs or alert elements)
  gold: '#B29700', // Muted Gold (for premium features or special emphasis)
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
};

const SHADOWS = {
  // small: {
  //   shadowColor: '#000',
  //   shadowOffset: {
  //     width: 0,
  //     height: 2,
  //   },
  //   shadowOpacity: 0.25,
  //   shadowRadius: 3.84,
  //   elevation: 2,
  // },
  // medium: {
  //   shadowColor: '#000',
  //   shadowOffset: {
  //     width: 0,
  //     height: 2,
  //   },
  //   shadowOpacity: 0.25,
  //   shadowRadius: 5.84,
  //   elevation: 5,
  // },
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
