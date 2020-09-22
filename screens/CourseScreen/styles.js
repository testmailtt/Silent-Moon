import { StyleSheet } from 'react-native';
import { scaleX, scaleY, FullWidth } from 'constants/size';
import colors from 'constants/colors';

export default StyleSheet.create({
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
    marginBottom: scaleY * 40,
  },
  assistantContainerStyle: {
    marginBottom: scaleY * 25,
  },
  assistantScrollViewStyle: {
    height: 300,
  },
  tabHeaderContainerStyle: {
    flexDirection: 'row',
  },
  tabHeaderButtonActiveStyle: {
    alignItems: 'center',
  },
  tabHeaderTitleActiveStyle: {
    marginBottom: 4,
  },
  tabHeaderBorderBottomStyle: {
    height: 2,
    width: scaleX * 46.85,
    backgroundColor: colors.accent,
    borderTopLeftRadius: 2,
    borderTopRightRadius: 2,
  },
  tabHeaderSpaceStyle: {
    marginRight: scaleX * 74,
  },
  dividerStyle: {
    backgroundColor: colors.lightAccent,
    height: 1,
    width: FullWidth,
    alignSelf: 'center',
  },
  tabScrollViewContainerStyle: {
    height: '100%',
    paddingTop: scaleY * 10,
  },
  playerDividerStyle: {
    height: 1,
    width: FullWidth,
    backgroundColor: colors.accentForeground,
    opacity: 0.15,
  },
});
