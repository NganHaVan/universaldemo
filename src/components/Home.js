import React from 'react';
import {View, Text, StyleSheet, Platform, TouchableOpacity} from 'react-native';
import {renderPlatform} from '../utils/helpers';

const Home = (props) => {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>Hello World from {renderPlatform()}</Text>
      <TouchableOpacity
        onPress={() => {
          props.navigation.navigate('About');
        }}>
        <Text
          style={[
            styles.link,
            Platform.OS === 'web' ? {cursor: 'pointer'} : {},
          ]}>
          Go to about screen
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  link: {
    color: 'blue',
  },
});

export default Home;
