import { StyleSheet } from 'react-native';
import { scaleX, scaleY } from 'constants/size';
import colors from 'constants/colors';

export default StyleSheet.create({
  scrollViewContainerStyle: {
    paddingHorizontal: scaleX * 20,
  },
  headerTitleStyle: {
    marginTop: scaleY * 66,
    marginBottom: scaleY * 15,
  },
  headerSubTitleStyle: {
    paddingHorizontal: scaleX * 14,
    marginBottom: scaleY * 34,
  },
  filterSpaceStyle: {
    marginRight: scaleX * 20,
  },
  horizontalScrollViewContainerStyle: {
    marginBottom: scaleY * 30,
  },
  cardMusicContainerStyle: {
    marginBottom: scaleY * 20,
  },
  cardMeditateContainerStyle: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  viewBalanceStyle: {
    marginTop: scaleY * -40,
  },
});
