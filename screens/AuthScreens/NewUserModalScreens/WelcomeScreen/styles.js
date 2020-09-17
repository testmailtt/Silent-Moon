import { StyleSheet, Dimensions } from 'react-native';
import { scaleX, scaleY } from 'constants/size';
import colors from 'constants/colors';

const FullWidth = Dimensions.get('window').width;

export default StyleSheet.create({
  backgroundContainerStyle: {
    backgroundColor: colors.accent,
  },
  greetingContainerStyle: {
    marginTop: scaleY * 155,
    alignSelf: 'center',
    marginBottom: scaleY * 15,
  },
  welcomeTextStyle: {
    marginBottom: scaleY * 5,
  },
  subtitleStyle: {
    width: FullWidth - scaleX * 48,
    alignSelf: 'center',
  },
  backgroundImageStyle: {
    position: 'absolute',
    alignSelf: 'center',
    width: scaleY * 574,
    height: scaleY * 575,
    bottom: scaleY * -25,
  },
  buttonNextStyle: {
    marginTop: scaleY * 438,
  },
});
