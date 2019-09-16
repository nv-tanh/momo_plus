/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {
  Text,
  StyleSheet,
  TouchableOpacity,
  ActivityIndicator,
  View,
} from 'react-native';
import {Image, Icon} from 'react-native-elements';

const index = ({brand}) => {
  const {uri, name, rating} = brand;

  return (
    <TouchableOpacity style={[styles.card]}>
      <Image
        source={{uri: uri}}
        style={styles.img}
        PlaceholderContent={<ActivityIndicator />}
      />
      <Text style={styles.name}>{name}</Text>
      <View style={styles.ratingContainer}>
        <Icon name="star" type="material" color="orange" size={20} />
        <Text style={{fontSize: 15, fontWeight: 'bold', opacity: 0.7}}>
          {' '}
          {rating}
          <Text style={{opacity: 0.3, fontWeight: 'normal'}}>/5</Text>
        </Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  card: {
    width: 170,
    height: 120,
    borderRadius: 5,
    marginRight: 15,
    justifyContent: 'space-evenly',
    alignItems: 'center',
    backgroundColor: 'white',
    paddingVertical: 5,
  },
  img: {width: 50, height: 50},
  name: {
    fontSize: 20,
    fontWeight: 'bold',
    opacity: 0.8,
  },
  ratingContainer: {
    flexDirection: 'row',
  },
});

export default index;
