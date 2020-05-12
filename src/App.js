/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {SafeAreaView, View, Text, StatusBar, Platform} from 'react-native';
import {createApp} from './navigator';
import AppStack from './navigator/AppStack';

const App: () => React$Node = () => {
  const Root = createApp(AppStack);
  return (
    <View style={{flex: 1}}>
      <Root />
    </View>
  );
};

export default App;
