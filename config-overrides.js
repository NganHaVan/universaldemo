const path = require('path');
// const webpack = require('webpack');
const {
  override,
  addBabelPlugins,
  babelInclude,
  removeModuleScopePlugin,
} = require('customize-cra');

const modulesPath = path.resolve(__dirname, 'node_modules');

module.exports = override(
  removeModuleScopePlugin(),
  babelInclude([
    path.resolve('src'),
    path.resolve(modulesPath, 'react-navigation'),
    path.resolve(modulesPath, '@react-navigation', 'native'),
    path.resolve(modulesPath, 'react-native-gesture-handler'),
    path.resolve(modulesPath, 'react-navigation-stack'),
    path.resolve(modulesPath, '@react-native-community'),
    path.resolve(modulesPath, 'react-native-screens'),
  ]),
  addBabelPlugins('@babel/plugin-proposal-class-properties'),
);
