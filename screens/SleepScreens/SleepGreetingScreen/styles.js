import { StyleSheet } from 'react-native';
import { scaleX, scaleY, FullWidth, FullHeight } from 'constants/size';
import colors from 'constants/colors';

export default StyleSheet.create({
  screenLayoutStyle: {
    backgroundColor: colors.blue,
  },
  backgroundImageStyle: {
    position: 'absolute',
    width: FullWidth,
    height: FullHeight,
  },
  headerContainerStyle: {
    alignSelf: 'center',
    marginTop: scaleY * 155,
    paddingHorizontal: scaleX * 40,
    flex: 1,
  },
  headerTitleStyle: {
    marginBottom: scaleY * 15,
  },
  buttonStyle: {
    marginBottom: scaleY * 80,
  },
});
