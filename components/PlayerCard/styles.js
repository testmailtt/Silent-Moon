import { StyleSheet } from 'react-native';
import { scaleX, scaleY, FullWidth } from 'constants/size';

export default StyleSheet.create({
  playerCardContainerStyle: {
    alignItems: 'center',
    flexDirection: 'row',
    width: FullWidth,
    paddingVertical: scaleY * 20,
  },
  buttonImageStyle: {
    width: scaleX * 40,
    height: scaleY * 40,
    marginRight: scaleX * 20,
  },
  titleStyle: {
    marginBottom: scaleY * 6,
  },
});
