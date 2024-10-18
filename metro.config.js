// const {getDefaultConfig} = require('expo/metro-config');
// const {mergeConfig} = require('@react-native/metro-config');
const {getDefaultConfig, mergeConfig} = require('@react-native/metro-config');

/**
 * Metro configuration
 * https://reactnative.dev/docs/metro
 *
 * @type {import("metro-config").MetroConfig}
 */
const config = {};

// export default mergeConfig(getDefaultConfig(__dirname), config);
module.exports = mergeConfig(getDefaultConfig(__dirname), config);
