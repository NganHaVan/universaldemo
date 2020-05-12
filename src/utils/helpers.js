import {Platform} from 'react-native';

export const renderPlatform = () => {
  return Platform.OS;
};

export const isWeb = () => {
  return Platform.OS === 'web';
};
