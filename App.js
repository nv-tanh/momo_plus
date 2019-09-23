import React from 'react';
import {StyleSheet, View, Platform, StatusBar, YellowBox} from 'react-native';
YellowBox.ignoreWarnings(['Warning: componentWillMount']);

import AppNavigator from './navigation/AppNavigator';

const App = props => {
  return (
    <View style={styles.container}>
      {Platform.OS === 'ios' && <StatusBar barStyle="default" />}
      <AppNavigator />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E9EBEE',
  },
});

export default App;
