import React, {useState} from 'react';
import {StyleSheet, View, AppLoading, Platform, StatusBar} from 'react-native';

import AppNavigator from './navigation/AppNavigator';

const App = props => {
  const [isLoadingComplete, setLoadingComplete] = useState(false);

  if (!isLoadingComplete && !props.skipLoadingScreen) {
    return (
      <AppLoading onFinish={() => handleFinishLoading(setLoadingComplete)} />
    );
  } else {
    return (
      <View style={styles.container}>
        {Platform.OS === 'ios' && <StatusBar barStyle="default" />}
        <AppNavigator />
      </View>
    );
  }
};

function handleFinishLoading(setLoadingComplete) {
  setLoadingComplete(true);
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E9EBEE',
  },
});

export default App;
