import React from 'react';
import {View, StyleSheet} from 'react-native';

const index = () => {
  return <View style={styles.sep} />;
};

const styles = StyleSheet.create({
  sep: {
    backgroundColor: 'red',
    height: 5,
    width: 70,
    borderRadius: 5,
    marginVertical: 5,
  },
});

export default index;
