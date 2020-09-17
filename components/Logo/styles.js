import { StyleSheet } from 'react-native';
import { scaleX, scaleY } from 'constants/size';

export default StyleSheet.create({
  logoImageStyle: {
    height: scaleY * 30,
    width: scaleX * 168,
    position: 'absolute',
    paddingVertical: scaleY * 50,
    alignSelf: 'center',
  },
});
