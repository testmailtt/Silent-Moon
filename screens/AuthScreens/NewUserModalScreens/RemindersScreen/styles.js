import { StyleSheet } from 'react-native';
import { scaleX, scaleY } from 'constants/size';
import colors from 'constants/colors';

export default StyleSheet.create({
  upperContainerStyle: {
    marginTop: scaleY * 82,
  },
  headerContainerStyle: {
    paddingHorizontal: scaleX * 20,
    marginBottom: scaleY * 30,
  },
  headerTitleStyle: {
    width: scaleX * 259,
    marginBottom: scaleY * 15,
  },
  headerSubtitleStyle: {
    width: scaleY * 350,
  },
  timePickerContainerStyle: {
    backgroundColor: colors.timePickerForeground,
    borderRadius: 20,
    height: scaleX * 212,
    width: scaleX * 399,
    alignSelf: 'center',
    justifyContent: 'center',
    marginBottom: scaleY * 30,
  },
  timePickerStyle: {
    height: scaleX * 192,
    width: scaleX * 373,
    alignSelf: 'center',
  },
  dateContainerStyle: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: scaleX * 20,
    marginBottom: scaleY * 58,
  },
  saveButtonStyle: {
    marginBottom: scaleY * 20,
  },
});
