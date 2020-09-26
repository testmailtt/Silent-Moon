import { StyleSheet } from 'react-native';
import { scaleX, scaleY, FullWidth } from 'constants/size';

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
  cardCourseContainerStyle: {
    width: scaleX * 177,
    borderRadius: 10,
    overflow: 'hidden',
    justifyContent: 'space-between',
  },
  cardCourseImageStyle: {
    position: 'absolute',
    top: scaleY * -10,
    right: scaleX * -20,
    width: scaleX * 160,
    height: scaleY * 110,
  },
  cardCourseHeaderContainerStyle: {
    marginTop: 85,
    marginBottom: scaleY * 35,
    paddingHorizontal: scaleX * 15,
  },
  cardCourseFooterContainerStyle: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: scaleX * 15,
    paddingBottom: scaleY * 15,
    alignItems: 'center',
  },
  cardCourseButtonStyle: {
    width: scaleX * 70,
    height: scaleY * 35,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 25,
  },
  cardMusicContainerStyle: {
    width: '100%',
    height: scaleY * 95,
    borderRadius: 10,
    overflow: 'hidden',
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: scaleX * 30,
  },
  cardMusicImageStyle: {
    position: 'absolute',
    top: 0,
    right: 0,
    width: scaleX * 374,
    height: scaleY * 133,
  },
  cardMusicHeaderContainerStyle: {},
  cardMusicTitleContainerStyle: {
    marginBottom: scaleY * 10,
  },
  playButtonImageStyle: {
    width: 40,
    height: 40,
  },
  cardRecommendedContainerStyle: {},
  cardRecommendedImageStyle: {
    width: scaleX * 177,
    height: scaleY * 118.5,
    borderRadius: 10,
    marginBottom: scaleY * 10.5,
  },
  cardRecommendedTitleContainerStyle: {
    marginBottom: scaleY * 6,
  },
  cardMeditateImageStyle: {
    width: '100%',
    height: '100%',
  },
  cardMeditateHeaderContainerStyle: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
    height: scaleY * 52,
    zIndex: 10,
    justifyContent: 'center',
    paddingLeft: scaleX * 15,
  },
  sleepContainerStyle: {
    width: '100%',
    height: scaleY * 233,
    borderRadius: 10,
  },
  sleepImageContainerStyle: {
    width: '100%',
    height: '100%',
    position: 'absolute',
    top: 0,
  },
  cardSleepHeaderTitleStyle: {
    marginTop: scaleY * 60,
    textTransform: 'capitalize',
    marginBottom: scaleY * 5,
  },
  cardSleepHeaderDescriptionStyle: {
    width: scaleX * 230,
    alignSelf: 'center',
    marginBottom: scaleY * 22,
  },
  cardSleepButtonStyle: {
    width: scaleX * 70,
    height: scaleY * 35,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 25,
    alignSelf: 'center',
  },
});
