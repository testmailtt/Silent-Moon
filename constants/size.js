import { Dimensions } from 'react-native';

const designWidth = 414;
const designHeight = 896;

const FullWidth = Dimensions.get('window').width;
const FullHeight = Dimensions.get('window').height;

const scaleX = FullWidth / designWidth;
const scaleY = FullHeight / designHeight;

export { FullWidth, FullHeight, scaleX, scaleY };
