import { StyleSheet } from 'react-native';
import { scaleX, scaleY } from 'constants/size';
import colors from 'constants/colors';

export default StyleSheet.create({
  screenLayoutStyle: {
    backgroundColor: colors.blue,
    paddingBottom: scaleY * 40,
  },
  buttonsContainerStyle: {
    marginTop: scaleY * 50,
    marginBottom: scaleY * 20,
    marginHorizontal: scaleX * 20,
    flexDirection: 'row',
    alignItems: 'center',
  },
  headerTitleStyle: {
    marginLeft: scaleX * 61.8,
  },
  cardSleepContainerStyle: {
    marginBottom: scaleY * 20,
  },
  cardSpaceStyle: {
    marginBottom: scaleY * 20,
  },
  cardSleepRecommendedStyle: {
    paddingTop: scaleY * 30,
    flexDirection: 'row',
    flexWrap: 'wrap',
    paddingHorizontal: scaleX * 20,
    justifyContent: 'space-between',
  },
});
