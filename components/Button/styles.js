import { StyleSheet } from 'react-native';
import colors from 'constants/colors';
import { scaleX, scaleY, FullWidth } from 'constants/size';

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
    zIndex: 10,
    width: scaleX * 55,
  },
  backButtonImageStyle: {
    width: scaleX * 55,
    height: scaleY * 55,
  },
  connectButtonContainerStyle: {
    alignSelf: 'center',
  },
  connectImageStyle: {
    width: FullWidth - 40,
    height: scaleX * 63,
  },
  filterButtonContainerStyle: {
    flexDirection: 'column',
  },
  dateContainerStyle: {
    width: scaleX * 40,
    height: scaleX * 40,
    borderRadius: 50,
    borderWidth: 1,
    borderColor: colors.gray,
    justifyContent: 'center',
  },
  dateContainerActiveStyle: {
    borderWidth: 0,
    backgroundColor: colors.black,
    color: colors.white,
  },
  filterIconStyle: {
    width: scaleX * 25,
    height: scaleY * 25,
  },
  filterIconContainerStyle: {
    width: scaleY * 65,
    height: scaleY * 65,
    borderRadius: scaleX * 25,
    backgroundColor: colors.gray,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: scaleY * 10,
  },
  filterIconContainerActiveStyle: {
    backgroundColor: colors.accent,
  },
});
