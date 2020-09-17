import { Dimensions } from 'react-native';

const designWidth = 414;
const designHeight = 896;

const FullWidth = Dimensions.get('window').width;
const FullHeight = Dimensions.get('window').height;

export const scaleX = FullWidth / designWidth;
export const scaleY = FullHeight / designHeight;
