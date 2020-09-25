import { StyleSheet } from 'react-native';
import { scaleX, scaleY, FullHeight, FullWidth } from 'constants/size';
import colors from 'constants/colors';

export default StyleSheet.create({
  screenLayoutStyle: {},
  backgroundLinesStyle: {
    position: 'absolute',
    top: 0,
    width: FullWidth,
    height: scaleX * 428,
  },
  buttonsContainerStyle: {
    marginTop: scaleY * 50,
    marginBottom: scaleY * 28,
    marginLeft: scaleX * 20,
    zIndex: 10,
  },
  avatarImageStyle: {
    width: scaleY * 120,
    height: scaleY * 120,
    alignSelf: 'center',
    marginTop: scaleY * 113,
    borderRadius: 100,
    borderWidth: 10,
    borderColor: colors.border,
    backgroundColor: colors.black,
    marginBottom: scaleY * 20,
  },
  usernameStyle: {
    marginBottom: scaleY * 10,
  },
  emailStyle: {
    marginBottom: scaleY * 20,
  },
});
