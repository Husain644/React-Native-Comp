module.exports = {
  presets:['module:@react-native/babel-preset'],
  plugins: [
  
    [
      "module:react-native-dotenv",
      {moduleName: "react-native-dotenv",
      },
    ],
  ],
  env: {
    production: {
      plugins: ['react-native-paper/babel'],
    },
  },
};
