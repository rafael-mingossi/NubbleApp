// // const {getDefaultConfig} = require('expo/metro-config');
// // const {mergeConfig} = require('@react-native/metro-config');
// const {getDefaultConfig, mergeConfig} = require('@react-native/metro-config');
//
// /**
//  * Metro configuration
//  * https://reactnative.dev/docs/metro
//  *
//  * @type {import("metro-config").MetroConfig}
//  */
// const config = {};
//
// // export default mergeConfig(getDefaultConfig(__dirname), config);
// module.exports = mergeConfig(getDefaultConfig(__dirname), config);

const {getDefaultConfig: getDefaultExpoConfig} = require('expo/metro-config');
const {mergeConfig, getDefaultConfig} = require('@react-native/metro-config');

/** @type {import('expo/metro-config').MetroConfig} */
const expoConfig = getDefaultExpoConfig(__dirname);
const defaultConfig = getDefaultConfig(__dirname);

const {sourceExts} = expoConfig.resolver;

const config = {
  transformer: {
    ...expoConfig.transformer,
  },
  resolver: {
    ...expoConfig.resolver,
    resolverMainFields: ['react-native', 'browser', 'main'],
    sourceExts: [...sourceExts, 'jsx', 'js', 'ts', 'tsx', 'cjs', 'json', 'mjs'],
  },
};

module.exports = mergeConfig(defaultConfig, expoConfig, config);
