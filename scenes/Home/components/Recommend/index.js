import React from 'react';
import {View, Text, StyleSheet, FlatList} from 'react-native';

import Separator from '../../../Separator/index';
import BrandCard from './Card/index';

const BRANDS = [
  {
    key: '1',
    uri: 'https://wallpaperaccess.com/full/759166.jpg',
    name: 'supreme',
    rating: '5.0',
    discount: '1',
  },
  {
    key: '2',
    uri: 'https://wallpaperaccess.com/full/759166.jpg',
    name: 'supreme',
    rating: '5.0',
    discount: '1',
  },
  {
    key: '3',
    uri: 'https://wallpaperaccess.com/full/759166.jpg',
    name: 'supreme',
    rating: '5.0',
    discount: '1',
  },
  {
    key: '4',
    uri: 'https://wallpaperaccess.com/full/759166.jpg',
    name: 'supreme',
    rating: '5.0',
    discount: '1',
  },
];

const index = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Recommend for you</Text>
      <Separator />
      <View style={styles.flatList}>
        <FlatList
          data={BRANDS}
          renderItem={({item}) => (
            <BrandCard
              brand={item}
              // title={item.title}
              // selected={!!selected.get(item.id)}
              // onSelect={onSelect}
            />
          )}
          horizontal
          showsHorizontalScrollIndicator={false}
          keyExtractor={item => item.key}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginVertical: 20,
  },
  title: {
    fontSize: 25,
  },
  flatList: {
    marginTop: 15,
  },
});

export default index;
