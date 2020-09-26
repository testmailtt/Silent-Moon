import { StyleSheet } from 'react-native';
import { scaleX, scaleY, FullWidth } from 'constants/size';
import colors from 'constants/colors';

export default StyleSheet.create({
  screenLayoutStyle: {
    backgroundColor: colors.blue,
  },
  screenLayoutContainerStyle: {
    marginTop: scaleY * 31.36,
    paddingHorizontal: scaleX * 20,
  },
  imageCoverStyle: {
    width: FullWidth,
    height: scaleY * 289,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
  },
  headerContainerStyle: {
    marginBottom: scaleY * 30,
  },
  headerTitleStyle: {
    marginBottom: scaleY * 15.37,
  },
  headerTypeStyle: {
    marginBottom: scaleY * 20,
  },
  buttonsContainerStyle: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: FullWidth - scaleX * 40,
    position: 'absolute',
    alignSelf: 'center',
    top: scaleY * 50,
  },
  likeButtonStyle: {
    marginRight: scaleX * 15,
  },
  iconStyle: {
    width: scaleX * 18.26,
    height: scaleY * 16.14,
    marginRight: scaleX * 10.68,
  },
  infoContainerStyle: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  spaceBetweenInfoStyle: {
    marginRight: scaleX * 50,
  },
  infoWrapperStyle: {
    flexDirection: 'row',
    marginBottom: scaleY * 25,
  },
  assistantContainerStyle: {
    marginBottom: scaleY * 25,
  },
  assistantScrollViewStyle: {
    height: 300,
  },
  dividerStyle: {
    backgroundColor: colors.divider,
    height: 1,
    width: '100%',
    alignSelf: 'center',
    opacity: 0.15,
    marginBottom: scaleY * 25,
  },
  cardSpaceStyle: {
    marginBottom: scaleY * 20,
  },
  cardSleepRecommendedStyle: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  relatedStyle: {
    marginBottom: scaleY * 20,
  },
});
