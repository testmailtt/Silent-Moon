import { StyleSheet } from 'react-native';
import colors from 'constants/colors';
import { scaleX, scaleY, FullWidth } from 'constants/size';

export default StyleSheet.create({
  errorTextStyle: {
    borderColor: colors.error,
    borderWidth: 1,
  },
  inputStyle: {
    backgroundColor: colors.secondary,
    width: FullWidth - 40,
    height: scaleY * 63,
    borderRadius: 15,
    alignSelf: 'center',
    paddingHorizontal: scaleX * 20,
    fontSize: 16,
    marginBottom: scaleY * 10,
  },
});
