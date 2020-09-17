import { StyleSheet } from 'react-native';
import { scaleX, scaleY } from 'constants/size';

export default StyleSheet.create({
  cardContainerStyle: {
    height: 210,
    width: scaleX * 177,
    borderRadius: 10,
    overflow: 'hidden',
    justifyContent: 'space-between',
    paddingBottom: scaleY * 17,
  },
  cardImageStyle: {
    width: scaleX * 190,
    height: 122,
    left: scaleX * -20,
  },
  titleTextStyle: {
    left: scaleX * 15,
  },
});
