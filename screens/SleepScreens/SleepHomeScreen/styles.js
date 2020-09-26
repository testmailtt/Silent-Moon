import { StyleSheet } from 'react-native';
import { scaleX, scaleY, FullWidth, FullHeight } from 'constants/size';
import colors from 'constants/colors';

export default StyleSheet.create({
  screenLayoutStyle: {
    backgroundColor: colors.blue,
    paddingHorizontal: scaleX * 20,
  },
  backgroundImageStyle: {
    width: FullWidth,
    height: scaleY * 276,
    top: 0,
    position: 'absolute',
  },
  headerContainerStyle: {
    marginTop: scaleY * 86,
    width: scaleY * 300,
    alignSelf: 'center',
    marginBottom: scaleY * 34,
  },
  headerTitleStyle: {
    marginBottom: scaleY * 15,
  },
  horizontalScrollViewContainerStyle: {
    paddingBottom: scaleY * 44,
    marginBottom: scaleY * 30,
  },
  filterSpaceStyle: {
    marginRight: scaleX * 20,
  },
  cardSleepContainerStyle: {
    marginBottom: scaleY * 20,
  },
  cardSpaceStyle: {
    marginBottom: scaleY * 20,
  },
  cardSleepRecommendedStyle: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
});
