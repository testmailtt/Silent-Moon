import { StyleSheet, Platform } from 'react-native';

import colors from 'constants/colors';
import { scaleY } from 'constants/size';

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

  sz11: {
    fontSize: Math.round(scaleY * 11 + 0.6),
  },

  sz12: {
    fontSize: Math.round(scaleY * 12 + 0.6),
  },

  sz14: {
    fontSize: Math.round(scaleY * 14 + 0.6),
  },

  sz16: {
    fontSize: Math.round(scaleY * 16 + 0.6),
  },

  sz18: {
    fontSize: Math.round(scaleY * 18 + 0.6),
  },

  sz20: {
    fontSize: Math.round(scaleY * 20 + 0.6),
  },

  sz24: {
    fontSize: Math.round(scaleY * 24 + 0.6),
  },

  sz28: {
    fontSize: Math.round(scaleY * 28 + 0.6),
  },

  sz30: {
    fontSize: Math.round(scaleY * 30 + 0.6),
  },

  sz34: {
    fontSize: Math.round(scaleY * 34 + 0.6),
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
