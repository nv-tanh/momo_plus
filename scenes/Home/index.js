import React from 'react';
import {StyleSheet, ScrollView, View} from 'react-native';

import Header from './components/Header/index';
import Categories from './components/Categories/index';
import Brands from './components/Brands/index';
import Recommend from './components/Recommend/index';

const index = () => {
  return (
    <View style={styles.container}>
      <Header />
      <ScrollView>
        <Categories />
        <Brands />
        <Recommend />
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E9EBEE',
  },
});

export default index;
