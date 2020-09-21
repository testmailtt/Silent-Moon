import { StyleSheet } from 'react-native';
import { scaleX, scaleY } from 'constants/size';

export default StyleSheet.create({
  headerContainerStyle: {
    marginTop: scaleY * 120,
    marginBottom: scaleY * 30,
  },
  headerTitleStyle: {
    marginBottom: scaleY * 10,
  },
  scrollViewContainerStyle: {
    paddingHorizontal: scaleX * 20,
  },
  cardContainerStyle: {
    flexWrap: 'wrap',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: scaleY * 40,
  },
  cardMusicContainerStyle: {
    marginTop: scaleY * 20,
  },
  blockTitleStyle: {
    marginBottom: scaleY * 20,
  },
  scrollViewHorizontalContainerStyle: {
    marginBottom: scaleY * 40,
  },
  cardSpaceStyle: {
    marginRight: scaleX * 20,
  },
});
