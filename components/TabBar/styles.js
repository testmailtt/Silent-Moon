import { StyleSheet } from 'react-native';
import { scaleX, scaleY, FullWidth } from 'constants/size';
import colors from 'constants/colors';

export default StyleSheet.create({
  tabBarContainerStyle: {
    width: FullWidth,
    height: scaleY * 112,
    backgroundColor: colors.white,
    flexDirection: 'row',

    shadowColor: '#000',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.1,
    shadowRadius: 10,
    paddingHorizontal: scaleX * 20,
    paddingTop: scaleY * 10,
  },
  tabBarIconContainerStyle: {
    width: 46,
    height: 46,
    justifyContent: 'center',
    alignItems: 'center',
  },
  tabBarActiveIconStyle: {
    width: 46,
    height: 46,
    marginBottom: scaleY * 5,
  },
  tabBarInactiveIconStyle: {
    width: scaleY * 24,
    height: scaleY * 30,
    marginBottom: scaleY * 5,
  },
  tabBarButtonContainerStyle: {
    alignItems: 'center',
    height: scaleY * 66,
    justifyContent: 'space-between',
  },
  tabBarSpaceBetweenStyle: {
    marginRight: scaleX * 30,
  },
});
