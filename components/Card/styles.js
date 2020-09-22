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
  cardCourseContainerStyle: {
    width: scaleX * 177,
    height: 177,
    borderRadius: 10,
    overflow: 'hidden',
    justifyContent: 'space-between',
  },
  cardCourseImageStyle: {
    position: 'absolute',
    top: 0,
    right: scaleX * -20,
  },
  cardCourseHeaderContainerStyle: {
    marginTop: 85,
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
    width: scaleX * 162,
    height: scaleY * 118.5,
    borderRadius: 10,
    marginBottom: scaleY * 10.5,
  },
  cardRecommendedTitleContainerStyle: {
    marginBottom: scaleY * 6,
  },
});
