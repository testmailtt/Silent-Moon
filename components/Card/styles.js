import { StyleSheet } from 'react-native';
import { scaleX, scaleY } from 'constants/size';

export default StyleSheet.create({
  cardContainerStyle: {
    borderRadius: 10,
    overflow: 'hidden',
    justifyContent: 'space-between',
    marginBottom: 21,
  },
  cardImageStyle: {
    alignSelf: 'center',
    width: scaleX * 175,
  },
  titleTextStyle: {
    left: scaleX * 15,
    width: 131,
    marginBottom: 17,
  },
  cardContainerActiveStyle: {
    opacity: 0.5,
  },
  activeIconStyle: {
    width: 24,
    height: 24,
    position: 'absolute',
    top: scaleY * 10,
    left: scaleX * 10,
  },
});
