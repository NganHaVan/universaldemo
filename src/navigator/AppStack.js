import {createStackNavigator} from 'react-navigation-stack';
import Home from '../components/Home';
import About from '../components/About';
import {Platform} from 'react-native';

const navigationHeaderConfigs = {
  // headerLayoutPreset: 'center',
  // animationEnabled: !isWeb(),
  headerMode: Platform.select({
    ios: 'float',
    default: 'screen',
  }),
  defaultNavigationOptions: {
    headerStyle: {
      borderBottomWidth: 0,
      borderBottomColor: 'transparent',
      elevation: 0,
      boxShadow: '',
      shadowOpacity: 0,
      shadowRadius: 0,
    },

    headerBackTitle: null,
  },
};

const AppStack = createStackNavigator(
  {
    Home: {
      screen: Home,
      path: '',
      navigationOptions: {
        headerTitle: 'Home',
      },
    },
    About: {
      screen: About,
      path: 'about',
      navigationOptions: {
        headerTitle: 'About',
      },
    },
  },
  {
    ...navigationHeaderConfigs,
  },
);
export default AppStack;
