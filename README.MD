# React Native Boilerplate

React Native Boilerplate is a lightweight template which uses most dependencies you need to start your project.

## Quick start

1. Make sure that you have Node.js v8.15.1 and npm v5 or above installed.
2. Clone this repo using `git clone --depth=1 https://github.com/AntonyFomichev/React-Native-Boilerplate.git <YOUR_PROJECT_NAME>`
3. Move to the appropriate directory: `cd <YOUR_PROJECT_NAME>`.
4. Rename project. You can do this using [react-native-rename](https://github.com/junedomingo/react-native-rename): Run `npx react-native-rename <newName>`
5. Run `yarn` to install dependencies, move to ios package with `cd ios` and run `pod install` to install CocoaPods dependencies.

Now you're ready to make something beautiful!

> Please note that this boilerplate is **production-ready and not meant for beginners**! If you're just starting out with react-native or redux, please refer to https://reactnative.dev/docs/0.60/getting-started instead. If you want a solid, battle-tested base to build your next product upon and have some experience with react-native, this is the perfect start for you.

## List of dependencies

- **General**
  - React Navigation
  - React Redux
  - Redux Observable
  - Redux Toolbelt
- **Testing**
  - Jest
- **Tools**
  - Reactotron
  - i18n-js
  - Husky
  - Flow