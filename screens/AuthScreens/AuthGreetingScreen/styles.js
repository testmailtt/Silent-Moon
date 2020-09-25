import { StyleSheet } from 'react-native';
import { FullWidth, scaleY } from 'constants/size';

export default StyleSheet.create({
  backgroundImageStyle: {
    width: FullWidth,
    height: 504,
    marginTop: scaleY * -50,
  },
  bodyContainerStyle: {},
  buttonContainerStyle: {
    marginBottom: scaleY * 28,
  },
  textContainerStyle: {
    width: FullWidth - 58,
    alignItems: 'center',
    alignSelf: 'center',
    marginBottom: scaleY * 62,
  },
  titleContainerStyle: {
    marginBottom: scaleY * 15,
  },
  signInContainerStyle: {
    flexDirection: 'row',
    alignSelf: 'center',
  },
});
