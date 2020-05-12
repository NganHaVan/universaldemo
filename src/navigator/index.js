import {createBrowserApp} from '@react-navigation/web';
import {createAppContainer} from 'react-navigation';
import {isWeb} from '../utils/helpers';

export const createApp = isWeb() ? createBrowserApp : createAppContainer;
