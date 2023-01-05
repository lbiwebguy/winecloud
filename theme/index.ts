import { extendTheme } from 'native-base';

export const WineCloudTheme = extendTheme({
  // default settings for each component!
  components: {
    Heading: {
      baseStyle: {
        color: '#fff',
      },
    },
    Text: {
      baseStyle: {
        color: '#fff',
      },
    },
  },
  breakpoints: {
    base: 0, // 0 - 479
    sm: 480, // 480 - 767
    md: 768, // 768 - 959
    lg: 960, //960 - 1169
    xl: 1170, //1170 - 1439
    '2xl': 1440, // 1440+
  },
  fontSizes: {
    0: 9,
    1: 11,
    2: 12,
    3: 14,
    4: 16,
    5: 18,
    6: 22,
    7: 26,
    8: 30,
    9: 36,
    10: 44,
  },
  lineHeights: {
    '2xs': '1.4em',
    xs: '1.4em',
    sm: '1.4em',
    md: '1.4em',
    lg: '1.4em',
    xl: '1.75em',
    '2xl': '2em',
    '3xl': '2.5em',
    '4xl': '3em',
    '5xl': '4em',
  },
  fontConfig: {},
});
