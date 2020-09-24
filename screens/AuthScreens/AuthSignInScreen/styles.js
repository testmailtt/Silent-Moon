import { StyleSheet } from 'react-native';
import { scaleX, scaleY, FullWidth } from 'constants/size';
import colors from 'constants/colors';

export default StyleSheet.create({
  backgroundLinesStyle: {
    position: 'absolute',
    top: 0,
    width: FullWidth,
    height: scaleX * 428,
  },
  titleStyle: {
    marginBottom: scaleY * 33,
  },
  connectButtonContainerStyle: {
    marginBottom: scaleY * 20,
  },
  bodyContainerStyle: {
    marginBottom: scaleY * 40,
  },
  subtitleTextStyle: {
    marginBottom: scaleY * 40,
  },
  emailContainerStyle: {
    marginBottom: scaleY * 20,
  },
  passwordContainerStyle: {
    marginBottom: scaleY * 30,
  },
  formContainerStyle: {
    backgroundColor: colors.white,
  },
  submitButtonStyle: {
    marginBottom: scaleY * 20,
  },
  forgotContainerStyle: {
    marginBottom: scaleY * 33,
    flexDirection: 'row',
    alignSelf: 'center',
  },
  buttonsContainerStyle: {
    marginTop: scaleY * 50,
    marginBottom: scaleY * 28,
    marginLeft: scaleX * 20,
    zIndex: 10,
  },
});
