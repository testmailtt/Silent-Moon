import { StyleSheet, Dimensions } from 'react-native';

const FullHeight = Dimensions.get('window').height;
const FullWidth = Dimensions.get('window').width;

export default StyleSheet.create({
  backgroundImageContainerStyle: {
    position: 'relative',
    overflow: 'hidden',
    alignItems: 'center',
    flex: 5,
    marginBottom: 10,
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
    marginBottom: 20,
  },
  textContainerStyle: {
    width: FullWidth - 58,
    alignItems: 'center',
    alignSelf: 'center',
    marginBottom: FullHeight / 20,
  },
  titleContainerStyle: {
    marginBottom: 15,
  },
  signInContainerStyle: {
    flexDirection: 'row',
    alignSelf: 'center',
  },
});
