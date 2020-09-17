import { StyleSheet, Dimensions } from 'react-native';
import { scaleX, scaleY } from 'constants/size';

const FullWidth = Dimensions.get('window').width;

export default StyleSheet.create({
  backgroundImageContainerStyle: {
    position: 'relative',
    overflow: 'hidden',
    alignItems: 'center',
    flex: 5,
    marginBottom: scaleY * 30,
  },
  backgroundImageStyle: {
    position: 'absolute',
    bottom: 0,
    width: FullWidth + 40,
    height: 504,
    left: -20,
  },
  bodyContainerStyle: {
    flex: 3,
  },
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
