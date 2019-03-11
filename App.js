import React from 'react';
import { Platform, StatusBar, StyleSheet, View } from 'react-native';
import { AppLoading, Asset, Font, Icon } from 'expo';
import AppNavigator from './navigation/AppNavigator';

// 1. import your context into any file you want to use it
import MyContext from './context-example';

export default class App extends React.Component {
  state = {
    isLoadingComplete: false,
    // 2. have some data for context stored in state somewhere
    valueForContext: 'hello',
  };

  render() {
    const { isLoadingComplete, valueForContext } = this.state;
    if (!isLoadingComplete && !this.props.skipLoadingScreen) {
      return (
        <AppLoading
          startAsync={this._loadResourcesAsync}
          onFinish={this._handleFinishLoading}
        />
      );
    } else {
      return (
        // 3. Use a provider to give the values to context that you want to share
        <MyContext.Provider
          // 4. pass down data & method to update data via a `value` prop
          // it is important that this shape is consistent wherever you use context
          value={{
            text: valueForContext,
            toggleText: this._handleChangeContext,
          }}
        >
          <View style={styles.container}>
            {Platform.OS === 'ios' && <StatusBar barStyle="default" />}
            <AppNavigator />
          </View>
        </MyContext.Provider>
      );
    }
  }

  // 5. Here is my stupid function for updating the context
  _handleChangeContext = () => {
    this.setState(state => ({
      valueForContext: state.valueForContext === 'hello' ? 'bye' : 'hello',
    }));
  };
  // 6. Go to HomeScreen.js

  _loadResourcesAsync = async () => {
    return Promise.all([
      Asset.loadAsync([
        require('./assets/images/robot-dev.png'),
        require('./assets/images/robot-prod.png'),
      ]),
      Font.loadAsync({
        ...Icon.Ionicons.font,
        'space-mono': require('./assets/fonts/SpaceMono-Regular.ttf'),
      }),
    ]);
  };

  _handleFinishLoading = () => {
    this.setState({ isLoadingComplete: true });
  };
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  codeHighlightText: {
    color: 'rgba(96,100,109, 0.8)',
  },
});
