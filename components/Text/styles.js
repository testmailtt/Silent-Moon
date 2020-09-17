import { StyleSheet, Platform } from 'react-native';

import colors from 'constants/colors';

const colorStyles = Object.entries(colors)
  .map(([name, color]) => ({
    [`color_${name}`]: { color },
  }))
  .reduce((acc, obj) => ({ ...acc, ...obj }), {});

const alignStyles = ['left', 'center', 'right'].reduce(
  (acc, align) => ({ ...acc, [align]: { textAlign: align } }),
  {}
);

const transformStyles = ['uppercase'].reduce(
  (acc, transform) => ({ ...acc, [transform]: { textTransform: transform } }),
  {}
);

export default StyleSheet.create({
  container: {
    fontFamily: 'HelveticaNeue',
  },

  sz14: {
    fontSize: 14,
  },

  sz16: {
    fontSize: 16,
  },

  sz18: {
    fontSize: 18,
  },

  sz20: {
    fontSize: 20,
  },

  sz24: {
    fontSize: 24,
  },

  sz28: {
    fontSize: 28,
  },

  sz30: {
    fontSize: 30,
  },

  sz34: {
    fontSize: 34,
  },

  thin: {
    ...Platform.select({
      ios: {
        fontWeight: '100',
      },
      android: {
        fontFamily: 'HelveticaNeue-Thin',
      },
    }),
  },

  ultraLight: {
    ...Platform.select({
      ios: {
        fontWeight: '200',
      },
      android: {
        fontFamily: 'HelveticaNeue-UltraLight',
      },
    }),
  },

  light: {
    ...Platform.select({
      ios: {
        fontWeight: '300',
      },
      android: {
        fontFamily: 'HelveticaNeue-Light',
      },
    }),
  },

  regular: {
    ...Platform.select({
      ios: {
        fontWeight: '400',
      },
      android: {
        fontFamily: 'HelveticaNeue-Regular',
      },
    }),
  },

  medium: {
    ...Platform.select({
      ios: {
        fontWeight: '500',
      },
      android: {
        fontFamily: 'HelveticaNeue-Medium',
      },
    }),
  },

  bold: {
    ...Platform.select({
      ios: {
        fontWeight: '600',
      },
      android: {
        fontFamily: 'HelveticaNeue-Bold',
      },
    }),
  },

  heavy: {
    ...Platform.select({
      ios: {
        fontWeight: '700',
      },
      android: {
        fontFamily: 'HelveticaNeue-Heavy',
      },
    }),
  },

  black: {
    ...Platform.select({
      ios: {
        fontWeight: '800',
      },
      android: {
        fontFamily: 'HelveticaNeue-Black',
      },
    }),
  },

  ...alignStyles,

  ...colorStyles,

  ...transformStyles,
});
