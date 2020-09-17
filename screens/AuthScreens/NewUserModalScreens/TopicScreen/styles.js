import { StyleSheet } from 'react-native';
import { scaleX, scaleY, FullWidth, FullHeight } from 'constants/size';
import colors from 'constants/colors';

export default StyleSheet.create({
  titleContainerStyle: {
    marginTop: scaleY * 76,
    marginLeft: scaleX * 20,
    marginBottom: scaleY * 10,
  },
  subtitleStyle: {
    marginLeft: scaleX * 20,
    marginBottom: scaleY * 30,
  },
  backgroundImageStyle: {
    position: 'absolute',
    bottom: scaleY * -70,
    width: FullWidth,
    height: scaleX * FullHeight,
    zIndex: -1,
  },
  scrollViewStyle: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    paddingHorizontal: scaleX * 20,
    backgroundColor: colors.grayForeground,
  },
});
