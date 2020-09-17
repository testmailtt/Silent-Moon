import { StyleSheet, Dimensions } from 'react-native';
import colors from 'constants/colors';
import { scaleX, scaleY } from 'constants/size';

const FullWidth = Dimensions.get('window').width;

export default StyleSheet.create({
  buttonContainerStyle: {
    width: FullWidth - 40,
    height: scaleY * 63,
    backgroundColor: colors.accent,
    borderRadius: 38,
    alignSelf: 'center',
    justifyContent: 'center',
  },
  buttonWhiteContainerStyle: {
    width: FullWidth - 40,
    height: scaleY * 63,
    backgroundColor: colors.secondaryForeground,
    borderRadius: 38,
    alignSelf: 'center',
    justifyContent: 'center',
  },
  backButtonContainerStyle: {
    paddingVertical: scaleY * 50,
    paddingHorizontal: 20,
    paddingBottom: scaleY * 28,
    zIndex: 10,
    width: scaleX * 55,
  },
  backButtonImageStyle: {
    width: scaleX * 55,
    height: scaleX * 55,
  },
  connectButtonContainerStyle: {
    alignSelf: 'center',
  },
  connectImageStyle: {
    width: FullWidth - 40,
    height: scaleX * 63,
  },
});
