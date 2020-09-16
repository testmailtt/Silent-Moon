import { StyleSheet, Dimensions } from 'react-native';
import colors from 'constants/colors';

const FullHeight = Dimensions.get('window').height;
const FullWidth = Dimensions.get('window').width;

export default StyleSheet.create({
  buttonContainerStyle: {
    width: FullWidth - 40,
    height: FullHeight / 14,
    backgroundColor: colors.accent,
    borderRadius: 38,
    alignSelf: 'center',
    justifyContent: 'center',
  },
});
